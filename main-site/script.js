/* SCROLL RESTORATION */
if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
window.scrollTo(0, 0);

var DATA={
  marquee:["FULL STACK","SYSTEM DESIGN","AI INTEGRATION","FRONTEND","BACKEND","DEPLOYMENT"],
  details:[["Custom Architecture","No templates"],["Powerstik CRM","AI-powered"],["Client Portals","Secure & scalable"],["Internal Tools","Workflow automation"],["End to End","Design → Deploy"]],
  projects:[
    {year:"2026",title:"Powerstik CRM",href:null,img:"powerstik.png",desc:"CRM with integrated AI assistant and live data dashboards. Reduced manual entry by 70%.",tech:["React","Node.js","AI","Data Viz"]},
    {year:"2025",title:"Client Portal",href:"https://leonoids-advisory.netlify.app/",img:"leonids.png",desc:"Secure document management system for a CA firm. Role-based access, encrypted storage.",tech:["Full Stack","Security","UI/UX"]},
    {year:"2024",title:"Infinite Runner",href:"https://github.com/Ishan-singh-0/INFINITE-RUNNER-GAME-2",img:null,desc:"Browser game with custom physics engine. Vanilla JS, zero dependencies.",tech:["JavaScript","Canvas","Game Dev"]},
    {year:"2023",title:"Quiz Engine",href:"https://github.com/Ishan-singh-0/MY-QUIZ-GAME",img:null,desc:"Dynamic quiz platform with branching logic and real-time scoring.",tech:["Vanilla JS","HTML/CSS"]}
  ],
  tech:[["monitor","Frontend"],["server","Backend"],["database","Database"],["cpu","AI / ML"],["cloud","Cloud"],["shield","Security"]],
  timeline:[
    {date:"2026 — Present",role:"Lead Developer",company:"Powerstik CRM",body:"Architected the full platform — AI chatbot, data dashboards, automated workflows. Reduced client data entry by 70%."},
    {date:"2025",role:"Full Stack Developer",company:"Private Client",body:"Delivered a secure document portal for a CA firm. Encrypted storage, role-based access, clean UI."}
  ],
  faqs:[
    ["What's your stack?","React, Next.js, Node.js for web apps. Python for AI/backend. Vanilla JS when performance matters."],
    ["Do you take freelance work?","Yes — select projects only. Reach out with your requirements."],
    ["What do you build?","Full-stack web apps, CRMs, client portals, and AI-integrated tools."],
    ["What's your timeline?","Depends on scope. Get in touch for an estimate."]
  ],
  testimonials:[
    {quote:"Ishan built our entire CRM from scratch in under two months. The attention to detail and the AI integrations were exactly what we needed.",author:"Rahul M.",role:"Founder, Powerstik"},
    {quote:"Working with Ishan felt effortless. He understood the brief immediately and delivered a client portal that our team actually loves using.",author:"Priya S.",role:"Senior Partner, Leonids Advisory"},
    {quote:"The code quality is exceptional. Clean, well-structured, and easy to maintain. Exactly what you want from a developer.",author:"Dev K.",role:"CTO, Private Client"}
  ],
  workflow:[
    {num:"01",title:"Discovery",desc:"Figure out what actually needs to be built."},
    {num:"02",title:"Architecture",desc:"Plan the system. No guessing later."},
    {num:"03",title:"Build",desc:"Write the code. Ship fast, iterate often."},
    {num:"04",title:"Test",desc:"Break it before users do."},
    {num:"05",title:"Deploy",desc:"Ship it. Monitor it. Done."}
  ],
  cmdItems:[
    {label:"About",sub:"Section",href:"#about",icon:"user"},
    {label:"Selected Work",sub:"Section",href:"#work",icon:"briefcase"},
    {label:"Arsenal",sub:"Section",href:"#tech-stack",icon:"cpu"},
    {label:"Experience",sub:"Section",href:"#experience",icon:"clock"},
    {label:"Contributions",sub:"Section",href:"#contributions",icon:"git"},
    {label:"How I Work",sub:"Section",href:"#workflow",icon:"workflow"},
    {label:"Testimonials",sub:"Section",href:"#testimonials",icon:"star"},
    {label:"Let's Talk",sub:"Section",href:"#contact",icon:"mail"},
    {label:"GitHub",sub:"External",href:"https://github.com/Ishan-singh-0",icon:"git"},
    {label:"LinkedIn",sub:"External",href:"https://www.linkedin.com/in/ishan-singh28/",icon:"user"},
    {label:"Email",sub:"External",href:"https://mail.google.com/mail/?view=cm&fs=1&to=isishan100@gmail.com",icon:"mail"}
  ]
};
var ICONS={
  monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  server:'<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
  database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0"/>',
  cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  cloud:'<path d="M17.5 19a4.5 4.5 0 1 0 0-9h-1.8A7 7 0 1 0 4 15.3"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'
};
function mksvg(p){return'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';}
var ARR='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>';

(function(){
  var kw=document.getElementById("kwTrack"),h="";
  for(var r=0;r<2;r++)DATA.marquee.forEach(function(w){h+='<div class="mq-item"><span class="mq-word">'+w+'</span><span class="mq-dot"> &middot; </span></div>';});
  kw.innerHTML=h;

  var dt=document.getElementById("detailsTrack");h="";
  for(var r=0;r<2;r++)DATA.details.forEach(function(d){h+='<div class="dtl-item"><div class="dtl-inner"><span class="dtl-t">'+d[0]+'</span><span class="dtl-s">'+d[1]+'</span></div><span style="padding:0 1.5rem;color:var(--fg3)"> &middot;</span></div>';});
  dt.innerHTML=h;

  var pl=document.getElementById("projList");h="";
  DATA.projects.forEach(function(p,i){
    var num="0"+(i+1);
    var tl=p.href?'<a class="proj-title" href="'+p.href+'" target="_blank" rel="noreferrer">'+p.title+' '+ARR+'</a>':'<div class="proj-title">'+p.title+'</div>';
    var tags=p.tech.map(function(t){return'<span class="proj-tag">'+t+'</span>';}).join('');
    var thumb=p.img?'<img class="proj-thumb" src="'+p.img+'" alt="'+p.title+'" loading="lazy" />':'';
    h+='<div class="proj-item reveal"><div><div class="proj-num">'+num+'</div><div class="proj-yr">'+p.year+'</div></div><div class="proj-info">'+tl+'<p class="proj-desc">'+p.desc+'</p></div><div class="proj-tags">'+tags+'</div>'+thumb+'</div>';
  });
  pl.innerHTML=h;

  var tg=document.getElementById("techGrid");h="";
  DATA.tech.forEach(function(t){h+='<div class="tech-tile reveal">'+mksvg(ICONS[t[0]])+'<span>'+t[1]+'</span></div>';});
  tg.innerHTML=h;

  var tl=document.getElementById("tlItems");h="";
  DATA.timeline.forEach(function(t){h+='<div class="tl-item reveal"><div class="tl-date">'+t.date+'</div><div><div class="tl-role">'+t.role+'</div><div class="tl-co">'+t.company+'</div><div class="tl-body">'+t.body+'</div></div></div>';});
  tl.innerHTML=h;

  var fl=document.getElementById("faqList");h="";
  DATA.faqs.forEach(function(f,i){h+='<div class="faq-item reveal'+(i===0?' open':'')+'"><button class="faq-q"><span class="qt">'+f[0]+'</span><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="faq-a"><div><p>'+f[1]+'</p></div></div></div>';});
  fl.innerHTML=h;

  document.getElementById("year").textContent=new Date().getFullYear();
})();

