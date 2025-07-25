import { premClubs, removed } from "./clubArrays.js";


const clubBadge = document.getElementById("clubBadge");
const scoreDisplay = document.getElementById("scoreDisplay");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const optionBTN = document.querySelectorAll(".optionBTN");
const gamemodeButtons = document.querySelectorAll(".gamemodeButtons");
const premGamemode = document.getElementById("premGamemode");

let score = 0;

premGamemode.onclick = () => {
  gamemodeButtons.forEach((e) => {
    e.style.display = `none`;
  });
  optionBTN.forEach((e) => {
    e.style.display = `block`;
  });
  playGame(premClubs,premClubs.length,`premierLeagueBadges`);
  optionBTN.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      playGame(premClubs,premClubs.length,`premierLeagueBadges`);
    });
  });
}

function playGame(clubNameArray,totalArrayLength,badgeArtFolder){
  let rng = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  let randomBadge = clubNameArray[Math.floor(Math.random() * clubNameArray.length)];
  let wrong1 = clubNameArray[Math.floor(Math.random() * clubNameArray.length)];
  let wrong2 = clubNameArray[Math.floor(Math.random() * clubNameArray.length)];
  let wrong3 = clubNameArray[Math.floor(Math.random() * clubNameArray.length)];

  let badgeAnswer = randomBadge;
  let badgeQuestion = randomBadge;

  if(wrong1 == wrong2 || wrong1 == wrong3){
    wrong1 = removed[Math.floor(Math.random() * removed.length)];
  }
  if(wrong2 == wrong1 || wrong2 == wrong3){
    wrong2 = removed[Math.floor(Math.random() * removed.length)];
  }
  if(wrong3 == wrong1 || wrong3 == wrong2){
    wrong3 = removed[Math.floor(Math.random() * removed.length)];
  }
  if(wrong1 == badgeAnswer){
    wrong1 = removed[Math.floor(Math.random() * removed.length)];
  }
  if(wrong2 == badgeAnswer){
    wrong2 = removed[Math.floor(Math.random() * removed.length)];
  }
  if(wrong3 == badgeAnswer){
    wrong3 = removed[Math.floor(Math.random() * removed.length)];
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
  let removeFromArray = clubNameArray.indexOf(`${badgeQuestion}`);
  clubNameArray.splice(removeFromArray, 1);

  clubBadge.style.display = `block`;
  clubBadge.src = `clubBadgesImages/${badgeArtFolder}/${badgeQuestion}.png`;

  scoreDisplay.style.display = `block`;

  option1.onclick = () => {
    if(option1.innerHTML == badgeAnswer){
      score++
      scoreDisplay.innerHTML = `${score} / ${totalArrayLength} Correct It Was ${badgeAnswer}`;
    }
    else {
      scoreDisplay.innerHTML = `Wrong It Was ${badgeAnswer}`;
    }
  }
  option2.onclick = () => {
    if(option2.innerHTML == badgeAnswer){
      score++
      scoreDisplay.innerHTML = `${score} / ${totalArrayLength} Correct It Was ${badgeAnswer}`;
    }
    else {
      scoreDisplay.innerHTML = `Wrong It Was ${badgeAnswer}`;
    }
  }
  option3.onclick = () => {
    if(option3.innerHTML == badgeAnswer){
      score++
      scoreDisplay.innerHTML = `${score} / ${totalArrayLength} Correct It Was ${badgeAnswer}`;
    }
    else {
      scoreDisplay.innerHTML = `Wrong It Was ${badgeAnswer}`;
    }
  }
  option4.onclick = () => {
    if(option4.innerHTML == badgeAnswer){
      score++
      scoreDisplay.innerHTML = `${score} / ${totalArrayLength} Correct It Was ${badgeAnswer}`;
    }
    else {
      scoreDisplay.innerHTML = `Wrong It Was ${badgeAnswer}`;
    }
  }
}

document.getElementById("homeButton").onclick = () => {location.reload();}