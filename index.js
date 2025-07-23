import { premClubs, removed } from "./clubArrays.js";


const clubBadge = document.getElementById("clubBadge");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

let rng = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
let randomBadge = premClubs[Math.floor(Math.random() * premClubs.length)];
let wrong1 = premClubs[Math.floor(Math.random() * premClubs.length)];
let wrong2 = premClubs[Math.floor(Math.random() * premClubs.length)];
let wrong3 = premClubs[Math.floor(Math.random() * premClubs.length)];

let badgeAnswer = randomBadge;
let badgeQuestion = randomBadge;

if(wrong1 == wrong2 || wrong1 == wrong3){
  wrong1 = removed[Math.floor(Math.random() * removed.length)];
  console.log("wrong1 had a dupe");
}
if(wrong2 == wrong1 || wrong2 == wrong3){
  wrong2 = removed[Math.floor(Math.random() * removed.length)];
  console.log("wrong2 had a dupe");
}
if(wrong3 == wrong1 || wrong3 == wrong2){
  wrong3 = removed[Math.floor(Math.random() * removed.length)];
  console.log("wrong3 had a dupe");
}
if(wrong1 == badgeAnswer){
  wrong1 = removed[Math.floor(Math.random() * removed.length)];
  console.log("wrong1 duped answer");
}
if(wrong2 == badgeAnswer){
  wrong2 = removed[Math.floor(Math.random() * removed.length)];
  console.log("wrong2 duped answer");
}
if(wrong3 == badgeAnswer){
  wrong3 = removed[Math.floor(Math.random() * removed.length)];
  console.log("wrong3 duped answer");
}

if(rng === 1){
  option1.innerHTML = `${badgeAnswer}`;
  option2.innerHTML = `${wrong1}`;
  option3.innerHTML = `${wrong2}`;
  option4.innerHTML = `${wrong3}`;
}
if(rng === 2){
  option1.innerHTML = `${wrong1}`;
  option2.innerHTML = `${badgeAnswer}`;
  option3.innerHTML = `${wrong2}`;
  option4.innerHTML = `${wrong3}`;
}
if(rng === 3){
  option1.innerHTML = `${wrong1}`;
  option2.innerHTML = `${wrong2}`;
  option3.innerHTML = `${badgeAnswer}`;
  option4.innerHTML = `${wrong3}`;
}
if(rng === 4){
  option1.innerHTML = `${wrong1}`;
  option2.innerHTML = `${wrong2}`;
  option3.innerHTML = `${wrong3}`;
  option4.innerHTML = `${badgeAnswer}`;
}

clubBadge.style.display = `block`;
clubBadge.src = `clubBadgesImages/${badgeQuestion}.png`;