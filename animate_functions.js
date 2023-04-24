// Jeopardy board disappear (opacity:0 & display:none;)
function timedFunctionMakeJeopardyBoardDisappear() {
  setTimeout(function () {
    $("#app").addClass("display");
  }, 300);
}
function timedFunctionMakeJeopardyBoardAppear() {
  setTimeout(function () {
    $("#app").removeClass("display");
  }, 600);
  $("#app").removeClass("opacity");
}

// Div to hold question and input field
function timedFunctionCreateDivToHoldQuestion() {
  setTimeout(function () {
    const newItem = $(
      '<div class="expand"><span class = "questionPlace"></span><input id="answer-question" placeholder="Your answer here..." type="text"><button id ="submit-button">submit</button></div>'
    );
    $("body").append(newItem);
    $("#answer-question").on("keyup", (e) => {
      console.log(e);
      if (e.key === "Enter") {
        $("#submit-button").click();
      }
    });
  }, 390);
}
function timedFunctionCGetRidOfDiv() {
  setTimeout(function () {
    $(".expand").remove();
  }, 500);
}

// Expands above div to 100vw &100vh, then back again
function timedFunctionExpandDiv() {
  setTimeout(function () {
    $(".expand").addClass("expandNow");
  }, 400);
}

function timedFunctionShrinkDiv() {
  setTimeout(function () {
    $(".expand").removeClass("expandNow");
  }, 100);
}

// Places question in above div
function timedFunctionPlaceQuestion(newItem) {
  setTimeout(function () {
    const questionField = $(".questionPlace");
    questionField.append(newItem);
  }, 600);
}

function timedFunctionRemoveQuestion(newItem) {
  setTimeout(function () {
    $("h3").remove();
    $(".questionPlace").remove();
    $("#answer-question").remove();
    $("#submit-button").remove();
  }, 50);
}

// Adds eventListener to submit button and grab the user input
function AddEventListenerAndGrabUserInput() {
  setTimeout(function () {
    $("#submit-button").click(function () {
      userAnswer = $("#answer-question").val();
      handleUserAnswer(userAnswer);
    });
  }, 1000);
}