/* BOOT */
(function(){
  var bar=document.getElementById("bootBar"),log=document.getElementById("bootLog"),pct=document.getElementById("bootPct"),btn=document.getElementById("enterBtn"),txt=document.getElementById("enterTxt");
  var boot=document.getElementById("boot"),bootL=document.getElementById("bootL"),bootR=document.getElementById("bootR"),seam=document.getElementById("bootSeam"),flash=document.getElementById("bootFlash");
  var msgs=["Initializing","Loading modules","Compiling logic","Calibrating UI","Systems ready"],prog=0,mi=0;
  var iv=setInterval(function(){
    prog+=Math.random()*12+4;
    if(prog>=100){prog=100;clearInterval(iv);}
    bar.style.width=prog+"%";pct.textContent=Math.floor(prog)+"%";
    var m=Math.floor((prog/100)*(msgs.length-1));
    if(m!==mi){mi=m;log.textContent=msgs[m];}
    if(prog>=100){log.textContent="Ready";btn.classList.add("ready");btn.disabled=false;txt.textContent="Enter";}
  },80);

  btn.addEventListener("click",function(){
    btn.disabled=true;

    /* ── PHASE 1 (0ms): old boot fades, curtains elegantly slide in ── */
    boot.classList.add("fade-out");
    bootL.classList.add("slide-in");
    bootR.classList.add("slide-in");

    /* ── PHASE 2 (1000ms): seam glows gently as letters rest ── */
    setTimeout(function(){
      seam.classList.add("visible");
      bootL.classList.add("glow");
      bootR.classList.add("glow");
    }, 1000);

    /* ── PHASE 3 (1600ms): SPLIT OPEN — smooth elegant parting ── */
    setTimeout(function(){
      seam.classList.remove("visible");
      bootL.classList.remove("slide-in");
      bootR.classList.remove("slide-in");
      bootL.classList.add("split-open");
      bootR.classList.add("split-open");
    }, 1600);

    /* ── PHASE 4 (2500ms): reveal portfolio ── */
    setTimeout(function(){
      boot.style.display="none";
      bootL.style.display="none";
      bootR.style.display="none";
      seam.style.display="none";
      document.body.classList.remove("locked");
      if(typeof lenis!=='undefined'){ lenis.start(); }
      document.getElementById("main").classList.add("shown");
      document.querySelectorAll(".reveal").forEach(function(el){
        var r=el.getBoundingClientRect();
        if(r.top<innerHeight&&r.bottom>0)el.classList.add("vis");
      });
      setTimeout(function(){ if(typeof window.initGSAP==='function') window.initGSAP(); }, 250);
    }, 2500);
  });
})();

/* REVEAL */
var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("vis");ro.unobserve(e.target);}});},{threshold:0,rootMargin:"0px 0px -3% 0px"});
document.querySelectorAll(".reveal").forEach(function(el){ro.observe(el);});

