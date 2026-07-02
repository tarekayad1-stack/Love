const PASSWORD='Love';
const START=new Date('2025-10-20T00:00:00');
const splash=document.getElementById('splash');
const lockScreen=document.getElementById('lockScreen');
const cinemaIntro=document.getElementById('cinemaIntro');
const cinemaText=document.getElementById('cinemaText');
const app=document.getElementById('app');
const password=document.getElementById('password');
const error=document.getElementById('error');
const audio=document.getElementById('audio');
const playBtn=document.getElementById('playBtn');
const progress=document.getElementById('progress');

const letterText=`بصي يا حبيبتي، احنا أهو عارفين بعض بقالنا فترة صغيرة، ويوم ما دخلتي حياتي ودخلت حياتك كانت فجأة ومش مترتبة، جت صدفة بس، وحياتك عندي أحسن صدفة وأجمل حاجة حصلت في حياتي.

علشان عرفتني على أجمل بنت وأحن وأطيب قلب.

عايز أقولك إني من يوم ما عرفتك وإنتي بقيتي كل حاجة ليا، بقيتي بنتي وحبيبتي وصاحبتي وكل دنيتي.

إنتي بقيتي الحياة اللي عايش علشانها. أنا بحبك أوي، بحب حنيتك وكلامك ليا، بحب ضحكتك وبحب غيرتك عليا، بحب كل حاجة فيكي.

إنتي الحاجة الوحيدة اللي طلعت بيها من الدنيا ♥️🫀🫶`;

const introText=`فيه هدايا بتخلص مع الوقت...

وفيه هدايا بتفضل عايشة طول العمر.

وده مكان صغير معمول بحب...

مخصوص ليكي يا منى ❤️`;

const reasons=[
'علشان إنتي بتخليني أبقى أحسن نسخة من نفسي.',
'علشان ضحكتك قادرة تغير يومي كله.',
'علشان حنيتك بتطمن قلبي.',
'علشان كلامك ليا بيخليني مبسوط من غير سبب.',
'علشان غيرتك عليا جميلة وبتفرحني.',
'علشان وجودك في حياتي نعمة كبيرة.',
'علشان إنتي بنتي وحبيبتي وصاحبتي وكل دنيتي.',
'علشان معاكي بحس إن الدنيا لسه فيها حاجات حلوة.',
'علشان كل لحظة معاكي بتبقى ذكرى عايزها تفضل.',
'علشان بحب كل حاجة فيكي يا زينة البنات ❤️'
];

setTimeout(()=>{splash.classList.add('hidden');lockScreen.classList.remove('hidden');},2600);
document.getElementById('unlockBtn').addEventListener('click', unlock);
password.addEventListener('keydown', e=>{if(e.key==='Enter') unlock();});

function unlock(){
  if(password.value.trim()===PASSWORD){
    lockScreen.classList.add('hidden');
    cinemaIntro.classList.remove('hidden');
    typeCinema(()=>{
      cinemaIntro.classList.add('hidden');
      app.classList.remove('hidden');
      burst(60);
      setTimeout(()=>window.scrollTo(0,0),80);
      audio.play().then(()=>playBtn.textContent='❚❚').catch(()=>{});
    });
  }else{
    error.textContent='الباسورد غلط يا قمر 💔';
    password.value='';
  }
}

function typeCinema(done){
  cinemaText.textContent='';
  let i=0;
  const timer=setInterval(()=>{
    cinemaText.textContent+=introText[i]||'';
    i++;
    if(i>=introText.length){clearInterval(timer);setTimeout(done,1200)}
  },40);
}

function openLetter(){
  const env=document.querySelector('.envelope');
  env.classList.add('open');
  if(!env.dataset.done){env.dataset.done='1';typeText();}
  burst(35);
}
function typeText(){
  const el=document.getElementById('typedLetter');
  el.textContent='';
  let i=0;
  const timer=setInterval(()=>{
    el.textContent += letterText[i] || '';
    i++;
    if(i>=letterText.length) clearInterval(timer);
  },26);
}
function go(id){closeMenu();document.getElementById(id).scrollIntoView({behavior:'smooth'});burst(18)}
function toggleMusic(){
  if(audio.paused){audio.play().then(()=>playBtn.textContent='❚❚').catch(()=>alert('الموسيقى هتشتغل بعد أول ضغطة على زر التشغيل'));}
  else{audio.pause();playBtn.textContent='▶';}
}
audio.addEventListener('timeupdate',()=>{if(audio.duration) progress.value=(audio.currentTime/audio.duration)*100;});
progress.addEventListener('input',()=>{if(audio.duration) audio.currentTime=(progress.value/100)*audio.duration;});
function updateCounter(){
  let diff=Math.max(0,new Date()-START);
  let d=Math.floor(diff/86400000); diff-=d*86400000;
  let h=Math.floor(diff/3600000); diff-=h*3600000;
  let m=Math.floor(diff/60000); diff-=m*60000;
  let s=Math.floor(diff/1000);
  document.getElementById('days').textContent=d;
  document.getElementById('hours').textContent=String(h).padStart(2,'0');
  document.getElementById('minutes').textContent=String(m).padStart(2,'0');
  document.getElementById('seconds').textContent=String(s).padStart(2,'0');
}
setInterval(updateCounter,1000);updateCounter();
function openGiftMemory(){
  const g=document.getElementById('giftMemory');
  g.classList.add('open');
  setTimeout(()=>g.classList.add('show-second'),950);
  burst(40);
}
function newReason(){
  const el=document.getElementById('reasonText');
  el.style.opacity=0;
  setTimeout(()=>{el.textContent=reasons[Math.floor(Math.random()*reasons.length)];el.style.opacity=1;burst(20)},180);
}
function openImage(src){document.getElementById('modalImg').src=src;document.getElementById('imageModal').classList.remove('hidden')}
function closeImage(){document.getElementById('imageModal').classList.add('hidden')}
function floatOne(){
  const e=document.createElement('div');
  e.className='float';
  e.textContent=Math.random()>.55?'♥':(Math.random()>.55?'💕':(Math.random()>.5?'🌸':'✨'));
  e.style.left=Math.random()*100+'vw';
  e.style.fontSize=(16+Math.random()*30)+'px';
  e.style.animationDuration=(4+Math.random()*5)+'s';
  document.getElementById('fx').appendChild(e);
  setTimeout(()=>e.remove(),9500);
}
function burst(n=30){for(let i=0;i<n;i++) setTimeout(floatOne,i*45)}
setInterval(floatOne,950);
function openMenu(){document.getElementById('menu').classList.remove('hidden')}
function closeMenu(){document.getElementById('menu').classList.add('hidden')}
function celebrate(){burst(130);if(audio.paused)toggleMusic()}
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(()=>{});}
