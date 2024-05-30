//read more function

function leiaMais(){
    var points = document.getElementById("points");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");

    if (points.style.display == "none"){
        points.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais &#62;";
    } else {
        points.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos &#60;";
    }
}

//Mobile or Desktop

function verificarLarguraDaTela() {
    var larguraTela = window.innerWidth;
    var larguraReferencia = 750;

    var postsDiv = document.getElementById("Posts");
    var menuNav = document.getElementById("Menu");

    if (larguraTela < larguraReferencia) {
      document.getElementById("BarraLateral").style.display = "none";

      postsDiv.style.width = "100%";
      postsDiv.style.float = "none";
      postsDiv.style.margin = "0 auto";
      menuNav.style.fontSize = "80%";
    } else {
      document.getElementById("BarraLateral").style.display = "block";

      postsDiv.style.width = "75%";
      postsDiv.style.float = "left";
      postsDiv.style.margin = "0";
      menuNav.style.fontSize = "100%"
    }
  }

  window.onload = verificarLarguraDaTela;
  window.onresize = verificarLarguraDaTela;