import json,re
SKIP=re.compile(r'^(Build note|Location / Component|Used on|Not used on|Image Alt Text|Target URL Slug|Meta Title|Meta Description)',re.I)
def seq(fields):
    out=[]
    skipping_depth=None
    for f in fields:
        if skipping_depth is not None and f['depth']>skipping_depth: continue
        skipping_depth=None
        if f['label'] and SKIP.match(f['label']): skipping_depth=f['depth']; continue
        out+= f['values']
    return out
def seqs(name):
    d=json.load(open(f'{name}.fields.json',encoding='utf-8'))
    return {(i,no):(b['title'],s['title'],seq(s['fields']),s['tables']) for i,b in enumerate(d) for no,s in b['sections'].items()}
en=seqs('en'); ar=seqs('ar')
bad=0
for k,(bt,st,es,et) in en.items():
    a=ar.get(k)
    if not a: print('AR missing',bt,st); bad+=1; continue
    as_=a[2]
    tn=(len(et),[len(t) for t in et])==(len(a[3]),[len(t) for t in a[3]])
    if len(es)!=len(as_) or not tn:
        bad+=1; print(f'{bt} [{k[1]}] {st}: en {len(es)} ar {len(as_)} tables_ok={tn}')
print('mismatching sections',bad,'of',len(en))

import sys
def show(block, lang='en', w=70):
    d=json.load(open(f'{lang}.fields.json',encoding='utf-8'))
    for i,b in enumerate(d):
        if b['title'].startswith(block):
            for no,s in b['sections'].items():
                q=seq(s['fields']); print(f'[{no}] {s["title"]} ({len(q)})')
                for j,v in enumerate(q): print(f'   {j}: {v[:w]}')
                for t in s['tables']: print('   TABLE', len(t),'rows', [c[:25] for c in t[0]])
            if b['metaTables']: print('   META TABLE rows',len(b['metaTables'][0]))
            break
if __name__=='__main__' and len(sys.argv)>1: show(sys.argv[1], sys.argv[2] if len(sys.argv)>2 else 'en')
