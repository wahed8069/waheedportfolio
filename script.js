const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalImg = document.getElementById('modalImg');
const modalKicker = document.getElementById('modalKicker');
const modalTags = document.getElementById('modalTags');
const keraCaseStudy = document.getElementById('keraCaseStudy');
const data = {
  kera:{kicker:'01 / MOBILE PRODUCT',title:'Kera Bus',text:'A mobile tracking concept focused on clearer bus operations, live movement, and time-sensitive travel information.',img:'assets/kera-bus.jpg',tags:['User flows','Wireframes','UI design','Prototype']},
  orders:{kicker:'02 / MOBILE PRODUCT',title:'Tracking bulk orders',text:'A streamlined order-tracking experience designed around visibility, status, and quick access to the information that matters.',img:'assets/bulk-orders.jpg',tags:['Interaction design','UI system','Mobile UX','Prototype']},
  uscholar:{kicker:'03 / MOBILE PRODUCT',title:'uScholar',text:'A study-abroad discovery experience designed to help students browse destinations and move through the journey with more confidence.',img:'assets/uscholar.jpg',tags:['Research','Mobile UI','Information architecture','Usability']},
  lounge:{kicker:'04 / MOBILE PRODUCT',title:'LOUNGE',text:'A reading and book discovery concept with a calm browsing flow, clear hierarchy, and focused content presentation.',img:'assets/lounge.jpg',tags:['Content UX','Visual design','Mobile UI','Prototype']},
  coresq:{kicker:'03 / BRAND IDENTITY',title:'CORESQ',text:'A financial intelligence identity built around a geometric core, connected systems, and a confident navy / teal visual language.',img:'assets/coresq.jpg',tags:['Logo design','Brand system','Typography','Art direction']},
  galaxy:{kicker:'05 / WEB & PRODUCT DESIGN',title:'Galaxy Venture HRC',text:'A recruitment platform connecting professionals with opportunities across Europe — designed from discovery and job search through hiring and candidate management.',img:'assets/galaxy-venture.jpg',tags:['UI/UX Design','Web Design','ATS Workflow','Recruitment Portal']}
};
function openModal(key){const d=data[key]; if(!d)return; modalKicker.textContent=d.kicker; keraCaseStudy.hidden = key !== 'kera'; modalTitle.textContent=d.title; modalText.textContent=d.text; modalImg.src=d.img; modalImg.alt=d.title; modalTags.innerHTML=d.tags.map(t=>`<span>${t}</span>`).join(''); modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';}
function closeModal(){modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow='';}
document.querySelectorAll('[data-modal]').forEach(el=>el.addEventListener('click',e=>{
  if(el.dataset.modal==='kera'){ if(e.target.closest('a')) return; window.location.href='kera-bus.html'; return;}
  if(el.dataset.modal==='orders'){ if(e.target.closest('a')) return; window.location.href='tracking-bulk-orders.html'; return;}
  if(el.dataset.modal==='coresq'){ if(e.target.closest('a')) return; window.location.href='coresq-brand-identity.html'; return;}
  if(el.dataset.modal==='social'){ if(e.target.closest('a')) return; window.location.href='social-media-case-study.html'; return;}
  if(el.dataset.modal==='galaxy'){ if(e.target.closest('a')) return; window.location.href='galaxy-venture-hrc.html'; return;}
  if(e.target.closest('a,button') && !e.target.closest('.text-link')) return;
  openModal(el.dataset.modal);
}));
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const menuBtn=document.getElementById('menuBtn'); const navLinks=document.getElementById('navLinks');
menuBtn?.addEventListener('click',()=>{const open=navLinks.style.display==='flex'; navLinks.style.display=open?'':'flex'; navLinks.style.position='absolute'; navLinks.style.top='70px'; navLinks.style.left='18px'; navLinks.style.right='18px'; navLinks.style.padding='16px'; navLinks.style.flexDirection='column'; navLinks.style.background='#101010'; navLinks.style.border='1px solid #2a2a2a'; navLinks.style.borderRadius='18px'; menuBtn.setAttribute('aria-expanded',String(!open));});
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
