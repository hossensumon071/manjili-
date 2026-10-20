from paths import EN_MD, AR_MD, OUT_DIR
import json,re,sys
from seq import SKIP
def items(fields):
    """ordered (value, href) list, skipping build notes etc."""
    out=[]; skip=None
    for f in fields:
        if skip is not None and f['depth']>skip: continue
        skip=None
        if f['label'] and SKIP.match(f['label']): skip=f['depth']; continue
        vs=f['values']
        for i,v in enumerate(vs): out.append((v, f['href'] if i==len(vs)-1 else None))
    return out
def load(lang):
    d=json.load(open(f'{lang}.fields.json',encoding='utf-8'))
    return d
EN=load('en'); AR=load('ar')
SRC={'en':''+EN_MD+'','ar':''+AR_MD+''}
def blk(D,i): return D[i]
def sec(D,i,no): return items(D[i]['sections'][no]['fields'])
def tables(D,i,no): return D[i]['sections'][no]['tables']
def V(s): return [v for v,_ in s]
def H(s): return [h for _,h in s]
IDX={b['title']:i for i,b in enumerate(EN)}
def I(name): return IDX[name]
strip_code=lambda c: re.sub(r'^`|`$','',c.strip())
def cell(c): 
    m=re.findall(r'`([^`]*)`',c); return m[0] if m else c.strip()

def build(lang):
    D=EN if lang=='en' else AR
    P={}
    # ---- metadata table
    mt=D[I('Sitewide Metadata')]['metaTables'][0][1:]
    meta={}
    for r in mt:
        slug=cell(r[1]); meta[slug if slug.startswith('/') else '*404*']={'title':cell(r[2]),'description':cell(r[3])}
    P['meta']=meta
    # ---- navbar
    nb=V(sec(D,I('Global Navbar'),'01'))
    if lang=='en': logo,cse,pillars,cases,_en,toggle,cta=nb
    else: logo,cse,pillars,cases,toggle,cta=nb
    dd=V(sec(D,I('Global Navbar'),'02'))
    mm=V(sec(D,I('Global Navbar'),'03'))
    P['nav']={'cse':cse,'pillars':pillars,'caseStudies':cases,'toggle':toggle,'cta':cta,
      'dropdown':[{'name':dd[i*2],'descriptor':dd[i*2+1]} for i in range(6)],'viewAll':dd[12],
      'openMenu':mm[0],'closeMenu':mm[1]}
    # ---- footer
    F=I('Global Footer')
    b1=V(sec(D,F,'01')); c2=V(sec(D,F,'02')); c3=V(sec(D,F,'03')); c4=V(sec(D,F,'04')); soc=sec(D,F,'05'); bb=V(sec(D,F,'06'))
    socials=[]
    for (v,h) in soc:
        lab=re.sub(r'^aria-label="|"$','',v); socials.append({'label':lab,'href':h})
    P['footer']={'tagline':b1[1],'trust':b1[2:5],'pillarsHeader':c2[0],'pillars':c2[1:7],
      'procHeader':c3[0],'proc':c3[1:5],'contactHeader':c4[0],'contact':c4[1:6],'hours':c4[6],
      'socials':socials,'legal':bb[0],'privacy':bb[1] }
    # terms label: second link in bottom bar raw line
    raw=open(SRC[lang],encoding='utf-8').read().split('\n')
    ln=[l for l in raw if l.startswith('- **Links:**') and '/privacy' in l][0]
    codes=re.findall(r'`([^`]*)`',ln)   # [Privacy, /privacy, Terms, /terms]
    P['footer']['privacy'],P['footer']['terms']=codes[0],codes[2]
    sl=[l for l in raw if l.startswith('- **Secondary CTA:**') and 'case-studies' in l][0]
    P['ctaBanner_alt']=re.findall(r'`([^`]*)`',sl.split('*(on',1)[1])[1]
    # ---- CTA banner (component meta)
    cm={f['label'].split(' (')[0]:(f['values'],f['href']) for f in D[I('Shared CTA Banner')]['meta'] if f['label'] and f['values']}
    P['ctaBanner']={'eyebrow':cm['Eyebrow'][0][0],'title':cm['H2'][0][0],'body':cm['Subheading / Body Copy'][0][0],
      'primary':cm['Primary CTA'][0][0],'secondary':cm['Secondary CTA'][0][0]}
    # case-studies variant label
    P['ctaBanner']['secondaryOnCases']=P.pop('ctaBanner_alt')
    # ---- FAQ
    s1=V(sec(D,I('Shared FAQ Module'),'01')); s2=V(sec(D,I('Shared FAQ Module'),'02'))
    P['faq']={'eyebrow':s1[0],'title':s1[1],'sideTitle':s1[2],'sideBody':s1[3],'cta':s1[4],
      'shared':[{'q':s2[i*2],'a':s2[i*2+1]} for i in range(len(s2)//2)]}
    # ---- UI + 404
    ui=V(sec(D,I('Shared UI Strings'),'01')); nf=V(sec(D,I('Shared UI Strings'),'02'))
    P['ui']={'skip':ui[0],'logoLabel':ui[1]}
    P['notFound']={'eyebrow':nf[0],'title':nf[1],'body':nf[2],'primary':nf[3],'secondary':nf[4]}
    return P
if __name__=='__main__':
    for lang in ['en','ar']:
        P=build(lang); print(lang, json.dumps({k:(v if k!='meta' else len(v)) for k,v in P.items()},ensure_ascii=False)[:1500]); print()
