const PASSWORD = 'Love';
const START = new Date('2025-10-20T00:00:00');
const splash = document.getElementById('splash');
const lockScreen = document.getElementById('lockScreen');
const cinemaIntro = document.getElementById('cinemaIntro');
const cinemaText = document.getElementById('cinemaText');
const app = document.getElementById('app');
const password = document.getElementById('password');
const error = document.getElementById('error');
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');

const letterText = `بصي يا حبيبتي، احنا أهو عارفين بعض بقالنا فترة صغيرة، ويوم ما دخلتي حياتي ودخلت حياتك كانت فجأة ومش مترتبة، جت صدفة بس، وحياتك عندي أحسن صدفة وأجمل حاجة حصلت في حياتي.

علشان عرفتني على أجمل بنت وأحن وأطيب قلب.

عايز أقولك إني من يوم ما عرفتك وإنتي بقيتي كل حاجة ليا، بقيتي بنتي وحبيبتي وصاحبتي وكل دنيتي.

إنتي بقيتي الحياة اللي عايش علشانها. أنا بحبك أوي، بحب حنيتك وكلامك ليا، بحب ضحكتك وبحب غيرتك عليا، بحب كل حاجة فيكي.

إنتي الحاجة الوحيدة اللي طلعت بيها من الدنيا ♥️🫀🫶`;

const introText = `فيه هدايا بتخلص مع الوقت...
وفيه هدايا بتفضل عايشة طول العمر.

وده مكان صغير معمول بحب...
مخصوص لـ MONA ♥️`;

const reasons = [
"علشان ضحكتك بتخليني أنسى أي هم.","علشان وجودك بيطمني.","علشان حنيتك ملهاش زي.","علشان كلامك بيهون عليا أي تعب.","علشان أول حد بفكر فيه كل يوم هو إنتي.","علشان آخر حد نفسي أكلمه قبل ما أنام هو إنتي.","علشان قلبك أبيض.","علشان طيبة قلبك.","علشان بتفهميني من غير ما أتكلم.","علشان وجودك نعمة من ربنا.",
"علشان بتخليني أحس إني محظوظ.","علشان بحب صوتك.","علشان بحب ضحكتك.","علشان بحب غيرتك عليا.","علشان بحب اهتمامك بيا.","علشان بحب طريقة كلامك.","علشان بحب عيونك.","علشان بحب قلبك.","علشان بحب كل حاجة فيكي.","علشان إنتي أحن بنت عرفتها.",
"علشان معاكي بحس بالأمان.","علشان بتخليني أحسن.","علشان وجودك بيفرق في يومي.","علشان بحب أشاركك كل حاجة.","علشان أول ما يحصل حاجة حلوة بحب أحكيهالك.","علشان أول ما أزعل بدور عليكي.","علشان بحب وجودك حتى لو ساكتين.","علشان بفرح بفرحك.","علشان زعلك بيزعلني.","علشان نفسي أشوفك مبسوطة دايمًا.",
"علشان إنتي سندي.","علشان بقيتي كل دنيتي.","علشان بقيتي أقرب حد لقلبي.","علشان بحب اهتمامك بالتفاصيل.","علشان بحب طريقة هزارك.","علشان بحب شخصيتك.","علشان معاكي الوقت بيجري بسرعة.","علشان كل يوم معاكي أحلى من اللي قبله.","علشان أول هدية منك ليها مكانة خاصة عندي.","علشان أول رسالة منك لسه فاكرها.",
"علشان كل ذكرى بينا غالية.","علشان بحب لما تضحكي.","علشان بحب لما تناديني باسمي.","علشان بحب لما تطمني عليا.","علشان بحب لما تفرحي.","علشان نفسي أكون سبب سعادتك.","علشان ربنا رزقني بيكي.","علشان بحس إن الدنيا أحسن وإنتي فيها.","علشان وجودك بيخليني أبتسم.","علشان بحب كل تفاصيلك.",
"علشان معاكي بحس إني في البيت.","علشان إنتي أحلى صدفة حصلتلي.","علشان كل يوم بحبك أكتر.","علشان بحب وجودك في حياتي.","علشان مستحيل أتخيل حياتي من غيرك.","علشان إنتي أجمل بنت في عيني.","علشان بحب أسمع صوتك.","علشان بحب طريقتك في الكلام.","علشان بحب اهتمامك.","علشان بحب خجلك.",
"علشان بحب تلقائيتك.","علشان بحب قلبك قبل أي حاجة.","علشان إنتي بتفهميني.","علشان بحب أقعد معاكي.","علشان بحب أضحك معاكي.","علشان بحب أمشي معاكي.","علشان نفسي أحقق كل أحلامك.","علشان بحب أشوفك ناجحة.","علشان إنتي تستحقي كل خير.","علشان بحب أشوفك مبسوطة.",
"علشان بحب أفرحك.","علشان بحب أجيبلك هدايا.","علشان أول هدية منك عمري ما هنساها.","علشان إنتي زينة البنات.","علشان بحب عفويتك.","علشان بحب براءتك.","علشان بحب طيبتك.","علشان بحب احترامك.","علشان بحب أخلاقك.","علشان وجودك بيغير يومي.",
"علشان إنتي راحة قلبي.","علشان إنتي أجمل حاجة حصلتلي.","علشان إنتي اختياري كل مرة.","علشان بحب أحلم بمستقبلنا.","علشان بحب أي ذكرى بينا.","علشان بحب أي صورة تجمعنا.","علشان بحب كل دقيقة معاكي.","علشان بحب كل ثانية معاكي.","علشان إنتي مصدر سعادتي.","علشان إنتي سبب ابتسامتي.",
"علشان إنتي أماني بعد ربنا.","علشان بحب اهتمامك الصغير قبل الكبير.","علشان بحب لما تناديني.","علشان بحب وجودك حتى من غير كلام.","علشان بحب كل حاجة تخصك.","علشان بحب أسمع أخبارك.","علشان بحب أطمن عليكي.","علشان نفسي أفضل جنبك.","علشان نفسي أشوفك سعيدة دايمًا.","علشان بحبك... وبس ❤️"
];
let reasonBag = [...Array(reasons.length).keys()];
let currentReason = 0;