/* GSAP SCROLL EFFECTS — performance-optimized */
window.initGSAP = function() {
  if(typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  if(typeof lenis !== 'undefined') lenis.on('scroll', ScrollTrigger.update);

  requestAnimationFrame(function() {
    ScrollTrigger.refresh();

    // ── 1. NAV AUTO-HIDE (CSS class toggle, zero GSAP overhead) ──────────
    var nav = document.querySelector('.snav'), lastY = 0;
    ScrollTrigger.create({
      start: 'top top', end: 'max',
      onUpdate: function(self) {
        var y = self.scroll();
        nav.classList.toggle('nav-hidden', y > lastY && y > 80);
        lastY = y;
      }
    });

    // ── 2. HERO PARALLAX (scrub = no per-frame JS cost) ──────────────────
    gsap.to('.hero-name', {
      yPercent: -18, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
    });
    gsap.to('.hero-desc', {
      yPercent: -8, opacity: 0.4, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2 }
    });
    gsap.to('.hero-acts', {
      yPercent: -5, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2.5 }
    });
    gsap.to('.hero-ava-area', {
      yPercent: 10, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2 }
    });

    // ── 3. HERO ENTRANCE (runs once on boot reveal) ───────────────────────
    gsap.fromTo('.hero-content',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.1, ease: 'power4.out', delay: 0.1 }
    );
    gsap.fromTo('.hero-top',
      { opacity: 0, y: -18 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 }
    );
    gsap.fromTo('.hero-badge',
      { opacity: 0, y: -16, scale: 0.85 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(2)', delay: 0.25 }
    );
    var heroActs = Array.from(document.querySelectorAll('.hero-acts .btn-p, .hero-acts .btn-s'));
    gsap.set(heroActs, { opacity: 0, y: 20 });
    gsap.to(heroActs, { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out', delay: 0.3 });
    var heroSocs = Array.from(document.querySelectorAll('.hero .soc'));
    gsap.set(heroSocs, { opacity: 0, y: 16 });
    gsap.to(heroSocs, { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power3.out', delay: 0.4 });

    // ── 4. SECTION LABELS — slide in + line draw ──────────────────────────
    document.querySelectorAll('.sec-lbl').forEach(function(el) {
      gsap.fromTo(el,
        { opacity: 0, x: -36 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' }
        }
      );
      var line = el.querySelector('.sd');
      if(line) {
        gsap.fromTo(line,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' }
          }
        );
      }
    });

    // ── 5. TECH TILES — staggered grid reveal ────────────────────────────
    var techTiles = Array.from(document.querySelectorAll('.tech-tile'));
    gsap.set(techTiles, { opacity: 0, y: 36, scale: 0.93 });
    techTiles.forEach(function(el, i) {
      gsap.to(el, {
        opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out', delay: (i % 3) * 0.07,
        scrollTrigger: { trigger: el, start: 'top 95%', toggleActions: 'play none none reverse' }
      });
    });

    // ── 6. TECH TILE ICON BOUNCE (hover only, no per-frame cost) ─────────
    document.querySelectorAll('.tech-tile').forEach(function(tile) {
      var icon = tile.querySelector('svg');
      if(!icon) return;
      tile.addEventListener('mouseenter', function() {
        gsap.to(icon, { y: -5, scale: 1.18, duration: 0.3, ease: 'back.out(2)' });
      });
      tile.addEventListener('mouseleave', function() {
        gsap.to(icon, { y: 0, scale: 1, duration: 0.45, ease: 'elastic.out(1,0.4)' });
      });
    });

    // ── 7. PROJECT CARDS — alternating reveal ─────────────────────────────
    var projItems = Array.from(document.querySelectorAll('.proj-item'));
    gsap.set(projItems, { opacity: 0 });
    projItems.forEach(function(el, i) {
      gsap.fromTo(el,
        { opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 16 },
        { opacity: 1, x: 0, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' }
        }
      );
      // Mouse spotlight only (no 3D tilt — GPU expensive)
      el.addEventListener('mousemove', function(e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        el.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
      // Project tags stagger
      var tags = Array.from(el.querySelectorAll('.proj-tag'));
      gsap.set(tags, { opacity: 0, y: 8 });
      gsap.to(tags, {
        opacity: 1, y: 0, stagger: 0.06, duration: 0.45, ease: 'power3.out', delay: 0.35,
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' }
      });
    });

    // ── 8. IMAGE PARALLAX ─────────────────────────────────────────────────
    document.querySelectorAll('.proj-thumb').forEach(function(img) {
      var trig = img.closest('.proj-item') || img.parentElement;
      gsap.fromTo(img,
        { yPercent: -10, scale: 1.2 },
        { yPercent: 10, scale: 1.2, ease: 'none',
          scrollTrigger: { trigger: trig, scrub: 1.5 }
        }
      );
    });

    // ── 9. TIMELINE — slide up + connector draw ───────────────────────────
    var tlItems = Array.from(document.querySelectorAll('.tl-item'));
    gsap.set(tlItems, { opacity: 0, y: 45 });
    tlItems.forEach(function(el, i) {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', delay: i * 0.1,
        scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none reverse' }
      });
    });
    document.querySelectorAll('.tl-date').forEach(function(el, i) {
      gsap.fromTo(el,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', delay: i * 0.08,
          scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none reverse' }
        }
      );
    });

    // ── 10. FAQ CASCADE ───────────────────────────────────────────────────
    var faqItems = Array.from(document.querySelectorAll('.faq-item'));
    gsap.set(faqItems, { opacity: 0, y: 28 });
    faqItems.forEach(function(el, i) {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', delay: i * 0.09,
        scrollTrigger: { trigger: el, start: 'top 94%', toggleActions: 'play none none reverse' }
      });
    });
    document.querySelectorAll('.faq-q').forEach(function(btn) {
      btn.addEventListener('mouseenter', function() {
        gsap.to(btn.querySelector('.qt'), { x: 5, duration: 0.25, ease: 'power2.out' });
      });
      btn.addEventListener('mouseleave', function() {
        gsap.to(btn.querySelector('.qt'), { x: 0, duration: 0.3, ease: 'power2.out' });
      });
    });

    // ── 11. PRINCIPLES ────────────────────────────────────────────────────
    var princs = Array.from(document.querySelectorAll('.princ'));
    gsap.set(princs, { opacity: 0, y: 30 });
    princs.forEach(function(el, i) {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', delay: i * 0.09,
        scrollTrigger: { trigger: el, start: 'top 93%', toggleActions: 'play none none reverse' }
      });
    });
    document.querySelectorAll('.princ-n').forEach(function(el) {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.5, rotate: -8 },
        { opacity: 1, scale: 1, rotate: 0, duration: 0.5, ease: 'back.out(2.5)',
          scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none reverse' }
        }
      );
    });

    // ── 12. ABOUT TEXT WORD REVEAL ────────────────────────────────────────
    document.querySelectorAll('.about-txt').forEach(function(el) {
      var txt = el.innerText;
      el.innerHTML = '';
      txt.split(' ').forEach(function(word, i) {
        if(!word.trim()) { el.appendChild(document.createTextNode(' ')); return; }
        var mask = document.createElement('span');
        mask.style.cssText = 'overflow:hidden;display:inline-block;vertical-align:top';
        var inner = document.createElement('span');
        inner.textContent = word + ' ';
        inner.style.display = 'inline-block';
        mask.appendChild(inner);
        el.appendChild(mask);
        gsap.fromTo(inner,
          { y: '105%' },
          { y: '0%', duration: 0.75, ease: 'power3.out', delay: i * 0.016,
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' }
          }
        );
      });
    });

    // ── 13. FOOTER ────────────────────────────────────────────────────────
    gsap.fromTo('.foot-hl',
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out',
        scrollTrigger: { trigger: '.foot-hl', start: 'top 88%', toggleActions: 'play none none reverse' }
      }
    );
    gsap.fromTo('.foot-mail',
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: '.foot-hl', start: 'top 88%', toggleActions: 'play none none reverse' }
      }
    );
    var footSocs = Array.from(document.querySelectorAll('footer .soc'));
    gsap.set(footSocs, { opacity: 0, y: 18 });
    gsap.to(footSocs, {
      opacity: 1, y: 0, stagger: 0.07, duration: 0.55, ease: 'power3.out',
      scrollTrigger: { trigger: 'footer', start: 'top 85%', toggleActions: 'play none none reverse' }
    });
    gsap.fromTo('.foot-bottom-row',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: 'footer', start: 'top 75%', toggleActions: 'play none none reverse' }
      }
    );

    // ── 14. MAGNETIC BUTTONS (hover only) ────────────────────────────────
    document.querySelectorAll('.btn-p, .nav-cta, .foot-mail').forEach(function(btn) {
      btn.addEventListener('mousemove', function(e) {
        var r = btn.getBoundingClientRect();
        gsap.to(btn, {
          x: (e.clientX - r.left - r.width/2) * 0.38,
          y: (e.clientY - r.top - r.height/2) * 0.38,
          duration: 0.3, ease: 'power2.out', overwrite: 'auto'
        });
      });
      btn.addEventListener('mouseleave', function() {
        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)', overwrite: 'auto' });
      });
    });

    // ── 15. STAT COUNTER — reruns every visit ────────────────────────────
    function runCounter(el, target) {
      el.textContent = '0';
      var s = 0, iv = setInterval(function() {
        s = Math.min(s + 1, target); el.textContent = s;
        if(s >= target) clearInterval(iv);
      }, 28);
    }
    var statEl = document.getElementById('statNum');
    if(statEl) {
      ScrollTrigger.create({
        trigger: statEl, start: 'top 85%',
        onEnter: function() { runCounter(statEl, 26); },
        onEnterBack: function() { runCounter(statEl, 26); }
      });
    }

    // ── 16. PROGRESS RING inside BTT button ─────────────────────────────
    var bttBtn2 = document.getElementById('btt');
    var fill = bttBtn2 ? bttBtn2.querySelector('.prog-fill') : null;
    if(fill) {
      var circumference = 2 * Math.PI * 20; // r=20 => ~125.6
      fill.style.strokeDasharray = circumference;
      fill.style.strokeDashoffset = circumference;
      window.addEventListener('scroll', function() {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        var pct = h > 0 ? window.scrollY / h : 0;
        fill.style.strokeDashoffset = (circumference - circumference * pct).toFixed(2);
        bttBtn2.classList.toggle('show', window.scrollY > 200);
      }, { passive: true });
    }

    // ── 17. PROJ NUM / YEAR SLIDE IN ──────────────────────────────────────
    document.querySelectorAll('.proj-num, .proj-yr').forEach(function(el) {
      gsap.fromTo(el,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 91%', toggleActions: 'play none none reverse' }
        }
      );
    });

    // ── 18. AVATAR HOVER WIGGLE ───────────────────────────────────────────
    var ava = document.querySelector('.hero-ava');
    if(ava) {
      ava.addEventListener('mouseenter', function() {
        gsap.to(ava, { rotate: 5, scale: 1.07, duration: 0.28, ease: 'power2.out' });
      });
      ava.addEventListener('mouseleave', function() {
        gsap.to(ava, { rotate: 0, scale: 1, duration: 0.5, ease: 'elastic.out(1,0.4)' });
      });
    }

    // ── 19. BACK-TO-TOP HOVER ────────────────────────────────────────────
    var bttBtn = document.getElementById('btt');
    if(bttBtn) {
      bttBtn.addEventListener('mouseenter', function() {
        gsap.to(bttBtn, { scale: 1.13, duration: 0.25, ease: 'back.out(2)' });
      });
      bttBtn.addEventListener('mouseleave', function() {
        gsap.to(bttBtn, { scale: 1, duration: 0.4, ease: 'elastic.out(1,0.4)' });
      });
    }

    // ── 20. MARQUEE WORD HIGHLIGHT ON HOVER ──────────────────────────────
    document.querySelectorAll('.mq-word').forEach(function(w) {
      w.style.transition = 'color .25s';
      w.addEventListener('mouseenter', function() { w.style.color = '#fff'; });
      w.addEventListener('mouseleave', function() { w.style.color = ''; });
    });

    // ── 21. FOOTER SOCIAL HOVER ──────────────────────────────────────────
    document.querySelectorAll('footer .soc').forEach(function(s) {
      s.addEventListener('mouseenter', function() {
        gsap.to(s, { scale: 1.18, y: -3, duration: 0.25, ease: 'back.out(2)' });
      });
      s.addEventListener('mouseleave', function() {
        gsap.to(s, { scale: 1, y: 0, duration: 0.4, ease: 'elastic.out(1,0.4)' });
      });
    });


    // ── 22. CUSTOM CURSOR (RAF Optimized) ─────────────────────────────────
    var cursor = document.getElementById('cursor');
    var mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    var cursorX = mouseX, cursorY = mouseY;
    if(cursor) {
      window.addEventListener('mousemove', function(e) {
        mouseX = e.clientX; mouseY = e.clientY;
      });
      function renderCursor() {
        // smooth interpolation
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        requestAnimationFrame(renderCursor);
      }
      requestAnimationFrame(renderCursor);

      // Expand on hoverable elements
      var hoverables = document.querySelectorAll('a, button, .btn-p, .btn-s, .tech-tile, .proj-item, input, textarea');
      hoverables.forEach(function(el) {
        el.addEventListener('mouseenter', function() { cursor.classList.add('expand'); });
        el.addEventListener('mouseleave', function() { cursor.classList.remove('expand'); });
      });
    }

    
    // ── 24. DYNAMIC MARQUEE SCROLL SPEED ──────────────────────────────────
    var marqueeInner = document.querySelector('.mq-in');
    if(marqueeInner) {
      // Speed up marquee on scroll
      var marqueeTween = gsap.to(marqueeInner, {
        xPercent: -50, repeat: -1, duration: 20, ease: 'none'
      });
      ScrollTrigger.create({
        start: 0, end: 'max',
        onUpdate: function(self) {
          gsap.to(marqueeTween, { timeScale: 1 + Math.abs(self.getVelocity() / 100), duration: 0.1, overwrite: true });
          gsap.delayedCall(0.1, function() { gsap.to(marqueeTween, { timeScale: 1, duration: 0.5 }); });
        }
      });
    }

    // ── 25. SPLIT-TEXT REVEAL FOR HEADINGS ────────────────────────────────
    document.querySelectorAll('.sec-lbl').forEach(function(el) {
        var text = el.innerText;
        el.innerHTML = '';
        var innerHtml = '';
        text.split('').forEach(function(char) {
            if(char === ' ') innerHtml += '&nbsp;';
            else innerHtml += `<span class="char-wrap"><span class="char">${char}</span></span>`;
        });
        el.innerHTML = innerHtml;

        var chars = el.querySelectorAll('.char');
        gsap.to(chars, {
            y: 0, opacity: 1, stagger: 0.05, duration: 0.8, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' }
        });
    });

    // ── 26. RIPPLE EFFECT ON BUTTONS ──────────────────────────────────────
    document.querySelectorAll('.btn-p, .btn-s').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            var rect = btn.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            // scale ripple based on button size
            var size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            // offset to center
            ripple.style.marginLeft = -(size/2) + 'px';
            ripple.style.marginTop = -(size/2) + 'px';

            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';
            btn.appendChild(ripple);

            setTimeout(function() { ripple.remove(); }, 600);
        });
    });

    // ── 27. DRAW SVG ICONS ON SCROLL ──────────────────────────────────────
    document.querySelectorAll('.draw-icon').forEach(function(icon) {
        ScrollTrigger.create({
            trigger: icon,
            start: 'top 95%',
            onEnter: function() { icon.classList.add('drawn'); }
        });
    });


    
  }); // end rAF
};
/* SCROLL */
var sp=document.getElementById("sp"),bttBtnBottom=document.getElementById("btt");
window.addEventListener("scroll",function(){
  var h=document.documentElement.scrollHeight-window.innerHeight;
  if(sp) sp.style.width=(h>0?(window.scrollY/h)*100:0)+"%";
},{passive:true});
if(bttBtnBottom) bttBtnBottom.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});

