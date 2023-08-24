let scoreButton = document.getElementById("view-highscores")
function returnScores() {
    var highscores = JSON.parse(window.localStorage.getItem("scores")) || [];
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
    highscores.forEach(function(score) {
      var scoresheet = document.createElement("li");
      scoresheet.textContent = score.name + " - " + score.score;
      var olEl = document.getElementById("highscores");
      olEl.appendChild(scoresheet);
    });
}
returnScores();