import * as globalArrays from "./clubArrays.js";

// USED FOR TESTING NEW GAMEMODES --- clubNameArray[clubNameArray.length - 1] --- \\

const clubBadge = document.getElementById("clubBadge");
const scoreDisplay = document.getElementById("scoreDisplay");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

const optionBTN = document.querySelectorAll(".optionBTN");
const gamemodeButtons = document.querySelectorAll(".gamemodeButtons");

const premHiScoreDisplay = document.getElementById("premHiScoreDisplay");
const laLigaHiScoreDisplay = document.getElementById("laLigaHiScoreDisplay");

const premGamemode = document.getElementById("premGamemode");
const laLigaGamemode = document.getElementById("laLigaGamemode");

const allHiscores = document.getElementById("allHiscores");

const premClubArrayLength = globalArrays.premClubsArray.length;
const laLigaClubArrayLength = globalArrays.laLigaClubsArray.length;

let score = 0;

let premHiScore = 0;
let laLigaHiScore = 0;

var correctAudio = new Audio('audioFiles/CorrectAnswerAudio.mp3');
var wrongAudio = new Audio('audioFiles/WrongtAnswerAudio.mp3');

allHiscores.onclick = () => {
  gamemodeButtons.forEach((e) => {
    e.style.display = `none`;
  });
  allHiscores.style.display = `none`;
  premHiScoreDisplay.innerHTML = `Prem Hi-Score: ${localStorage.getItem("premHiScoreSaved")} / ${premClubArrayLength}`;
  laLigaHiScoreDisplay.innerHTML = `La Liga Hi-Score: ${localStorage.getItem("laLigaHiScoreSaved")} / ${laLigaClubArrayLength}`;
}

gamemodeButtons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    gamemodeButtons.forEach((e) => {
      e.style.display = `none`;
    });
    optionBTN.forEach((e) => {
      e.style.display = `block`;
    });
  });
});

premGamemode.onclick = () => {
  if(localStorage.getItem("premHiScoreSaved") !== null){
    let savedPremHiScore = JSON.parse(localStorage.getItem("premHiScoreSaved"));
    premHiScoreDisplay.innerHTML = `Prem Hi-Score: ${savedPremHiScore} / ${premClubArrayLength}`;
    premHiScore = savedPremHiScore;
  }
  playGame(globalArrays.premClubsArray,premClubArrayLength,`premierLeagueBadges`,premHiScore,premHiScoreDisplay,`Prem Hi-Score`,`premHiScoreSaved`);
  optionBTN.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      playGame(globalArrays.premClubsArray,premClubArrayLength,`premierLeagueBadges`,premHiScore,premHiScoreDisplay,`Prem Hi-Score`,`premHiScoreSaved`);
    });
  });
}

laLigaGamemode.onclick = () => {
  if(localStorage.getItem("laLigaHiScoreSaved") !== null){
    let savedLaLigaHiScore = JSON.parse(localStorage.getItem("laLigaHiScoreSaved"));
    laLigaHiScoreDisplay.innerHTML = `La Liga Hi-Score: ${savedLaLigaHiScore} / ${laLigaClubArrayLength}`;
    laLigaHiScore = savedLaLigaHiScore;
  }
  playGame(globalArrays.laLigaClubsArray,laLigaClubArrayLength,`laLigaBadges`,laLigaHiScore,laLigaHiScoreDisplay,`La Liga Hi-Score`,`laLigaHiScoreSaved`);
  optionBTN.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      playGame(globalArrays.laLigaClubsArray,laLigaClubArrayLength,`laLigaBadges`,laLigaHiScore,laLigaHiScoreDisplay,`La Liga Hi-Score`,`laLigaHiScoreSaved`);
    });
  });
}

