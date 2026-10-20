import json,re
from seq import SKIP
def norm(label):
    l=re.sub(r'\(.*?\)','',label)          # drop "(H3)", "(`<p>`)" …
    l=re.sub(r'`[^`]*`','',l)
    words=re.findall(r'[A-Za-z0-9]+',l)
    if not words: return '_'
    k=words[0].lower()+''.join(w[:1].upper()+w[1:].lower() for w in words[1:])
    return k
def keyed_items(fields):
    """[(key, value, href)] for EN with keys from labels; repeated keys become arrays."""
    out=[]; skip=None; parent=None
    for f in fields:
        if skip is not None and f['depth']>skip: continue
        skip=None
        if f['label'] and SKIP.match(f['label']): skip=f['depth']; continue
        if f['label'] and not f['values']: parent=norm(f['label']) if f['depth']==1 else parent; continue
        key=norm(f['label']) if f['label'] else '_'
        if f['label'] is None or key in ('_',): key=(parent or 'item')
        for i,v in enumerate(f['values']):
            out.append((key, v, f['href'] if i==len(f['values'])-1 else None))
    return out
def values(fields):
    return [v for _,v,_ in keyed_items(fields)], [h for _,_,h in keyed_items(fields)]
def assemble(keys, vals, hrefs):
    obj={}
    order=[]
    for k,v,h in zip(keys,vals,hrefs):
        if k in obj:
            if not isinstance(obj[k],list): obj[k]=[obj[k]]
            obj[k].append(v)
        else: obj[k]=v; order.append(k)
        if h:
            hk=k+'Href'
            if hk in obj:
                if not isinstance(obj[hk],list): obj[hk]=[obj[hk]]
                obj[hk].append(h)
            else: obj[hk]=h
    return obj
def cell(c):
    m=re.findall(r'`([^`]*)`',c); return m[0] if m else re.sub(r'\*\*','',c).strip()
def page(en_blk, ar_blk):
    res={'en':{},'ar':{}, 'mismatch':[]}
    for no,es in en_blk['sections'].items():
        ki=keyed_items(es['fields']); keys=[k for k,_,_ in ki]
        ev=[v for _,v,_ in ki]; eh=[h for _,_,h in ki]
        res['en']['s'+no]=assemble(keys,ev,eh)
        res['en']['s'+no]['_tables']=[[[cell(c) for c in r] for r in t] for t in es['tables']]
        as_=ar_blk['sections'].get(no)
        av_items=keyed_items(as_['fields']) if as_ else []
        av=[v for _,v,_ in av_items]; ah=[h for _,_,h in av_items]
        if len(av)==len(ev):
            res['ar']['s'+no]=assemble(keys,av,ah)
        else:
            res['mismatch'].append(no); res['ar']['s'+no]={'_raw':[(k,v,h) for k,v,h in av_items]}
        res['ar']['s'+no]['_tables']=[[[cell(c) for c in r] for r in t] for t in (as_['tables'] if as_ else [])]
    return res
EN=json.load(open('en.fields.json',encoding='utf-8')); AR=json.load(open('ar.fields.json',encoding='utf-8'))
def outline(i, w=38):
    r=page(EN[i],AR[i])
    for s,o in r['en'].items():
        print(' ',s, EN[i]['sections'][s[1:]]['title'], '' if s[1:] not in r['mismatch'] else '  <<MISMATCH>>')
        for k,v in o.items():
            if k=='_tables':
                for t in v: print('     TABLE',len(t),'x',len(t[0]),t[0])
                continue
            vv=v if isinstance(v,list) else [v]
            print('    ',k,'=',[x[:w] for x in vv][:6], f'(+{len(vv)-6})' if len(vv)>6 else '')
if __name__=='__main__':
    import sys
    for i,b in enumerate(EN):
        if b['title'].startswith(sys.argv[1]): print(b['title']); outline(i)