/* CLOCK */
function tick(){var n=new Date();document.getElementById("hudTime").textContent=n.toLocaleTimeString("en-GB",{hour12:false});document.getElementById("hudMem").textContent=38+Math.floor(Math.random()*18);try{document.getElementById("footTime").textContent="DEL "+n.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Kolkata",hour12:false});}catch(e){}}
tick();setInterval(tick,1000);

/* COUNTER */
function countUp(el,target,dur){var s=0,step=target/Math.ceil(dur/16),iv=setInterval(function(){s=Math.min(s+step,target);el.textContent=Math.floor(s);if(s>=target)clearInterval(iv);},16);}
var sEl=document.getElementById("statNum");
var sRo=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){countUp(sEl,26,800);sRo.unobserve(e.target);}});});
sRo.observe(sEl);

/* CURSOR */
(function(){
  var d=document.getElementById("curDot"),r=document.getElementById("curRing");
  if(window.matchMedia("(hover:none)").matches)return;
  var mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
  document.addEventListener("mousemove",function(e){mx=e.clientX;my=e.clientY;});
  (function loop(){d.style.left=mx+"px";d.style.top=my+"px";rx+=(mx-rx)*.14;ry+=(my-ry)*.14;r.style.left=rx+"px";r.style.top=ry+"px";requestAnimationFrame(loop);})();
  document.querySelectorAll("a,button,[tabindex]").forEach(function(el){el.addEventListener("mouseenter",function(){r.classList.add("hovering");});el.addEventListener("mouseleave",function(){r.classList.remove("hovering");});});

  /* 25 FEATURES - PHASE 1 */
  // 1. Magnetic Elements
  document.querySelectorAll('.magnetic').forEach(function(el) {
    el.addEventListener('mousemove', function(e) {
      var rect = el.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
    });
    el.addEventListener('mouseleave', function() {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
    });
  });

  // 2. 3D Tilt Project Cards
  document.querySelectorAll('.proj-item').forEach(function(el) {
    var inner = el.querySelector('.proj-inner');
    el.addEventListener('mousemove', function(e) {
      var rect = el.getBoundingClientRect();
      var x = e.clientX - rect.left; 
      var y = e.clientY - rect.top;
      var xc = rect.width / 2;
      var yc = rect.height / 2;
      var dx = x - xc;
      var dy = y - yc;
      gsap.to(el, {
        rotationY: (dx / xc) * 4, 
        rotationX: (-dy / yc) * 4,
        transformPerspective: 1000,
        ease: 'power1.out',
        duration: 0.3
      });
    });
    el.addEventListener('mouseleave', function() {
      gsap.to(el, { rotationY: 0, rotationX: 0, ease: 'power2.out', duration: 0.5 });
    });
  });

  // 3. Flashlight Cursor
  var flashlight = document.getElementById('flashlight');
  if (flashlight) {
    document.addEventListener('mousemove', function(e) {
      flashlight.style.opacity = 1;
      flashlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
  }

})();

/* FAQ */
document.addEventListener("click",function(e){var b=e.target.closest(".faq-q");if(!b)return;var it=b.closest(".faq-item"),open=it.classList.contains("open");document.querySelectorAll(".faq-item.open").forEach(function(o){o.classList.remove("open");});if(!open)it.classList.add("open");});

/* TERMINAL 2.0 */
(function(){
  var inp=document.getElementById("term-input"),body=document.getElementById("termBody");
  if(!inp||!body)return;
  var CMDS={
    help:"Commands:\n  about    — who I am\n  projects — recent work\n  skills   — tech stack\n  contact  — get in touch\n  clear    — reset",
    projects:"Projects:\n  [01] Powerstik CRM — AI + dashboards\n  [02] Client Portal — secure docs\n  [03] Infinite Runner — custom physics\n  [04] Quiz Engine — branching logic",
    about:"Ishan Singh — Full-stack developer, New Delhi.\nI build CRMs, portals, and internal tools.",
    contact:"Email    → isishan100@gmail.com\nGitHub   → github.com/Ishan-singh-0\nLinkedIn → linkedin.com/in/ishan-singh28",
    skills:"Frontend  → React, Next.js, Vanilla JS\nBackend   → Node.js, Python, Express\nDatabase  → PostgreSQL, MongoDB\nOther     → AI integrations, Git",
    clear:"__clear__",
    matrix:"__matrix__",
    sudo:"__sudo__"
  };
  var cmdList = Object.keys(CMDS);
  var history = [];
  var histPos = 0;

  function addCmd(v){var li=body.querySelector(".term-iline");var w=document.createElement("div");w.className="cmd";w.innerHTML='<span class="p">$</span><span> '+v+'</span>';body.insertBefore(w,li);}
  
  function addOut(v){
    if(v==="__clear__"){Array.from(body.children).forEach(function(c){if(!c.classList.contains("term-iline"))c.remove();});body.scrollTop=0;return;}
    if(v==="__matrix__"){ document.body.classList.toggle('matrix-mode'); return; }
    if(v==="__sudo__"){ alert("Sudo mode unlocked."); document.body.style.setProperty('--bg', '#000000'); document.body.style.setProperty('--fg', '#00ff00'); document.body.style.setProperty('--p', '#00ff00'); return; }

    var o=document.createElement("div");o.className="out";o.style.marginBottom=".9rem";o.style.whiteSpace="pre-wrap";
    body.insertBefore(o,body.querySelector(".term-iline"));
    
    // Typewriter effect
    var i = 0;
    var iv = setInterval(function() {
      o.textContent += v.charAt(i);
      i++;
      body.scrollTop=body.scrollHeight;
      if (i >= v.length) clearInterval(iv);
    }, 15); // 15ms per char
  }
  
  function runCmd(v){
    v=v.trim().toLowerCase();
    if(!v)return;
    history.push(v);
    histPos = history.length;
    addCmd(v);
    addOut(CMDS[v]||'Unknown command: "'+v+'". Type help to see all commands.');
  }

  inp.addEventListener("keydown",function(e){
    // History
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (histPos > 0) { histPos--; inp.value = history[histPos]; }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histPos < history.length - 1) { histPos++; inp.value = history[histPos]; }
      else { histPos = history.length; inp.value = ""; }
    }
    // Autocomplete
    else if (e.key === "Tab") {
      e.preventDefault();
      var val = inp.value.toLowerCase();
      var match = cmdList.find(c => c.startsWith(val));
      if (match) inp.value = match;
    }
    // Run
    else if (e.key === "Enter") {
      var v=inp.value;inp.value="";runCmd(v);
    }
  });

  body.addEventListener("click",function(e){if(e.target!==inp)inp.focus();});
  
  /* chip buttons */
  document.querySelectorAll(".term-chip").forEach(function(btn){
    btn.addEventListener("click",function(){
      inp.focus();
      runCmd(btn.dataset.cmd);
    });
  });
  
  /* auto-demo: run about on scroll into view, once */
  var demoDone=false;
  var demoObs=new IntersectionObserver(function(es){
    if(demoDone)return;
    es.forEach(function(e){
      if(e.isIntersecting){
        demoDone=true;
        demoObs.disconnect();
        setTimeout(function(){runCmd("about");},400);
      }
    });
  },{threshold:.4});
  demoObs.observe(body);
})();