setTimeout(() => { splash.classList.add('hidden'); lockScreen.classList.remove('hidden'); }, 2600);
document.getElementById('unlockBtn').addEventListener('click', unlock);
password.addEventListener('keydown', e => { if(e.key === 'Enter') unlock(); });

function unlock(){
  if(password.value.trim() === PASSWORD){
    lockScreen.classList.add('hidden');
    playCinemaIntro();
    audio.play().then(() => playBtn.textContent = '❚❚').catch(() => {});
  } else {
    error.textContent = 'الباسورد غلط يا قمر 💔';
    password.value = '';
  }
}
function playCinemaIntro(){
  cinemaIntro.classList.remove('hidden');
  cinemaText.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    cinemaText.textContent += introText[i] || '';
    i++;
    if(i >= introText.length){
      clearInterval(timer);
      setTimeout(() => { cinemaIntro.classList.add('hidden'); app.classList.remove('hidden'); burst(60); window.scrollTo(0,0); }, 1100);
    }
  }, 45);
}
function openLetter(){
  const env = document.querySelector('.envelope');
  env.classList.add('open');
  if(!env.dataset.done){ env.dataset.done = '1'; typeText(); }
  burst(35);
}
function typeText(){
  const el = document.getElementById('typedLetter');
  el.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += letterText[i] || '';
    i++;
    if(i >= letterText.length) clearInterval(timer);
  }, 25);
}
function go(id){ closeMenu(); document.getElementById(id).scrollIntoView({behavior:'smooth'}); burst(20); }
function toggleMusic(){
  if(audio.paused){ audio.play().then(() => playBtn.textContent='❚❚').catch(() => alert('الموسيقى هتشتغل بعد أول ضغطة على زر التشغيل')); }
  else { audio.pause(); playBtn.textContent='▶'; }
}
audio.addEventListener('timeupdate', () => { if(audio.duration) progress.value = (audio.currentTime/audio.duration)*100; });
progress.addEventListener('input', () => { if(audio.duration) audio.currentTime = (progress.value/100)*audio.duration; });
function updateCounter(){
  let diff = Math.max(0, new Date() - START);
  let d = Math.floor(diff/86400000); diff -= d*86400000;
  let h = Math.floor(diff/3600000); diff -= h*3600000;
  let m = Math.floor(diff/60000); diff -= m*60000;
  let s = Math.floor(diff/1000);
  document.getElementById('days').textContent = d;
  document.getElementById('hours').textContent = String(h).padStart(2,'0');
  document.getElementById('minutes').textContent = String(m).padStart(2,'0');
  document.getElementById('seconds').textContent = String(s).padStart(2,'0');
}
setInterval(updateCounter,1000); updateCounter();
function openGiftMemory(){ document.getElementById('giftMemory').classList.add('open'); burst(55); }
function newReason(){
  if(reasonBag.length === 0) reasonBag = [...Array(reasons.length).keys()];
  const pickPos = Math.floor(Math.random()*reasonBag.length);
  const idx = reasonBag.splice(pickPos,1)[0];
  currentReason = idx + 1;
  const card = document.querySelector('.reason-card');
  document.getElementById('reasonText').textContent = reasons[idx];
  document.getElementById('reasonNo').textContent = `Reason ${currentReason} / 100`;
  card.classList.remove('pop'); void card.offsetWidth; card.classList.add('pop');
  burst(18);
}
function openImage(src){ document.getElementById('modalImg').src = src; document.getElementById('imageModal').classList.remove('hidden'); }
function closeImage(){ document.getElementById('imageModal').classList.add('hidden'); }
function floatOne(){
  const e = document.createElement('div');
  e.className = 'float';
  e.textContent = Math.random()>.55 ? '♥' : (Math.random()>.55 ? '💕' : (Math.random()>.5 ? '🌸' : '✨'));
  e.style.left = Math.random()*100 + 'vw';
  e.style.fontSize = (16 + Math.random()*30) + 'px';
  e.style.animationDuration = (4 + Math.random()*5) + 's';
  document.getElementById('fx').appendChild(e);
  setTimeout(() => e.remove(), 9500);
}
function burst(n=30){ for(let i=0;i<n;i++) setTimeout(floatOne, i*45); }
setInterval(floatOne, 1200);
function openMenu(){ document.getElementById('menu').classList.remove('hidden'); }
function closeMenu(){ document.getElementById('menu').classList.add('hidden'); }
function celebrate(){ burst(140); audio.play().then(()=>playBtn.textContent='❚❚').catch(()=>{}); }
const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show'); }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
if('serviceWorker' in navigator){ navigator.serviceWorker.register('sw.js').catch(()=>{}); }
