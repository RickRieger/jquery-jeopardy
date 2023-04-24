let showNum = window.localStorage.getItem("show-num");
if (showNum) {
  window.open("https://rickrieger.github.io/jquery-jeopardy/jeopardy.html");
}

$("form").on("keyup click", () => {
  let name = $("input:text").val();
  let sound = $("form input[type='radio']:checked").val();
  if (name.length > 0) {
    $("#errorMessageName").text("");
  } else {
    $("#errorMessageName").text(" Please enter a user name");
  }
  if (sound) {
    $("#errorMessageSoundOption").text("");
  }
  if (name.length > 25) {
    $("#errorMessageName").text("User name too long");
    $("form input[type='submit']").prop("disabled", true);
  }
  if (name.length > 0 && name.length < 26 && sound) {
    $("form input[type='submit']").removeAttr("disabled");
  }
});

$("form").submit(function () {
  let name = $("input:text").val();
  let sound = $("form input[type='radio']:checked").val();
  window.localStorage.setItem("userName", name);
  window.localStorage.setItem("sound", sound);
});
