function checkAnswers() {
    var correctAnswers = ["a", "b", "c", "a"];
    var userAnswers = [];
  
    var q1Answer = document.querySelector('input[name="q1"]:checked');
    var q2Answer = document.querySelector('input[name="q2"]:checked');
    var q3Answer = document.querySelector('input[name="q3"]:checked');
    var q4Answer = document.querySelector('input[name="q4"]:checked');
  
    if (q1Answer && q2Answer && q3Answer && q4Answer) {
      userAnswers.push(q1Answer.value, q2Answer.value, q3Answer.value, q4Answer.value);
  
      var resultsContainer = document.getElementById("results");
      var score = 0;
  
      for (var i = 0; i < correctAnswers.length; i++) {
        var result = document.createElement("p");
        if (userAnswers[i] === correctAnswers[i]) {
          result.textContent = "問題 " + (i + 1) + ": 正解";
          result.className = "correct";
          score++;
        } else {
          result.textContent = "問題 " + (i + 1) + ": 不正解";
          result.className = "incorrect";
        }
        resultsContainer.appendChild(result);
      }
  
      var finalScore = document.createElement("p");
      finalScore.textContent = "スコア: " + score + "/" + correctAnswers.length;
      resultsContainer.appendChild(finalScore);
    } else {
      alert("すべての問題に回答してください。");
    }
  }
