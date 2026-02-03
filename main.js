// Password
function login(){
let p=document.getElementById('pass').value;
if(p==="01052005"){
location.href="meet.html";
}else{
document.getElementById('err').innerText="Wrong Password ❌";
}
}
function next(page){
location.href=page;
}
// Spark Note
function showNote(){
document.getElementById('note').innerText=
"You know how the first spark , the first fall meant and felt to me. inially i thought it wont be the same feeling what i  have faced in the past, yeah thats true but thats even more colorful and brightful more than my past , my heart processing is very slow because it takes a lots of time to realize that my hearts wants you forever as wife and even my brain realized that its not a lust its love, life is always with unexpected things and you are the one who came as a unexpected angel in my life and become close to my heart who i dont want to loose, we want to marry, love forever and have beautiful childrens like you and the love for you wont change even after you gave birth to my beautiful childrens because i know who are the peoples you are gonna loose for me so i dont want to decrease my love for you, the day i fall in love with you ,each and evry day counts as well as increase my love level up like a share market that going in a profit and without a lose day by day so you dont need any hesitation to invest your love for me  ❤️ ";
document.getElementById('snext').style.display="inline";
}
// Questions
let ac=0;
function answer(){
ac++;
document.getElementById('a').innerText="Correct 😍";
if(ac>=1) initGame();
}
// Memory Game
const symbols=['❤️','💖','💕','💘','❤️','💖','💕','💘'];
let first=null,second=null,lock=false,match=0;
function initGame(){
const g=document.getElementById('game');
g.innerHTML='';
match=0;
const s=[...symbols].sort(()=>0.5-Math.random());
s.forEach(x=>{
let c=document.createElement('div');
c.className='card';
c.innerText='?';
c.dataset.v=x;
c.onclick=()=>flip(c);
g.appendChild(c);
});
}
function flip(c){
if(lock||c.innerText!='?')return;
c.innerText=c.dataset.v;
if(!first){first=c;return}
second=c;lock=true;
setTimeout(()=>{
if(first.dataset.v===second.dataset.v){
match+=2;
if(match===symbols.length){
document.getElementById('gstatus').innerText="You Won ❤️";
document.getElementById('fnext').style.display="inline";
}
}else{
first.innerText='?';
second.innerText='?';
}
first=null;second=null;lock=false;
},800);
}