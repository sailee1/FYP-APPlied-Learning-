const quiztitle = document.getElementById("quiztitle");
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const arrayResults = JSON.parse(localStorage.getItem("arrayResults")) || [];

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
  arrayResults.push(score);
  arrayResults.sort((a, b) => b.score - a.score);
  arrayResults.splice(5);

  localStorage.setItem("arrayResults", JSON.stringify(arrayResults));
  window.location.assign("/resultsarrays");
};