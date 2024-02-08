function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const sociallinks = document.getElementById("social-links")
  sociallinks.classList.toggle("light")

    // pegar a tag img
  const img = document.querySelector("#profile img")
    // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/ft2.png");
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/ft1.png")
  }
}
