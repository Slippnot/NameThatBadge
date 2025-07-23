import { premClubs, removed } from "./clubArrays.js";


const clubBadge = document.getElementById("clubBadge");
const scoreDisplay = document.getElementById("scoreDisplay");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const optionBTN = document.querySelectorAll(".optionBTN");

playGame();

function playGame(){
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

  removed.splice(1, 0, `${badgeQuestion}`);
  let removeFromArray = premClubs.indexOf(`${badgeQuestion}`);
  premClubs.splice(removeFromArray, 1);

  clubBadge.style.display = `block`;
  clubBadge.src = `clubBadgesImages/${badgeQuestion}.png`;

  scoreDisplay.style.display = `block`;

  optionBTN.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      if(buttons.innerHTML == badgeAnswer){
        scoreDisplay.innerHTML = `Correct It Was ${badgeAnswer}`;
      }
      else {
        scoreDisplay.innerHTML = `Wrong It Was ${badgeAnswer}`;
      }
    });
  });
}