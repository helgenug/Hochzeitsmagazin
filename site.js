(function(){
'use strict';
function eventState(config,now=Date.now()){
 const days=config.days.map(d=>({start:Date.parse(d.start),end:Date.parse(d.end)}));
 if(!days.length||days.some(d=>!Number.isFinite(d.start)||!Number.isFinite(d.end)||d.end<=d.start))throw new Error('Ungültige Messekonfiguration');
 const first=days[0],last=days.at(-1);let target=null,status,phase;
 if(now<first.start){target=first.start;status='Bis zum Messebeginn';phase='before'}
 else if(now>=last.end){status=`Die HochzeitsMesse ${config.year} ist beendet. Der nächste Termin folgt.`;phase='after'}
 else{const live=days.findIndex(d=>now>=d.start&&now<d.end);if(live!==-1){status=live===0?'Die HochzeitsMesse läuft heute.':'Heute ist der zweite Messetag.';phase='live'}else{target=days.find(d=>now<d.start).start;status='Der zweite Messetag beginnt am '+new Intl.DateTimeFormat('de-DE',{day:'numeric',month:'long',timeZone:config.timeZone}).format(new Date(target))+' um '+new Intl.DateTimeFormat('de-DE',{hour:'2-digit',minute:'2-digit',timeZone:config.timeZone}).format(new Date(target))+' Uhr.';phase='between'}}
 const total=target===null?0:Math.max(0,Math.floor((target-now)/1000));
 return {phase,status,target,parts:[Math.floor(total/86400),Math.floor(total/3600)%24,Math.floor(total/60)%60,total%60]};
}
if(typeof module!=='undefined'&&module.exports)module.exports={eventState};
if(typeof document==='undefined')return;
const menuButton=document.querySelector('.menu-toggle'),menu=document.querySelector('#navigation');
function closeMenu(){menuButton?.setAttribute('aria-expanded','false');menu?.classList.remove('is-open')}
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menu.classList.toggle('is-open',open)});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuButton?.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus()}});
const oldHashes={locationModal:'trauorte.html',fotoModal:'fotografie-film.html',stylingModal:'brautstyling.html',juwelierModal:'trauringe.html',impressumModal:'impressum.html',datenschutzModal:'datenschutz.html'};
if(oldHashes[location.hash.slice(1)])location.replace(oldHashes[location.hash.slice(1)]);
const eventConfig=window.MAGAZINE_EVENT;
if(eventConfig&&document.querySelector('[data-event-status]')){
 const date=new Intl.DateTimeFormat('de-DE',{day:'numeric',month:'long',year:'numeric',timeZone:eventConfig.timeZone});
 const time=new Intl.DateTimeFormat('de-DE',{hour:'2-digit',minute:'2-digit',timeZone:eventConfig.timeZone});
 document.querySelectorAll('[data-event-date]').forEach(el=>{el.textContent=eventConfig.days.map(d=>date.format(new Date(d.start))).join(' & ')+' · '+time.format(new Date(eventConfig.days[0].start))+'–'+time.format(new Date(eventConfig.days[0].end))+' Uhr'});
 document.querySelectorAll('[data-event-address]').forEach(el=>el.textContent=eventConfig.venue+' · '+eventConfig.address);
 function tick(){const state=eventState(eventConfig);document.querySelectorAll('[data-event-status]').forEach(el=>{if(el.textContent!==state.status)el.textContent=state.status});document.querySelectorAll('.countdown').forEach(el=>{el.hidden=state.target===null;el.setAttribute('aria-label',state.phase==='between'?'Zeit bis zum zweiten Messetag':'Zeit bis zum Messebeginn');el.querySelectorAll('[data-count]').forEach((n,i)=>n.textContent=String(state.parts[i]).padStart(2,'0'))})}
 tick();setInterval(tick,1000);
}
document.querySelectorAll('[data-fair-end]').forEach(el=>{const today=new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Berlin'}).format(new Date());if(el.dataset.fairEnd<today){const note=el.querySelector('.source-note');if(note)note.textContent='Dieser Messetermin liegt in der Vergangenheit.';el.querySelectorAll('[download]').forEach(a=>a.hidden=true)}});
const directory=document.querySelector('[data-directory]');
if(directory){
 const controls=[...directory.querySelectorAll('[data-filter]')],items=[...document.querySelectorAll('[data-directory-item]')],count=document.querySelector('[data-results]'),empty=document.querySelector('[data-empty]');
 let group='';
 function fromURL(){const params=new URLSearchParams(location.search);group=params.get('group')||'';controls.forEach(c=>{const value=params.get(c.dataset.filter)||'';if(c.type==='checkbox')c.checked=value==='yes';else{c.value=value;if(c.tagName==='SELECT'&&c.selectedIndex<0)c.value=''}})}
 function filter(updateURL=true){const values=Object.fromEntries(controls.map(c=>[c.dataset.filter,c.type==='checkbox'?(c.checked?'yes':''):c.value]));let visible=0;for(const item of items){let match=Object.entries(values).every(([key,value])=>!value||(key==='search'?item.dataset.search.includes(value.trim().toLowerCase()):key==='ceremony'?item.dataset.ceremony?.split(' ').includes(value):item.dataset[key]===value));if(group==='land')match=match&&['Schlösser','Gutshäuser'].includes(item.dataset.type);item.hidden=!match;if(match)visible++}count.textContent=visible+' '+(directory.dataset.directory==='places'?(visible===1?'Ort':'Orte'):directory.dataset.directory==='fairs'?(visible===1?'Messe':'Messen'):'Anbieter');empty.hidden=visible>0;if(updateURL){const url=new URL(location.href);url.search='';Object.entries(values).forEach(([key,value])=>{if(value)url.searchParams.set(key,value)});if(group)url.searchParams.set('group',group);history.replaceState(null,'',url)}}
 directory.addEventListener('input',e=>{if(e.target.dataset.filter==='type')group='';filter()});directory.addEventListener('change',e=>{if(e.target.dataset.filter==='type')group='';filter()});directory.addEventListener('submit',e=>{e.preventDefault();filter()});directory.addEventListener('reset',()=>{group='';setTimeout(()=>filter(),0)});window.addEventListener('popstate',()=>{fromURL();filter(false)});fromURL();filter(false);
}
const form=document.querySelector('#anzeigen-form');
if(form){
 const success=document.querySelector('#form-success'),error=document.querySelector('#form-error'),submit=document.querySelector('#submit-btn'),label=document.querySelector('#btn-label');
 form.addEventListener('submit',async e=>{e.preventDefault();if(!form.reportValidity())return;success.hidden=true;error.hidden=true;submit.disabled=true;form.setAttribute('aria-busy','true');label.textContent='Wird gesendet …';const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),20000);try{const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'},signal:controller.signal});if(!response.ok)throw Error('Senden fehlgeschlagen');success.hidden=false;form.reset();success.focus()}catch{error.hidden=false;error.focus()}finally{clearTimeout(timeout);submit.disabled=false;form.removeAttribute('aria-busy');label.textContent='Anfrage absenden'}});
}
})();