/* ===== GLITCH HEADINGS ===== */
(function(){
  var headings = document.querySelectorAll('.hero-name, .about-hl, .foot-hl');
  headings.forEach(function(el) {
    var txt = el.textContent.trim();
    el.setAttribute('data-text', txt);
    el.classList.add('glitch','idle');
    el.addEventListener('mouseenter', function() { el.classList.remove('idle'); });
    el.addEventListener('mouseleave', function() {
      setTimeout(function() { el.classList.add('idle'); }, 800);
    });
  });
})();

/* ===== GITHUB HEATMAP ===== */
(function(){
  var grid = document.getElementById('ghGrid');
  var legend = document.getElementById('ghLegend');
  if (!grid) return;
  var WEEKS = 52, DAYS = 7;
  // Seed-based pseudo-random to look consistent
  function seededRand(seed) {
    var x = Math.sin(seed + 1) * 10000;
    return x - Math.floor(x);
  }
  var cells = '';
  for (var w = 0; w < WEEKS; w++) {
    for (var d = 0; d < DAYS; d++) {
      var r = seededRand(w * DAYS + d);
      var level = r < 0.45 ? 0 : r < 0.65 ? 1 : r < 0.80 ? 2 : r < 0.92 ? 3 : 4;
      cells += '<div class="gh-cell" data-level="' + level + '" title="' + level + ' contributions"></div>';
    }
  }
  grid.innerHTML = cells;
  // Legend
  var ldots = '';
  [0,1,2,3,4].forEach(function(l){ ldots += '<div class="gh-dot gh-cell" data-level="' + l + '"></div>'; });
  legend.innerHTML = ldots;
})();