function playGame(clubNameArray,totalArrayLength,badgeArtFolder,hiScore,hiScoreDisplay,hiScoreText,hiScoreSaved){
  let rng = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  let randomBadge = clubNameArray[Math.floor(Math.random() * clubNameArray.length)];
  let wrong1 = clubNameArray[Math.floor(Math.random() * clubNameArray.length)];
  let wrong2 = clubNameArray[Math.floor(Math.random() * clubNameArray.length)];
  let wrong3 = clubNameArray[Math.floor(Math.random() * clubNameArray.length)];

  let badgeAnswer = randomBadge;
  let badgeQuestion = randomBadge;

  if(wrong1 == wrong2 || wrong1 == wrong3){
    wrong1 = globalArrays.removedArray[Math.floor(Math.random() * globalArrays.removedArray.length)];
  }
  if(wrong2 == wrong1 || wrong2 == wrong3){
    wrong2 = globalArrays.removedArray[Math.floor(Math.random() * globalArrays.removedArray.length)];
  }
  if(wrong3 == wrong1 || wrong3 == wrong2){
    wrong3 = globalArrays.removedArray[Math.floor(Math.random() * globalArrays.removedArray.length)];
  }
  if(wrong1 == badgeAnswer){
    wrong1 = globalArrays.removedArray[Math.floor(Math.random() * globalArrays.removedArray.length)];
  }
  if(wrong2 == badgeAnswer){
    wrong2 = globalArrays.removedArray[Math.floor(Math.random() * globalArrays.removedArray.length)];
  }
  if(wrong3 == badgeAnswer){
    wrong3 = globalArrays.removedArray[Math.floor(Math.random() * globalArrays.removedArray.length)];
  }

  if(rng === 1){
    setAnswerAndWrongOptions(badgeAnswer,wrong1,wrong2,wrong3);
  }
  if(rng === 2){
    setAnswerAndWrongOptions(wrong1,badgeAnswer,wrong2,wrong3);
  }
  if(rng === 3){
    setAnswerAndWrongOptions(wrong1,wrong2,badgeAnswer,wrong3);
  }
  if(rng === 4){
    setAnswerAndWrongOptions(wrong1,wrong2,wrong3,badgeAnswer);
  }

  clubBadge.style.display = `block`;
  clubBadge.src = `clubBadgesImages/${badgeArtFolder}/${badgeQuestion}.png`;

  scoreDisplay.style.display = `block`;

  option1.onclick = () => {
    checkForCorrectAnswerAndRemoveAnswer(option1,badgeAnswer,scoreDisplay,totalArrayLength,badgeQuestion,clubNameArray);
  }
  option2.onclick = () => {
    checkForCorrectAnswerAndRemoveAnswer(option2,badgeAnswer,scoreDisplay,totalArrayLength,badgeQuestion,clubNameArray);
  }
  option3.onclick = () => {
    checkForCorrectAnswerAndRemoveAnswer(option3,badgeAnswer,scoreDisplay,totalArrayLength,badgeQuestion,clubNameArray);
  }
  option4.onclick = () => {
    checkForCorrectAnswerAndRemoveAnswer(option4,badgeAnswer,scoreDisplay,totalArrayLength,badgeQuestion,clubNameArray);
  }
  
  if(clubNameArray.length == 0){
    optionBTN.forEach((e) => {
      e.style.display = `none`;
    });
    scoreDisplay.innerHTML = `Total Score: ${score} / ${totalArrayLength}`;
  }

  if(score > hiScore){
    hiScore = score;
    hiScoreDisplay.innerHTML = `${hiScoreText}: ${hiScore} / ${totalArrayLength}`;
    localStorage.setItem(`${hiScoreSaved}`, JSON.stringify(hiScore));
  }
}

function checkForCorrectAnswerAndRemoveAnswer(option,badgeAnswer,scoreDisplay,totalArrayLength,badgeQuestion,clubNameArray){
  if(option.innerHTML == badgeAnswer){
    score++
    scoreDisplay.innerHTML = `${score} / ${totalArrayLength} Correct It Was ${badgeAnswer}`;
    scoreDisplay.style.color = `hsl(120, 100%, 50%)`;
    playCorrectAudio();
  }
  else {
    scoreDisplay.innerHTML = `${score} / ${totalArrayLength} Wrong It Was ${badgeAnswer}`;
    scoreDisplay.style.color = `hsl(0, 100%, 50%)`;
    playWrongAudio();
  }
  globalArrays.removedArray.splice(1, 0, `${badgeQuestion}`);
  let removeFromArray = clubNameArray.indexOf(`${badgeQuestion}`);
  clubNameArray.splice(removeFromArray, 1);
  if(globalArrays.removedArray.includes("Its a team")){
    globalArrays.removedArray.shift();
  }
}

function setAnswerAndWrongOptions(wrongOrAnswer1,wrongOrAnswer2,wrongOrAnswer3,wrongOrAnswer4){
  option1.innerHTML = `${wrongOrAnswer1}`;
  option2.innerHTML = `${wrongOrAnswer2}`;
  option3.innerHTML = `${wrongOrAnswer3}`;
  option4.innerHTML = `${wrongOrAnswer4}`;
}

function playCorrectAudio(){
  correctAudio.play();
}

function playWrongAudio(){
  wrongAudio.play();
}

document.getElementById("homeButton").onclick = () => {location.reload();}