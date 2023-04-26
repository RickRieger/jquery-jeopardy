// counter before game starts
console.log("============>", greyedOutSquares, intro, soundOn);
if (soundOn && !greyedOutSquares && !intro) {
  console.log("counter here");
  let seconds = 28;
  let el = document.getElementById("seconds-counter");

  function decrementSeconds() {
    seconds -= 1;
    el.innerText = "Your game will start in " + seconds + " seconds.";
    if (seconds === 0) {
      clearInterval(myInterval);
      el.innerText = "Enjoy your game!";
      setTimeout(() => {
        $("#seconds-counter").css({ visibility: "hidden" });
        $("#overlay").remove();
      }, 1000);
    }
  }
  const myInterval = setInterval(decrementSeconds, 1000);
} else {
  $("#overlay").remove();
}
