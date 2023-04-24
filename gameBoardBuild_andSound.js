// sounds for the game and a call to the randomDivColorChange() function
let intro = JSON.parse(window.localStorage.getItem("introPlayed"));

if (!greyedOutSquares && !intro && soundOn) {
  $("#theme-song")[0].play();
  $("#theme-song").on("ended", () => {
    $("#board-full-sound")[0].play();
    randomDivColorChange();
  });
  $("#board-full-sound").on("ended", () => {
    $(".jeopardy-children").attr({ style: "" });
    window.localStorage.setItem("introPlayed", true);
  });
} else {
  $(".jeopardy-children").attr({ style: "" });
}

// Build the category row in the jeopardy board
for (i = 0; i < 6; i++) {
  const jeopardyChild = $(
    `<div id = "jeopardy-child-${i}" class = "jeopardy-children-top-row">${ISOLATED_QUESTIONS[i].category}</div>`
  );
  jeopardyContainer.append(jeopardyChild);
}

// Build the other rows according to dollar value in the game data.
for (num = 0; num < 25; num = num + 6) {
  iterationNumForDivIds = iterationNumForDivIds + 1;

  for (i = 0; i < 6; i++) {
    let category = ISOLATED_QUESTIONS[i].category;
    category = category.replace(/[\W_]+/g, "");
    const jeopardyChild =
      $(`<div id = "${category}${iterationNumForDivIds}${i}" 
        class = "jeopardy-children clickable">${ISOLATED_QUESTIONS[num].value}</div>`);
    jeopardyContainer.append(jeopardyChild);
  }
}

const userName = window.localStorage.getItem("userName");

$("#welcome-message").text(`Welcome ${userName}!`);

$("#clear-all").css("display", "block");
