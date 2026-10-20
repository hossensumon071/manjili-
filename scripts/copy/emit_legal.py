import json,re
from emit_all import RAW, idx, dump, CODE
def legal(lang,prefix):
    b=list(RAW[lang].values())[idx(prefix)]
    H=[l for l in b['sections']['01']['lines'] if l.strip()]
    first=lambda pat:[l for l in H if pat in l][0]
    j=[k for k,l in enumerate(H) if '**Details list:**' in l][0]
    facts=[]
    for l in H[j+1:]:
        if not l.startswith('  - '): break
        c=CODE.findall(l); facts.append({'label':c[0],'value':c[1]})
    head={'crumb':CODE.findall(first('**Breadcrumb:**'))[-1],'eyebrow':CODE.findall(first('**Eyebrow:**'))[0],
          'title':CODE.findall(first('**H1:**'))[0],'intro':CODE.findall(first('**Subheading'))[0],
          'facts':facts,'chips':CODE.findall(first('**Chips:**'))}
    sections=[]; cur=None; unknown=set()
    for l in b['sections']['02']['lines']:
        m=re.match(r'^#### .*`#([\w-]+)`',l)
        if m: cur={'id':m.group(1),'title':None,'blocks':[]}; sections.append(cur); continue
        m=re.match(r'^- \*\*([^*]+?):\*\*\s*(.*)$',l)
        if not m or cur is None: continue
        lab=m.group(1); c=CODE.findall(m.group(2))
        if not c: continue
        v=c[0]
        if lab=='H2': cur['title']=v
        elif lab=='H3': cur['blocks'].append({'h3':v})
        elif lab=='Paragraph': cur['blocks'].append({'p':v})
        elif lab=='Bullet':
            if cur['blocks'] and 'ul' in cur['blocks'][-1]: cur['blocks'][-1]['ul'].append(v)
            else: cur['blocks'].append({'ul':[v]})
        elif lab.startswith('Item'):
            if cur['blocks'] and 'ol' in cur['blocks'][-1]: cur['blocks'][-1]['ol'].append(v)
            else: cur['blocks'].append({'ol':[v]})
        else:
            unknown.add(lab); cur['blocks'].append({'p':' · '.join(c) if len(c)>1 else v})
    return {'head':head,'sections':sections},unknown
for L in ['en','ar']:
    for name,pre in [('privacy','Privacy Policy'),('terms','Terms of Service')]:
        d,u=legal(L,pre); dump(L,name,d)
        print(L,name,len(d['sections']),'sections',sum(len(s['blocks']) for s in d['sections']),'blocks','unknown labels:',u, [s['id'] for s in d['sections']][:12])
