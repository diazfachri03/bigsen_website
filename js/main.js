(()=>{"use strict";
// Isi nomor WhatsApp bisnis (format internasional tanpa +, contoh "6281234567890") agar tombol WhatsApp muncul.
const CONFIG={whatsapp:"",pesan:"Halo Bigsen, saya ingin bertanya tentang furnitur kantor."};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
document.documentElement.classList.add("js");
const hd=$("header"),nv=$("#nv"),mb=$(".mb");
const menu=o=>{document.body.style.overflow=o?"hidden":"";mb.textContent=o?"✕":"☰";nv.classList.toggle("o",o);mb.setAttribute("aria-expanded",o);mb.setAttribute("aria-label",o?"Tutup menu":"Buka menu")};
mb.addEventListener("click",()=>menu(!nv.classList.contains("o")));
$$("a[href^='#']").forEach(a=>a.addEventListener("click",()=>menu(false)));
const sh=()=>hd.classList.toggle("sc",scrollY>10);sh();addEventListener("scroll",sh,{passive:true});
const links=$$("nav a");
const spy=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&links.forEach(a=>a.classList.toggle("on",a.hash==="#"+e.target.id))),{rootMargin:"-45% 0px -50% 0px"});
links.forEach(a=>{const t=$(a.hash);t&&spy.observe(t)});
const rv=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");rv.unobserve(e.target)}}),{threshold:.12});
$$(".card,section h2").forEach(e=>{e.classList.add("reveal");rv.observe(e)});
addEventListener("keydown",e=>{if(e.key==="Escape"&&nv.classList.contains("o"))menu(false)});
// Filter proyek
$$(".chip").forEach(c=>c.addEventListener("click",()=>{$$(".chip").forEach(x=>{const on=x===c;x.classList.toggle("on",on);x.setAttribute("aria-pressed",on)});const k=c.dataset.cat;$$(".pj").forEach(p=>p.hidden=k!=="Semua"&&p.dataset.cat!==k)}));
// Galeri foto proyek
let lb,idx=0,ph=[],from;
const IMG=n=>"assets/img/"+n+".jpg";
function show(i){idx=(i+ph.length)%ph.length;const im=$(".lbs img",lb);im.src=IMG(ph[idx]);im.alt=lb.getAttribute("aria-label")+" foto "+(idx+1);$$(".lbt button",lb).forEach((b,j)=>b.setAttribute("aria-current",j===idx));$(".lbc",lb).textContent=(idx+1)+" / "+ph.length}
function closeLb(){lb.remove();lb=null;document.body.style.overflow="";from&&from.focus()}
function openLb(card){from=card;ph=card.dataset.photos.split(",");lb=document.createElement("div");lb.className="lb";lb.setAttribute("role","dialog");lb.setAttribute("aria-modal","true");lb.setAttribute("aria-label",card.dataset.name);
lb.innerHTML='<div class="lbh"><div><strong></strong><span class="mu"></span><span class="mu lbc"></span></div><button class="btn" type="button">Tutup</button></div><div class="lbs"><button class="lbn" type="button" aria-label="Foto sebelumnya">‹</button><img alt=""><button class="lbn" type="button" aria-label="Foto berikutnya">›</button></div><div class="lbt"></div>';
$("strong",lb).textContent=card.dataset.name;$(".mu",lb).textContent=card.dataset.desc;
ph.forEach((n,j)=>{const b=document.createElement("button");b.type="button";b.setAttribute("aria-label","Foto "+(j+1));b.innerHTML='<img alt="" src="'+IMG(n+"-t")+'">';b.onclick=()=>show(j);$(".lbt",lb).append(b)});
const bs=$$(".lbn",lb);bs[0].onclick=()=>show(idx-1);bs[1].onclick=()=>show(idx+1);$(".btn",lb).onclick=closeLb;
let x0=0;lb.addEventListener("touchstart",e=>x0=e.touches[0].clientX,{passive:true});lb.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50)show(idx+(d<0?1:-1))});
document.body.append(lb);document.body.style.overflow="hidden";show(0);$(".btn",lb).focus()}
$$(".pj").forEach(c=>{c.addEventListener("click",()=>openLb(c));c.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openLb(c)}})});
addEventListener("keydown",e=>{if(!lb)return;if(e.key==="Escape")closeLb();else if(e.key==="ArrowRight")show(idx+1);else if(e.key==="ArrowLeft")show(idx-1)});
// Form kontak (Netlify Forms, cadangan: aplikasi email)
const f=$("#cf"),fs=$("#fs");
f.addEventListener("submit",async e=>{e.preventDefault();const b=$("button",f);b.disabled=true;fs.textContent="Mengirim...";
try{const r=await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(new FormData(f)).toString()});if(!r.ok)throw new Error("x");f.reset();fs.textContent="Terima kasih, pesan Anda sudah terkirim. Kami akan segera menghubungi Anda."}
catch{const d=new FormData(f);location.href="mailto:Bigsen.indonesia@gmail.com?subject="+encodeURIComponent("Permintaan dari "+d.get("nama"))+"&body="+encodeURIComponent(d.get("pesan")+"\n\nNama: "+d.get("nama")+"\nEmail: "+d.get("email")+"\nTelepon: "+d.get("telepon"));fs.textContent="Membuka aplikasi email Anda untuk mengirim pesan."}
b.disabled=false});
// Tombol WhatsApp
const wa=$("#wa");if(CONFIG.whatsapp){wa.href="https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(CONFIG.pesan);wa.hidden=false}
})();
