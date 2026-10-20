import json,re
from emit_all import RAW, idx, dump, CODE
def lines(lang,no):
    b=list(RAW[lang].values())[idx('Contact')]; return [l for l in b['sections'][no]['lines'] if l.strip()]
def first(ls,pat): return [l for l in ls if pat in l][0]
def contact(lang):
    o={}
    L=lines(lang,'01')
    bc=CODE.findall(first(L,'**Breadcrumb:**'))
    o['hero']={'crumb':bc[-1],'eyebrow':CODE.findall(first(L,'**Eyebrow:**'))[0],'title':CODE.findall(first(L,'**H1:**'))[0],
        'body':CODE.findall(first(L,'**Subheading'))[0],'cta':CODE.findall(first(L,'**Secondary CTA'))[0],
        'fitTitle':CODE.findall(first(L,'**Card title:**'))[0],
        'fitRows':[CODE.findall(first(L,f'**Row {n}:**')) for n in (1,2,3)],'fitFooter':CODE.findall(first(L,'**Card footer:**'))[0]}
    L=lines(lang,'02')
    f={'title':CODE.findall(first(L,'**H2:**'))[0],'body':CODE.findall(first(L,'**Subheading'))[0],
       'reassurance':CODE.findall(first(L,'**Reassurance'))[0],'required':CODE.findall(first(L,'**Required legend'))[0]}
    if lang=='en': f['legends']=[CODE.findall(l)[0] for l in L if '**Legend:**' in l]
    else: f['legends']=[CODE.findall(l)[0] for l in L if l.startswith('#### Fieldset')]
    fields=[]
    for n in range(1,12):
        l=first(L,f'**Field {n}:**')
        get=lambda key: (re.search(key+r' `([^`]*)`',l) or [None,None])[1]
        fd={'label':get('Label'),'placeholder':get('Placeholder'),'helper':get('Helper'),'prefix':get('Prefix') or get('Fixed prefix')}
        j=L.index(l)
        if j+1<len(L) and '**Options:**' in L[j+1]: fd['options']=CODE.findall(L[j+1])
        fields.append(fd)
    f['fields']=fields
    f['consent']=CODE.findall(first(L,'**Consent checkbox'))[0]
    f['privacyLinkText']='Privacy Policy' if lang=='en' else 'سياسة الخصوصية'
    f['submit']=CODE.findall([l for l in L if '**Primary CTA (submit' in l or '**Submit button:**' in l][0])[0]
    f['nda']=CODE.findall(first(L,'**NDA note'))[0]
    o['form']=f
    L=lines(lang,'03')
    e={}
    i=[k for k,l in enumerate(L) if '**Error 1' in l][0]
    e['required']=[CODE.findall(l)[0] for l in L[i+1:i+9]]
    for n,key in [(2,'select'),(3,'multi'),(4,'email'),(5,'freeMail'),(6,'mobile'),(7,'pastDate'),(8,'noNumber'),(9,'belowThreshold'),(10,'consent'),(11,'tooLong')]:
        e[key]=CODE.findall(first(L,f'**Error {n} '))[0]
    if lang=='en':
        l=first(L,'**Error 12'); c=CODE.findall(l); e['summary']={'many':c[0],'one':c[1]}
    else:
        j=[k for k,l in enumerate(L) if '**Error 12' in l][0]
        c=[CODE.findall(l)[0] for l in L[j+1:j+5]]; e['summary']={'one':c[0],'two':c[1],'many':c[2]}
    o['errors']=e
    L=lines(lang,'04')
    s={'loading':CODE.findall(first(L,'**State 1'))[0]}
    j=[k for k,l in enumerate(L) if '**State 2' in l][0]
    s['successTitle']=CODE.findall(L[j+1])[0]; s['successBody']=CODE.findall(L[j+2])[0]; s['successLink']=CODE.findall(L[j+3])[0]
    s['toast']=CODE.findall(first(L,'**State 3'))[0]
    j=[k for k,l in enumerate(L) if '**State 4' in l][0]
    s['failure']=CODE.findall(L[j+1])[0]; s['retry']=CODE.findall(L[j+2])[0]
    s['duplicate']=CODE.findall(first(L,'**State 5'))[0]; s['spam']=CODE.findall(first(L,'**State 6'))[0]
    o['states']=s
    L=lines(lang,'05')
    eb=[l for l in L if '**Eyebrow:**' in l][0]
    o['next']={'eyebrow':CODE.findall(eb)[0],'title':CODE.findall(first(L,'**H2:**'))[0],
       'steps':[dict(zip(['index','title','body'],CODE.findall(first(L,f'**Step {n}:**')))) for n in (1,2,3)],
       'direct':CODE.findall(first(L,'**Direct-contact line'))[0]}
    L=lines(lang,'06')
    eb=first(L,'**Eyebrow:**'); c=CODE.findall(eb)
    o['details']={'eyebrow':c[0],'title':c[1] if len(c)>1 else CODE.findall(first(L,'**H2:**'))[0],'body':CODE.findall(first(L,'**Subheading'))[0]}
    rows=[]
    for key in ['Office','Phone','WhatsApp','Sales & scoping','Client support','Hours','Launch-day coverage']:
        l=first(L,f'**{key}:**'); c=CODE.findall(l)
        if lang=='en': rows.append({'label':key,'value':c[0]})
        else: rows.append({'label':c[0],'value':c[1]})
    o['details']['rows']=rows
    m=CODE.findall(first(L,'**Map card label')); o['details']['mapLabel']=m[0]; o['details']['mapOverlay']=m[1]
    o['details']['mapCta']=CODE.findall(first(L,'**Secondary CTA'))[0]
    return o
for L in ['en','ar']:
    c=contact(L); dump(L,'contact',c)
    print(L, c['hero']['title'], '|', c['form']['legends'], '|', c['form']['fields'][4], '|', c['errors']['summary'], '|', c['details']['rows'][0])
