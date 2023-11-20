document.addEventListener("DOMContentLoaded", function () {
  var luzesLigadas = {};

  function toggleLuz(codigoQuadrado) {
      luzesLigadas[codigoQuadrado] = !luzesLigadas[codigoQuadrado];
      var cor = luzesLigadas[codigoQuadrado] ? "#0f0" : "#f00";
      document.getElementById(codigoQuadrado).style.backgroundColor = cor;
      atualizaStatusLuz();
  }

  function atualizaStatusLuz() {
      var luzAcesa = Object.values(luzesLigadas).some(function (value) {
          return value;
      });

      var statusLuzElement = document.getElementById("status-luz");

      if (luzAcesa) {
          statusLuzElement.textContent = "Ligada";
          statusLuzElement.style.backgroundColor = "#0f0";
      } else {
          statusLuzElement.textContent = "Desligada";
          statusLuzElement.style.backgroundColor = "#f00";
      }
  }

  document.querySelectorAll(".quadrado").forEach(function (quadrado) {
      var codigoQuadrado = quadrado.id;
      luzesLigadas[codigoQuadrado] = false;

      quadrado.addEventListener("click", function () {
          toggleLuz(codigoQuadrado);
      });
  });

  document.getElementById("botao-ligar").addEventListener("click", function () {
      Object.keys(luzesLigadas).forEach(function (codigoQuadrado) {
          luzesLigadas[codigoQuadrado] = true;
          document.getElementById(codigoQuadrado).style.backgroundColor = "#0f0";
      });
      atualizaStatusLuz();
  });

  document.getElementById("botao-desligar").addEventListener("click", function () {
      Object.keys(luzesLigadas).forEach(function (codigoQuadrado) {
          luzesLigadas[codigoQuadrado] = false;
          document.getElementById(codigoQuadrado).style.backgroundColor = "#f00";
      });
      atualizaStatusLuz();
  });

  atualizaStatusLuz();
});