/* ===== WORKFLOW PIPELINE ===== */
(function(){
  var el = document.getElementById('wfPipeline');
  if (!el) return;
  el.innerHTML = DATA.workflow.map(function(s, i) {
    return '<div class="wf-step" style="opacity:0;transform:translateY(16px);transition:opacity .55s ' + (i * 0.1) + 's ease,transform .55s ' + (i * 0.1) + 's ease">' +
      '<div class="wf-left"><div class="wf-num">' + s.num + '</div><div class="wf-title">' + s.title + '</div></div>' +
      '<div class="wf-desc">' + s.desc + '</div>' +
      '</div>';
  }).join('');
  // Animate steps in when visible
  var steps = el.querySelectorAll('.wf-step');
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        steps.forEach(function(s) { s.style.opacity = '1'; s.style.transform = 'none'; });
        obs.disconnect();
      }
    });
  }, {threshold: 0.15});
  obs.observe(el);
})();

/* ===== TESTIMONIALS CAROUSEL ===== */
(function(){
  var car = document.getElementById('testiCarousel');
  var dots = document.getElementById('testiDots');
  if (!car) return;
  var curr = 0;
  car.innerHTML = DATA.testimonials.map(function(t, i) {
    return '<div class="testi-slide' + (i === 0 ? ' active' : '') + '"><p class="testi-quote">' + t.quote + '</p></div>';
  }).join('');
  dots.innerHTML = DATA.testimonials.map(function(_, i) {
    return '<button class="testi-dot' + (i === 0 ? ' active' : '') + '" aria-label="Slide ' + (i+1) + '"></button>';
  }).join('');
  function goTo(n) {
    var slides = car.querySelectorAll('.testi-slide');
    var btns = dots.querySelectorAll('.testi-dot');
    slides[curr].classList.remove('active');
    btns[curr].classList.remove('active');
    curr = (n + DATA.testimonials.length) % DATA.testimonials.length;
    slides[curr].classList.add('active');
    btns[curr].classList.add('active');
  }
  dots.querySelectorAll('.testi-dot').forEach(function(btn, i) {
    btn.addEventListener('click', function() { goTo(i); });
  });
  // Auto-advance
  setInterval(function() { goTo(curr + 1); }, 5000);
})();

/* ===== CONTACT FORM ===== */
(function(){
  var form = document.getElementById('contactForm');
  var status = document.getElementById('cfStatus');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('cfName').value.trim();
    var email = document.getElementById('cfEmail').value.trim();
    var msg = document.getElementById('cfMsg').value.trim();
    if (!name || !email || !msg) {
      status.className = 'cf-status err';
      status.textContent = 'Please fill out all fields.';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.className = 'cf-status err';
      status.textContent = 'Please enter a valid email.';
      return;
    }
    // Redirect to Gmail with prefilled data
    var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=isishan100@gmail.com&su=' +
      encodeURIComponent('Portfolio Inquiry from ' + name) +
      '&body=' + encodeURIComponent(msg + '\n\n— ' + name + ' (' + email + ')');
    status.className = 'cf-status ok';
    status.textContent = 'Opening Gmail...';
    setTimeout(function() { window.open(gmailUrl, '_blank'); }, 300);
  });
})();

/* ===== COMMAND PALETTE ===== */
(function(){
  var backdrop = document.getElementById('cmdBackdrop');
  var palette = document.getElementById('cmdPalette');
  var search = document.getElementById('cmdSearch');
  var results = document.getElementById('cmdResults');
  if (!palette) return;

  function open() {
    backdrop.classList.add('open');
    palette.classList.add('open');
    search.value = '';
    search.focus();
    render('');
  }
  function close() {
    backdrop.classList.remove('open');
    palette.classList.remove('open');
  }
  function render(q) {
    var items = DATA.cmdItems.filter(function(item) {
      return item.label.toLowerCase().includes(q.toLowerCase());
    });
    results.innerHTML = items.map(function(item, i) {
      return '<div class="cmd-item" tabindex="-1" data-href="' + item.href + '"><div class="cmd-item-icon">' +
        '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' +
        '</div><span class="cmd-item-label">' + item.label + '</span><span class="cmd-item-sub">' + item.sub + '</span></div>';
    }).join('');
    // Click handlers
    results.querySelectorAll('.cmd-item').forEach(function(el) {
      el.addEventListener('click', function() {
        var href = el.getAttribute('data-href');
        close();
        if (href.startsWith('#')) {
          document.querySelector(href).scrollIntoView({behavior:'smooth'});
        } else {
          window.open(href, '_blank');
        }
      });
    });
  }

  // Open on Ctrl+K or Cmd+K
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      palette.classList.contains('open') ? close() : open();
    }
    if (e.key === 'Escape') close();
  });
  backdrop.addEventListener('click', close);
  search.addEventListener('input', function() { render(search.value); });
})();

/* ===== LIVE CLOCK & STATS ===== */
(function(){
  var hudTime = document.getElementById('hudTime');
  var hudMem = document.getElementById('hudMem');
  var footTime = document.getElementById('footTime');
  var mem = 42;
  var memDir = 1;

  setInterval(function() {
    var now = new Date();
    var del = new Date(now.toLocaleString('en-US', {timeZone:'Asia/Kolkata'}));
    var h = del.getHours(), m = del.getMinutes(), s = del.getSeconds();
    var ts = (h<10?'0':'')+h+':'+(m<10?'0':'')+m+':'+(s<10?'0':'')+s;
    if (hudTime) hudTime.textContent = ts;
    if (footTime) footTime.textContent = 'DEL ' + (h<10?'0':'')+h+':'+(m<10?'0':'')+m;

    // Simulate memory drift
    mem += memDir * (Math.random() * 2 - 0.5);
    if (mem > 78) memDir = -1;
    if (mem < 35) memDir = 1;
    if (hudMem) hudMem.textContent = Math.round(mem);
  }, 1000);
})();

/* ===== TEXT SELECTION HIGHLIGHT ===== */
/* Already handled via ::selection in CSS — white bg, black text */

/* ===== PAGE TRANSITION CURTAIN ===== */
(function(){
  // Create curtain element
  var curtain = document.createElement('div');
  curtain.className = 'page-curtain';
  curtain.id = 'pageCurtain';
  document.body.appendChild(curtain);

  // Intercept all external project links for a smooth curtain exit
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href');
    // Only animate outbound links (not anchors or mailto)
    if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('https://mail')) return;
    if (link.target === '_blank') return; // don't intercept new-tab links
    e.preventDefault();
    curtain.className = 'page-curtain sweep-in';
    setTimeout(function() { window.location.href = href; }, 420);
  });
})();

