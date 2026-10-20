from paths import EN_MD, AR_MD, OUT_DIR
import re, json, sys
def parse(path):
    lines=open(path,encoding='utf-8').read().split('\n')
    doc={}; cur=None; sec=None
    for ln in lines:
        m=re.match(r'^## (PAGE|COMPONENT): (.+)$',ln)
        if m:
            cur={'kind':m.group(1),'title':m.group(2).strip(),'meta':[],'sections':{}}
            doc[m.group(2).strip()]=cur; sec=None; continue
        m=re.match(r'^### SECTION \[(\d+)\]: (.+)$',ln)
        if m and cur is not None:
            sec={'title':m.group(2).strip(),'lines':[]}; cur['sections'][m.group(1)]=sec; continue
        if re.match(r'^#{1,2} ',ln): 
            if not ln.startswith('## PAGE') and not ln.startswith('## COMPONENT'): cur=None; sec=None
            continue
        if cur is None: continue
        (sec['lines'] if sec else cur['meta']).append(ln)
    return doc
for name,f in [('en',''+EN_MD+''),('ar',''+AR_MD+'')]:
    d=parse(f); json.dump(d,open(f'{name}.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
    print(name,len(d),'blocks')
    print('  ',[k for k in d][:60])
