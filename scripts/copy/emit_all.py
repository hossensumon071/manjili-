from paths import EN_MD, AR_MD, OUT_DIR
import json,re,os
from autogen import page as autopage, keyed_items, EN as ENF, AR as ARF
OUT=''+OUT_DIR+''
RAW={'en':json.load(open('en.json',encoding='utf-8')),'ar':json.load(open('ar.json',encoding='utf-8'))}
SRC={'en':open(''+EN_MD+'',encoding='utf-8').read().split('\n'),
     'ar':open(''+AR_MD+'',encoding='utf-8').read().split('\n')}
CODE=re.compile(r'`([^`]*)`')
def idx(prefix): return [i for i,b in enumerate(ENF) if b['title'].startswith(prefix)][0]
def rawblk(lang,i): return list(RAW[lang].values())[i]
def flat(lang,i,no):
    """ordered values (skipping build notes) of a section"""
    blk=(ENF if lang=='en' else ARF)[i]; return [v for _,v,_ in keyed_items(blk['sections'][no]['fields'])]
def dump(lang,name,obj):
    p=f'{OUT}/{lang}/{name}.json'; os.makedirs(os.path.dirname(p),exist_ok=True)
    json.dump(obj,open(p,'w',encoding='utf-8'),ensure_ascii=False,indent=1)
report=[]
def crumbs(lang,i,no):
    ls=rawblk(lang,i)['sections'][no]['lines']
    l=[x for x in ls if '**Breadcrumb:**' in x and '→' in x]
    if not l: return []
    return [{'label':a,'href':b or None} for a,b in re.findall(r'`([^`]*)`(?:\s*→\s*`([^`]*)`)?', l[0])]
# ---------- generic pages
GENERIC={'home':'Homepage','platform':'Platform (CSE)','pillar-01':'Pillar 01','pillar-02':'Pillar 02','pillar-03':'Pillar 03',
         'pillar-04':'Pillar 04','pillar-05':'Pillar 05','pillar-06':'Pillar 06'}
for name,prefix in GENERIC.items():
    r=autopage(ENF[idx(prefix)],ARF[idx(prefix)])
    if r['mismatch']: report.append((name,r['mismatch']))
    for L in ['en','ar']:
        r[L]['s01']['crumbs']=crumbs(L,idx(prefix),'01')
        dump(L,name,r[L])
# ---------- case-study template strings (from the "Case-Study Template Rules" block)
def template_strings(lang):
    L=SRC[lang]; i=[j for j,l in enumerate(L) if l.startswith('## Case-Study Template Rules')][0]
    block=[]
    for l in L[i+1:]:
        if l.startswith('## '): break
        block.append(l)
    txt='\n'.join(block); c=CODE.findall(txt)
    if lang=='en':
        # Home,/,Case Studies,/case-studies,[Project],Plan a Similar Launch,/contact-us,See the Technical Scope,#solution,Client,Project,Location,Scope,
        # The Challenge,Our Solution,id="solution",Sales Team Enablement,Leasing Team Enablement,Reported Performance,Quality & Compliance,
        # Delivery Outcomes,Reported Performance,Reported Performance Across Cityscape Global,Outcome:,Delivery Standards,Standard,What We Deployed,Why It Matters,More Case Studies,More Launches We've Powered,...
        g=lambda s: c[c.index(s)]
        return {'home':c[0],'cases':c[2],'primary':g('Plan a Similar Launch'),'secondary':g('See the Technical Scope'),
            'sidebar':[g('Client'),g('Project'),g('Location'),g('Scope')],
            'challenge':g('The Challenge'),'solution':g('Our Solution'),'enablement':g('Sales Team Enablement'),'leasing':g('Leasing Team Enablement'),
            'reported':'Reported Performance','quality':g('Quality & Compliance'),'outcomes':g('Delivery Outcomes'),'outcomePrefix':g('Outcome:'),
            'standards':g('Delivery Standards'),'header':[g('Standard'),g('What We Deployed'),g('Why It Matters')],
            'relatedEyebrow':g('More Case Studies'),'relatedTitle':g("More Launches We've Powered"),'cardLink':'View Case Study'}
    # ar order per file
    find=lambda pat: [l for l in block if pat in l][0]
    bc=CODE.findall(find('**Breadcrumb:**')); hero=CODE.findall(find('**Hero CTAs:**'))
    side=CODE.findall(find('**Sidebar labels')); eb=[CODE.findall(l) for l in block if l.strip().startswith('- `')]
    eb=[x for x in eb if x]
    res=CODE.findall(find('**Results H2:**')); std=CODE.findall(find('**Standards table:**')); rel=CODE.findall(find('**Related cards:**'))
    enab=CODE.findall(find('تمكين فريق المبيعات'))
    return {'home':bc[0],'cases':bc[2],'primary':hero[0],'secondary':hero[2],'sidebar':side,
        'challenge':eb[0][0],'solution':eb[1][0],'enablement':enab[0],'leasing':enab[1],'reported':eb[3][0],'quality':eb[4][0],
        'outcomes':res[0],'outcomePrefix':res[1],'standards':std[0],'header':std[1:4],
        'relatedEyebrow':rel[0],'relatedTitle':rel[1],'cardLink':rel[2]}