/* ===== SOUND DESIGN TOGGLE ===== */
(function(){
  var btn = document.getElementById('soundToggle');
  if (!btn) return;
  var soundOn = false; // off by default, opt-in
  var ctx = null;

  function beep(freq, dur, vol) {
    if (!soundOn) return;
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = freq;
    o.type = 'sine';
    g.gain.setValueAtTime(vol || 0.04, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    o.start(ctx.currentTime);
    o.stop(ctx.currentTime + dur);
  }

  // Expose globally for other elements to use
  window.uiBeep = beep;

  btn.addEventListener('click', function() {
    soundOn = !soundOn;
    btn.title = soundOn ? 'Sounds ON' : 'Sounds OFF';
    var wave = document.getElementById('soundWave');
    if (wave) wave.style.opacity = soundOn ? '1' : '0.2';
    btn.style.borderColor = soundOn ? 'rgba(255,255,255,0.4)' : '';
    btn.style.color = soundOn ? 'var(--fg2)' : '';
    if (soundOn) beep(880, 0.15, 0.05);
  });

  // Add hover sounds to magnetic buttons
  document.querySelectorAll('.magnetic, .btn-p, .btn-s, .nav-cta').forEach(function(el) {
    el.addEventListener('mouseenter', function() { beep(440, 0.08, 0.03); });
    el.addEventListener('click', function() { beep(660, 0.12, 0.04); });
  });

  // Add click sound to terminal chips
  document.querySelectorAll('.term-chip').forEach(function(el) {
    el.addEventListener('click', function() { beep(520, 0.1, 0.03); });
  });
})();

/* ===== SCROLL IMAGE REVEALS ===== */
(function(){
  var thumbs = document.querySelectorAll('.proj-thumb');
  if (!thumbs.length) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.classList.add('revealed');
        }, 150);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  thumbs.forEach(function(t) { obs.observe(t); });
})();

/* ===== DYNAMIC ISLAND / STICKY NAV ===== */
(function(){
  var nav = document.querySelector('.snav');
  if (!nav) return;
  var lastY = 0;
  window.addEventListener('scroll', function() {
    var y = window.scrollY;
    // Compact on scroll down, expand on scroll up
    nav.classList.toggle('scrolled', y > 60);
    lastY = y;
  }, { passive: true });
})();

/* ===== MOCK SPOTIFY WIDGET ===== */
(function(){
  var spotifyText = document.getElementById('spotifyText');
  var dot = document.querySelector('.spotify-dot');
  if (!spotifyText) return;

  var tracks = [
    'Dark Red — Steve Lacy',
    'Blinding Lights — The Weeknd',
    'Pink + White — Frank Ocean',
    'Redbone — Childish Gambino',
    'Nights — Frank Ocean',
    'ivy — Frank Ocean'
  ];

  // Simulate: starts "not playing", then randomly picks a song
  setTimeout(function() {
    var track = tracks[Math.floor(Math.random() * tracks.length)];
    spotifyText.textContent = track;
    if (dot) dot.classList.remove('off');
    // Rotate tracks every 3.5 min (simulated)
    setInterval(function() {
      var next = tracks[Math.floor(Math.random() * tracks.length)];
      spotifyText.style.opacity = '0';
      setTimeout(function() {
        spotifyText.textContent = next;
        spotifyText.style.opacity = '1';
      }, 400);
    }, 210000);
  }, 4000);

  // Style the transition
  spotifyText.style.transition = 'opacity .4s';
})();

