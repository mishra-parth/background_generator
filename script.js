color1 = document.getElementsByClassName("color1")[0];
color2 = document.getElementsByClassName("color2")[0];
body = document.getElementById("bodyy")
clip_board = document.getElementsByClassName("clipboard")[0]
css_property = document.getElementsByClassName("css_property")[0]
reset = document.getElementsByClassName("reset")[0]

function linear() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  if (color1.value == "#000000" && color2.value == "#000000") {
    body.style.color = "white"
  }
  if (color1.value != "#00000" && color2.value != "#000000") {
    body.style.color = "black"

  css_property.textContent = "background-image : "+body.style.background + ";"
  }
};

function copyToClipboard() {
  const str = document.getElementById('myInput').innerText;
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function reseter(){
    body.style.background = "white";
    css_property.textContent = "background-color : "+body.style.background + ";"
    color1.value = "#ffffff"
    color2.value = "#ffffff"
}

color1.addEventListener("input", linear)
color2.addEventListener("input", linear)
clip_board.addEventListener("click", copyToClipboard)
reset.addEventListener("click", reseter)









