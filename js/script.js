document.getElementById("startButton").addEventListener("click", function () {
  document.getElementById("menuSection").scrollIntoView({ behavior: "smooth" });
});

const menuSection = document.querySelector('#menuSection');
const cursors = document.querySelectorAll('.cursor');

// Función para generar posiciones aleatorias
function moveCursor(cursor) {
  const menuRect = menuSection.getBoundingClientRect();
  const maxX = menuRect.width - cursor.offsetWidth;
  const maxY = menuRect.height - cursor.offsetHeight;

  // Calculamos posiciones aleatorias
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  // Aplicamos el movimiento
  cursor.style.transform = `translate(${x}px, ${y}px)`;
}

// Posicionar cursores en zonas aleatorias al cargar la página
cursors.forEach(cursor => {
  moveCursor(cursor); // Posición inicial aleatoria

  // Generamos un intervalo aleatorio entre 1 y 3 segundos para moverlos
  const randomInterval = Math.random() * 5000 + 3000;
  setInterval(() => moveCursor(cursor), randomInterval);
});



document.addEventListener("DOMContentLoaded", function () {
  const words = document.querySelectorAll(".word");
  const container = document.querySelector(".word-container");
  let index = 0;

  function updateContainerWidth(word) {
      requestAnimationFrame(() => {
          container.style.width = `${word.offsetWidth}px`;
      });
  }

  function changeWord() {
      const currentWord = words[index];
      currentWord.classList.remove("active");

      index = (index + 1) % words.length;
      const nextWord = words[index];

      nextWord.classList.add("active");

      // Ajustar el ancho del contenedor
      updateContainerWidth(nextWord);
  }

  // Setear el ancho inicial
  updateContainerWidth(words[0]);

  setInterval(changeWord, 2000); // Cambia cada 2 segundos
});