TPL={L:template_strings(L) for L in ['en','ar']}
for L in ['en','ar']: dump(L,'case-template',TPL[L])
# ---------- case index
ci=idx('Case Studies Index')
def case_index(lang):
    s1=autopage(ENF[ci],ARF[ci])[lang]['s01']
    raw=rawblk(lang,ci)['sections']['02']['lines']; txt='\n'.join(raw)
    tabs=CODE.findall([l for l in raw if 'Filter Tabs' in l][0])
    cards=[]
    if lang=='en':
        for l in raw:
            m=re.match(r'\s*- \*\*Card (\d+):\*\*(.*)$',l)
            if not m: continue
            c=CODE.findall(m.group(2)); href=c[-1]
            filt=c[5:-1]
            cards.append({'tag':c[0],'client':c[1],'title':c[2],'location':c[3],'body':c[4],'filters':[tabs.index(f) for f in filt],'href':href})
        link=CODE.findall([l for l in raw if 'Card link label' in l][0])[0]
        counter='[n] case studies'
    else:
        cur=None
        for l in raw:
            m=re.match(r'\s*- \*\*Card (\d+)\*\* → `([^`]*)`',l)
            if m: cur={'href':m.group(2),'vals':[]}; cards.append(cur); continue
            if cur is not None and re.match(r'\s{4}- ',l): cur['vals']+=CODE.findall(l)
        cards=[{'tag':c['vals'][0],'client':c['vals'][1],'title':c['vals'][2],'location':c['vals'][3],'body':c['vals'][4],'href':c['href']} for c in cards]
        link=CODE.findall([l for l in raw if 'Card link label' in l][0])[0]
        counter={'one':'دراسة حالة واحدة','two':'دراستا حالة','few':'[n] دراسات حالة','many':'[n] دراسة حالة'}
    s3=autopage(ENF[ci],ARF[ci])[lang]['s03']
    s1['crumbs']=crumbs(lang,ci,'01')
    return {'hero':s1,'tabs':tabs,'cards':cards,'cardLink':link,'counter':counter,'standards':s3}
ENCI=case_index('en'); ARCI=case_index('ar')
for c_ar,c_en in zip(ARCI['cards'],ENCI['cards']): c_ar['filters']=c_en['filters']
dump('en','case-index',ENCI); dump('ar','case-index',ARCI)
# ---------- case studies
CASES={'thee-erth':('Thee Erth','A'),'masar-maab':('Masar','B'),'dyari-signature':('Dyari','B'),'raffles-residences-jeddah':('Raffles','B'),
       'nhc-alwareef':('Alwareef','A'),'nhc-al-mukiman':('Al-Mukiman','A'),'nhc-malfa-al-assalah':('Malfa','A'),'nhc-tabuk-hills':('Tabuk','A'),
       'mohammed-al-habib':('Mohammed','B'),'al-basateen-offices':('Al Basateen','B')}
def chunk(v,n): return [v[i:i+n] for i in range(0,len(v),n)]
def table(v,lang,ncols=3):
    # v = [eyebrow,h2,(header…),rows…]; AR omits the header
    body=v[2:]
    if len(body)%ncols: raise ValueError('table')
    rows=chunk(body,ncols)
    if lang=='en' and len(rows)==4: rows=rows[1:]
    return {'eyebrow':v[0],'title':v[1],'rows':rows}
def case(lang,slug):
    i=idx(CASES[slug][0]); t=CASES[slug][1]; F=lambda no: flat(lang,i,no)
    h=F('01'); hero={'eyebrow':h[0],'title':h[1],'body':h[2],'chips':h[5:-3],'mockupChips':h[-3:]}
    side=F('02')
    out={'template':t,'hero':hero,'sidebar':side}
    if t=='A':
        c=F('03'); out['challenge']={'eyebrow':c[0],'title':c[1],'body':c[2],'cards':[dict(zip(['index','category','title','body'],x)) for x in chunk(c[3:],4)]}
        s=F('04'); rest=s[3:]
        numbered=re.fullmatch(r'0\d',rest[0]) is not None
        size=10 if numbered else 9
        if len(rest)%size: raise ValueError(f'solution blocks {len(rest)}')
        blocks=[]
        for n,b in enumerate(chunk(rest,size)):
            if not numbered: b=[f'{n+1:02d}']+b
            blocks.append({'index':b[0],'label':b[1],'title':b[2],'body':b[3],'features':[{'title':b[4+k*2],'body':b[5+k*2]} for k in range(3)]})
        out['solution']={'eyebrow':s[0],'title':s[1],'body':s[2],'blocks':blocks}
        r=F('05'); out['outcomes']={'eyebrow':r[0],'title':r[1],'stats':[dict(zip(['value','label','title','body'],x)) for x in chunk(r[2:],4)]}
        out['standards']=table(F('06'),lang)
    else:
        c=F('03'); out['challenge']={'eyebrow':c[0],'title':c[1],'body':c[2],'header':c[3:6],'rows':chunk(c[6:],3)}
        s=F('04'); out['solution']={'eyebrow':s[0],'title':s[1],'body':s[2],'blocks':[{'title':b[0],'points':b[1:3]} for b in chunk(s[3:],3)]}
        e=F('05'); out['enablement']={'eyebrow':e[0],'title':e[1],'body':e[2],'steps':[dict(zip(['index','title','body'],x)) for x in chunk(e[3:],3)]}
        r=F('06'); out['outcomes']={'eyebrow':r[0],'title':r[1],'stats':[dict(zip(['value','label','body','outcome'],x)) for x in chunk(r[2:],4)]}
        out['standards']=table(F('07'),lang)
    return out
for slug in CASES:
    for L in ['en','ar']:
        try: dump(L,f'cases/{slug}',case(L,slug))
        except Exception as ex: report.append((slug,L,str(ex)))
print('report',report)