/* ===== 3D TECH SPHERE ===== */
(function(){
  var grid = document.getElementById('techGrid');
  if (!grid) return;

  var skills = [
    'React','Next.js','Node.js','Python','PostgreSQL',
    'MongoDB','TypeScript','Git','Docker','AI/ML',
    'Express','REST APIs','UI/UX','Canvas API','WebSockets'
  ];

  // Replace static tiles with 3D orbiting sphere
  grid.innerHTML = '<div class="sphere-wrap" id="sphereWrap"><canvas id="sphereCanvas"></canvas></div>';
  grid.style.display = 'block';

  var canvas = document.getElementById('sphereCanvas');
  var ctx2 = canvas.getContext('2d');
  var W = grid.offsetWidth || 600;
  var H = Math.min(W * 0.6, 360);
  canvas.width = W; canvas.height = H;
  canvas.style.width = '100%';

  var CX = W / 2, CY = H / 2, R = Math.min(W, H) * 0.36;
  var tags = skills.map(function(s, i) {
    var phi = Math.acos(-1 + (2 * i) / skills.length);
    var theta = Math.sqrt(skills.length * Math.PI) * phi;
    return {
      label: s,
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.sin(phi) * Math.sin(theta),
      z: Math.cos(phi)
    };
  });

  // Accumulated rotation (applied each frame from velocity)
  var velX = 0.0008, velY = 0.0015; // slow auto-spin
  var isDragging = false, lastMX = 0, lastMY = 0;
  var DAMPING = 0.94;

  canvas.addEventListener('mousedown', function(e) {
    isDragging = true;
    lastMX = e.clientX; lastMY = e.clientY;
    velX = 0; velY = 0; // stop auto-spin on grab
  });
  window.addEventListener('mouseup', function() { isDragging = false; });
  window.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    var dx = e.clientX - lastMX;
    var dy = e.clientY - lastMY;
    velY = dx * 0.0015;
    velX = dy * 0.0015;
    lastMX = e.clientX; lastMY = e.clientY;
  });

  // Touch support with same damping
  canvas.addEventListener('touchstart', function(e) {
    isDragging = true;
    lastMX = e.touches[0].clientX; lastMY = e.touches[0].clientY;
    velX = 0; velY = 0;
  }, {passive: true});
  window.addEventListener('touchend', function() { isDragging = false; });
  window.addEventListener('touchmove', function(e) {
    if (!isDragging) return;
    var dx = e.touches[0].clientX - lastMX;
    var dy = e.touches[0].clientY - lastMY;
    velY = dx * 0.0003;
    velX = dy * 0.0003;
    lastMX = e.touches[0].clientX; lastMY = e.touches[0].clientY;
  }, {passive: true});

  // Rotation angles accumulate
  var angleX = 0, angleY = 0;

  function rotateTag(tag) {
    // Rotate around Y
    var cosY = Math.cos(angleY), sinY = Math.sin(angleY);
    var x1 = tag.ox * cosY - tag.oz * sinY;
    var z1 = tag.ox * sinY + tag.oz * cosY;
    // Rotate around X
    var cosX = Math.cos(angleX), sinX = Math.sin(angleX);
    var y1 = tag.oy * cosX - z1 * sinX;
    var z2 = tag.oy * sinX + z1 * cosX;
    return { x: x1, y: y1, z: z2 };
  }

  // Store original positions so we rotate from them cleanly
  tags.forEach(function(t) { t.ox = t.x; t.oy = t.y; t.oz = t.z; });

  function draw() {
    // Apply velocity + damping each frame
    velX *= DAMPING;
    velY *= DAMPING;
    angleX += velX;
    angleY += velY;

    ctx2.clearRect(0, 0, W, H);
    var projected = tags.map(function(tag) {
      var r = rotateTag(tag);
      // Update original so cumulative rotation works
      tag.ox = r.x; tag.oy = r.y; tag.oz = r.z;
      var scale = (r.z + 1.5) / 2.5;
      return {
        label: tag.label,
        px: CX + r.x * R,
        py: CY + r.y * R,
        scale: scale,
        z: r.z
      };
    });
    // Reset angles after applying to tags (avoid float drift)
    angleX = 0; angleY = 0;

    // Sort back-to-front
    projected.sort(function(a, b) { return a.z - b.z; });
    projected.forEach(function(t) {
      ctx2.save();
      ctx2.globalAlpha = 0.25 + t.scale * 0.75;
      ctx2.font = Math.round(8 + t.scale * 5) + 'px "JetBrains Mono", monospace';
      ctx2.fillStyle = '#ffffff';
      ctx2.textAlign = 'center';
      ctx2.textBaseline = 'middle';
      ctx2.fillText(t.label, t.px, t.py);
      ctx2.restore();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ===== 1. AMBIENT BACKGROUND GLOW ===== */
(function(){
  var canvas = document.getElementById('ambientGlow');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var W, H;
  var orbs = [
    {x: 0.2, y: 0.2, r: 0.6, vx: 0.001, vy: 0.0015, color: 'rgba(255, 255, 255, 0.03)'},
    {x: 0.8, y: 0.8, r: 0.7, vx: -0.0012, vy: -0.0008, color: 'rgba(120, 120, 120, 0.02)'},
    {x: 0.5, y: 0.5, r: 0.5, vx: 0.0008, vy: -0.001, color: 'rgba(200, 200, 200, 0.015)'}
  ];
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  window.addEventListener('resize', resize);
  resize();

  function draw() {
    ctx.clearRect(0, 0, W, H);
    var scrollY = window.scrollY || 0;
    orbs.forEach(function(o) {
      o.x += o.vx; o.y += o.vy;
      if (o.x < 0 || o.x > 1) o.vx *= -1;
      if (o.y < 0 || o.y > 1) o.vy *= -1;
      var px = o.x * W;
      var py = (o.y * H) - (scrollY * 0.1); // subtle parallax
      
      var grd = ctx.createRadialGradient(px, py, 0, px, py, o.r * Math.max(W, H));
      grd.addColorStop(0, o.color);
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ===== 3. SCROLL VELOCITY SKEW ===== */
/* ===== 6. PARALLAX DEPTH LAYERS ===== */
/* ===== 7. MICRO-READING PROGRESS BAR ===== */
(function(){
  var skews = document.querySelectorAll('.hero-name, .proj-card, .sec-lbl, .tech-grid');
  var prog = document.getElementById('readingProgress');
  skews.forEach(function(el) { el.classList.add('scroll-skew'); });
  var lastY = window.scrollY;
  
  window.addEventListener('scroll', function() {
    var y = window.scrollY;
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    // Progress Bar (7)
    if (prog) prog.style.width = (y / maxScroll * 100) + '%';
    
    // Velocity Skew (3) & Parallax (6)
    var dy = y - lastY;
    var skew = Math.max(-3, Math.min(3, dy * 0.05)); // clamp skew
    skews.forEach(function(el) {
      el.style.transform = 'skewY(' + skew + 'deg)';
      clearTimeout(el.skewTimer);
      el.skewTimer = setTimeout(function() { el.style.transform = 'skewY(0deg)'; }, 150);
    });
    lastY = y;
  }, {passive: true});
})();

/* ===== 4. TIME-BASED DYNAMIC GREETING ===== */
(function(){
  var gt = document.getElementById('timeGreeting');
  if (gt) {
    var hour = new Date().getHours();
    var msg = "Good evening";
    if (hour < 12) msg = "Good morning";
    else if (hour < 17) msg = "Good afternoon";
    gt.textContent = msg + ", I'm Ishan.";
  }
})();

/* ===== 5. FOCUS MODE SPOTLIGHT ===== */
(function(){
  var focusActive = false;
  window.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 'f' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      focusActive = !focusActive;
      document.body.classList.toggle('focus-active', focusActive);
      if (focusActive && window.uiBeep) window.uiBeep(900, 0.1, 0.1);
    }
  });
  window.addEventListener('mousemove', function(e) {
    if (focusActive) {
      document.body.style.setProperty('--mouse-x', e.clientX + 'px');
      document.body.style.setProperty('--mouse-y', e.clientY + 'px');
    }
  }, {passive: true});
})();

/* ===== 8. COPY TOAST MICROINTERACTION ===== */
(function(){
  var links = document.querySelectorAll('[data-copy]');
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var txt = link.getAttribute('data-copy');
      navigator.clipboard.writeText(txt);
      
      var toast = document.createElement('div');
      toast.className = 'copy-toast';
      toast.textContent = 'Copied to clipboard';
      toast.style.left = e.clientX + 'px';
      toast.style.top = e.clientY + 'px';
      document.body.appendChild(toast);
      
      // trigger reflow
      void toast.offsetWidth;
      toast.classList.add('show');
      
      if (window.uiBeep) window.uiBeep(1200, 0.05, 0.1);
      
      setTimeout(function() {
        toast.classList.remove('show');
        setTimeout(function() { toast.remove(); }, 300);
      }, 1500);
    });
  });
})();

/* ===== 9. IDLE STATE BREATHING ===== */
(function(){
  var idleTimer;
  function resetIdle() {
    document.body.classList.remove('idle-state');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function() {
      document.body.classList.add('idle-state');
    }, 15000); // 15 seconds
  }
  window.addEventListener('mousemove', resetIdle, {passive: true});
  window.addEventListener('scroll', resetIdle, {passive: true});
  window.addEventListener('keydown', resetIdle, {passive: true});
  resetIdle();
})();

/* ===== 10. CUSTOM CONTEXT MENU ===== */
(function(){
  var ctxMenu = document.getElementById('customContextMenu');
  if (!ctxMenu) return;
  
  window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    ctxMenu.classList.add('active');
    
    // Boundary check
    var x = e.clientX;
    var y = e.clientY;
    if (x + 220 > window.innerWidth) x -= 220;
    if (y + 150 > window.innerHeight) y -= 150;
    
    ctxMenu.style.left = x + 'px';
    ctxMenu.style.top = y + 'px';
  });
  
  window.addEventListener('click', function(e) {
    if (!ctxMenu.contains(e.target)) {
      ctxMenu.classList.remove('active');
    }
  });
  
  var items = ctxMenu.querySelectorAll('.ctx-item');
  items.forEach(function(item) {
    item.addEventListener('click', function() {
      var act = item.getAttribute('data-action');
      if (act === 'copy') {
        navigator.clipboard.writeText(window.location.href);
      } else if (act === 'contact') {
        window.open('mailto:isishan100@gmail.com');
      } else if (act === 'print') {
        window.open('resume.html', '_blank');
      }
      ctxMenu.classList.remove('active');
    });
  });
})();
