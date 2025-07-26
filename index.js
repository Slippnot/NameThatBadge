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

const premClubArrayLength = premClubs.length;

let score = 0;

premGamemode.onclick = () => {
  hideGamemodeButtonsAndDisplayGameButtons();
  playGame(premClubs,premClubArrayLength,`premierLeagueBadges`);
  optionBTN.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      playGame(premClubs,premClubArrayLength,`premierLeagueBadges`);
    });
  });
}

function hideGamemodeButtonsAndDisplayGameButtons(){
  gamemodeButtons.forEach((e) => {
    e.style.display = `none`;
  });
  optionBTN.forEach((e) => {
    e.style.display = `block`;
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

  clubBadge.style.display = `block`;
  clubBadge.src = `clubBadgesImages/${badgeArtFolder}/${badgeQuestion}.png`;

  scoreDisplay.style.display = `block`;

  option1.onclick = () => {
    if(option1.innerHTML == badgeAnswer){
      score++
      scoreDisplay.innerHTML = `${score} / ${totalArrayLength} Correct It Was ${badgeAnswer}`;
    }
    else {
      scoreDisplay.innerHTML = `${score} / ${totalArrayLength} Wrong It Was ${badgeAnswer}`;
    }
    removed.splice(1, 0, `${badgeQuestion}`);
    let removeFromArray = clubNameArray.indexOf(`${badgeQuestion}`);
    clubNameArray.splice(removeFromArray, 1);
  }
  option2.onclick = () => {
    if(option2.innerHTML == badgeAnswer){
      score++
      scoreDisplay.innerHTML = `${score} / ${totalArrayLength} Correct It Was ${badgeAnswer}`;
    }
    else {
      scoreDisplay.innerHTML = `${score} / ${totalArrayLength} Wrong It Was ${badgeAnswer}`;
    }
    removed.splice(1, 0, `${badgeQuestion}`);
    let removeFromArray = clubNameArray.indexOf(`${badgeQuestion}`);
    clubNameArray.splice(removeFromArray, 1);
  }
  option3.onclick = () => {
    if(option3.innerHTML == badgeAnswer){
      score++
      scoreDisplay.innerHTML = `${score} / ${totalArrayLength} Correct It Was ${badgeAnswer}`;
    }
    else {
      scoreDisplay.innerHTML = `${score} / ${totalArrayLength} Wrong It Was ${badgeAnswer}`;
    }
    removed.splice(1, 0, `${badgeQuestion}`);
    let removeFromArray = clubNameArray.indexOf(`${badgeQuestion}`);
    clubNameArray.splice(removeFromArray, 1);
  }
  option4.onclick = () => {
    if(option4.innerHTML == badgeAnswer){
      score++
      scoreDisplay.innerHTML = `${score} / ${totalArrayLength} Correct It Was ${badgeAnswer}`;
    }
    else {
      scoreDisplay.innerHTML = `${score} / ${totalArrayLength} Wrong It Was ${badgeAnswer}`;
    }
    removed.splice(1, 0, `${badgeQuestion}`);
    let removeFromArray = clubNameArray.indexOf(`${badgeQuestion}`);
    clubNameArray.splice(removeFromArray, 1);
  }
  
  if(clubNameArray.length == 0){
    optionBTN.forEach((e) => {
      e.style.display = `none`;
    });
    scoreDisplay.innerHTML = `Total Score: ${score} / ${totalArrayLength}`;
  }
}

document.getElementById("homeButton").onclick = () => {location.reload();}