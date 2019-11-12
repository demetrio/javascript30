const pressed = [];
const secretCode = "demetrio";

window.addEventListener("keyup", e => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log("Info: Cornify also checks the Konami Code!!");
    cornify_add();
  }
  console.log(pressed);
});
