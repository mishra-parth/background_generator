color1 = document.getElementsByClassName("color1")[0];
color2 = document.getElementsByClassName("color2")[0];
body = document.getElementById("bodyy")
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

color1.addEventListener("input", linear)
color2.addEventListener("input", linear)