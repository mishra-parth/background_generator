color1 = document.getElementsByClassName("color1")[0];
color2 = document.getElementsByClassName("color2")[0];
body = document.getElementById("bodyy")
clip_board = document.getElementsByClassName("clipboard")[0]
css_property = document.getElementsByClassName("css_property")[0]

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
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

color1.addEventListener("input", linear)
color2.addEventListener("input", linear)
clip_board.addEventListener("click", copyToClipboard)