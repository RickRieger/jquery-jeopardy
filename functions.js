// Below function uses an array 0-29 (for the number of squares in the game)
// each iteration a random number (index) is chosen to change the bg color of a div,
// then that number is discarded.  The "setTimeout" window method allows the user to
// call a function after a specified number (in milliseconds).

function randomDivColorChange() {
  for (var i = 0; i < 135; i++) {
    (function (i) {
      const number = random(DIV_index_Numbers_Array);

      setTimeout(function () {
        $(jeopardySquaresArray[number]).css("background-color", "white");

        // delete the value chosen from the array of numbers
        i = DIV_index_Numbers_Array.indexOf(number);
        if (i >= 0) {
          DIV_index_Numbers_Array.splice(i, number);
        }
      }, 20 * i);
    })(i);
  }
}

// Function that returns a random index # from an array passed in.
const random = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

function updateScoreCorrect() {
  // Plays sound when correct answer is given
  $("#right-answer-sound")[0].play();

  // Gets rid of any non-alphanumeric characters (regex or regular expression?)
  dollars = dollars.replace(/[\W_]+/g, "");
  console.log(dollars);
  score = parseInt(score) + parseInt(dollars);
  if (score < 0) {
    $(".score").css("color", "red");
  } else {
    $(".score").css("color", "rgb(223, 223, 0)");
  }

  score = score.toString();
  $("#score-place-holder").text(score);

  //local-browser-storage update!!!
  window.localStorage.setItem("score", score);
}

function updateScoreIncorrect() {
  // Plays sound when wrong answer is given
  $("#wrong-answer-sound")[0].play();
  // Gets rid of any non-alphanumeric characters (regex or regular expression?)
  dollars = dollars.replace(/[\W_]+/g, "");
  console.log(dollars);
  score = parseInt(score) - parseInt(dollars);
  if (score < 0) {
    $(".score").css("color", "red");
    // sound to insult player after wrong answer sound
    $("#wrong-answer-sound").on("ended", () => {
      $("#insult-sound")[0].play();
    });
    $("#insult-sound").on("ended", () => {
      $("#sad-trombone-sound")[0].play();
    });
  } else {
    $(".score").css("color", "rgb(223, 223, 0)");
  }
  console.log(score);
  score = score.toString();
  console.log(score);
  $("#score-place-holder").text(score);
  console.log(score);
  //local browser storage update!!!
  window.localStorage.setItem("score", score);
}

function answerIsCorrect() {
  timedFunctionShrinkDiv();
  timedFunctionCGetRidOfDiv();
  timedFunctionMakeJeopardyBoardAppear();
  timedFunctionRemoveQuestion();
  $("#results").text("You answered correctly. Congratulations!!!");
  updateScoreCorrect();
}

function answerIsNotCorrect() {
  timedFunctionShrinkDiv();
  timedFunctionCGetRidOfDiv();
  timedFunctionMakeJeopardyBoardAppear();
  timedFunctionRemoveQuestion();
  $("#results").text(
    `You answered incorrectly! The correct answer is ${correctAnswer}`
  );
  updateScoreIncorrect();
}

function handleUserAnswer(userAnswer) {
  userAnswer = userAnswer.toString().toLowerCase();
  correctAnswer = correctAnswer.toString().toLowerCase();
  const results = similarity(userAnswer, correctAnswer);
  console.log(results);
  if (results >= 0.5) {
    answerIsCorrect();
  }
  if (results < 0.5) {
    answerIsNotCorrect();
  }
}
