$("form").on("keyup click", () => {
  let name = $("input:text").val();
  let sound = $("form input[type='radio']:checked").val();
  if (name.length > 0) {
    $("#errorMessageName").text("");
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
