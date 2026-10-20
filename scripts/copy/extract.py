import re, json
CODE=re.compile(r'`([^`]*)`')
PAIR=re.compile(r'\*\*([^*]+?):\*\*')
def parse_line(line, ctx):
    """'- **Card 01 Label:** `Pillar 01` · **Title (H3):** `Digital Twin`' -> [(label, values, href)]"""
    out=[]; ms=list(PAIR.finditer(line))
    for i,m in enumerate(ms):
        label=m.group(1).strip()
        seg=line[m.end(): ms[i+1].start() if i+1<len(ms) else len(line)]
        href=None
        if '→' in seg:
            before,after=seg.split('→',1); hm=CODE.search(after); href=hm.group(1) if hm else None; seg=before
        vals=CODE.findall(seg)
        cm=re.match(r'^((?:Card|Step|Item|Metric|Risk|Solution|Feature|Tour|Q|A|Row|Field|Stage|Track|Benefit|Runtime)\s*\d+)\b',label)
        if i==0 and cm: ctx['prefix']=cm.group(1)
        elif i>0 and not re.match(r'^(Card|Step|Item)',label) and ctx.get('prefix'): label=ctx['prefix']+' '+label
        out.append((label,vals,href,seg.strip()))
    return out
def section_fields(lines):
    fields=[]; ctx={}; tables=[]; tbl=None
    for ln in lines:
        s=ln.rstrip()
        if s.startswith('|'):
            cells=[c.strip() for c in s.strip('|').split('|')]
            if all(re.fullmatch(r':?-{2,}:?',c) for c in cells): continue
            if tbl is None: tbl=[]; tables.append(tbl)
            tbl.append(cells); continue
        else: tbl=None
        m=re.match(r'^(\s*)[-*] (.*)$',s)
        if not m: continue
        depth=len(m.group(1))//2; body=m.group(2)
        pairs=parse_line(body,ctx)
        if not pairs:
            vals=CODE.findall(body); href=None
            if '→' in body: href=(CODE.findall(body.split('→',1)[1]) or [None])[0]; vals=CODE.findall(body.split('→',1)[0])
            fields.append({'label':None,'values':vals,'href':href,'depth':depth,'raw':body}); continue
        for label,vals,href,seg in pairs:
            fields.append({'label':label,'values':vals,'href':href,'depth':depth,'raw':seg if not vals else None})
    return fields,tables
def build(name):
    doc=json.load(open(f'{name}.json',encoding='utf-8')); out=[]
    for title,blk in doc.items():
        secs={}
        for no,sec in blk['sections'].items():
            f,t=section_fields(sec['lines']); secs[no]={'title':sec['title'],'fields':f,'tables':t}
        mf,mt=section_fields(blk['meta'])
        out.append({'title':title,'kind':blk['kind'],'meta':mf,'metaTables':mt,'sections':secs})
    return out
en=build('en'); ar=build('ar')
json.dump(en,open('en.fields.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
json.dump(ar,open('ar.fields.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
# parity check: labels per section
bad=0
for e,a in zip(en,ar):
    for no in e['sections']:
        el=[f['label'] for f in e['sections'][no]['fields'] if f['label'] and f['values']]
        al=[f['label'] for f in a['sections'].get(no,{'fields':[]})['fields'] if f['label'] and f['values']]
        if el!=al:
            bad+=1
            if bad<=12: print('MISMATCH',e['title'],no,'\n  en-only',[x for x in el if x not in al][:6],'\n  ar-only',[x for x in al if x not in el][:6])
print('sections with label mismatch:',bad)
