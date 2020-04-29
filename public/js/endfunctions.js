const quiztitle = document.getElementById("quiztitle");
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const functionResults = JSON.parse(localStorage.getItem("functionResults")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
  saveScoreBtn.disabled = !quiztitle.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value, 
 
  };
  functionResults.push(score);
  functionResults.sort((a, b) => b.score - a.score);
  functionResults.splice(5);

  localStorage.setItem("functionResults", JSON.stringify(functionResults));
  window.location.assign("/resultsfunctions.html");
};