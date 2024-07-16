let url = "https://api-operaciones.onrender.com";

document.getElementById("suma").addEventListener("click", () => {
    n1 = document.getElementById("numero1").value;
    n2 = document.getElementById("numero2").value;
    url = `https://api-operaciones.onrender.com/api/suma?num1=${n1}&num2=${n2}`;
    consumirAPI(url);
});

document.getElementById("resta").addEventListener("click", () => {
  n1 = document.getElementById("numero1").value;
  n2 = document.getElementById("numero2").value;
  url = `https://api-operaciones.onrender.com/api/resta?num1=${n1}&num2=${n2}`;
  consumirAPI(url);
});

document.getElementById("multi").addEventListener("click", () => {
  n1 = document.getElementById("numero1").value;
  n2 = document.getElementById("numero2").value;
  url = `https://api-operaciones.onrender.com/api/multiplicacion?num1=${n1}&num2=${n2}`;
  consumirAPI(url);
});

document.getElementById("div").addEventListener("click", () => {
  n1 = document.getElementById("numero1").value;
  n2 = document.getElementById("numero2").value;
  url = `https://api-operaciones.onrender.com/api/division?num1=${n1}&num2=${n2}`;
  consumirAPI(url);
});

document.getElementById("pow").addEventListener("click", () => {
  n1 = document.getElementById("numero1").value;
  n2 = document.getElementById("numero2").value;
  url = `https://api-operaciones.onrender.com/api/potencia?num1=${n1}&num2=${n2}`;
  consumirAPI(url);
});

function consumirAPI(url) {
  // Mostrar mensaje de espera
  document.getElementById("resultado").innerText = "Calculando...";

  // Realizar la solicitud GET a la API utilizando fetch
  fetch(url)
    .then((response) => {
      // Convertir la respuesta a formato JSON
      return response.json().then(data => {
        if (!response.ok) {
          // Si la respuesta no es exitosa, lanzar un error con el mensaje de error específico
          throw new Error(data.error || 'Ocurrió un error al obtener los datos');
        }
        return data;
      });
    })
    .then((data) => {
      // Trabajar con los datos obtenidos de la API
      document.getElementById("resultado").innerText = "Resultado: " + data.resultado;
    })
    .catch((error) => {
      // Capturar errores de red o de la API y mostrar el mensaje de error específico
      console.error("Error en la solicitud:", error);
      document.getElementById("resultado").innerText = error.message;
    });
}

function mostrarOp(op) {
  const letraHover = document.getElementById('op');
  letraHover.textContent = op; // Establecer la letra

  // Opcional: Ajustar estilos para centrar la letra
  letraHover.style.display = 'inline-block';
  letraHover.style.position = 'absolute';
  letraHover.style.left = '50%';
  letraHover.style.transform = 'translateX(-50%)';
}

// Opcional: Restaurar el contenido al quitar el hover del botón
function limpiarOp() {
  const letraHover = document.getElementById('op');
  letraHover.textContent = '?'; // Limpiar el contenido de la letra
}

function cambiarOperador() {
  const botones = document.querySelectorAll('.caja-button button');

  // Iterar sobre cada botón y agregar un event listener para el evento 'mouseover'
  botones.forEach(boton => {
    boton.addEventListener('mouseout', limpiarOp);
  });
}

document.getElementById("suma").addEventListener('mouseover', () => {
  document.getElementById("op").innerText = "+";
});
document.getElementById("resta").addEventListener('mouseover', () => {
  document.getElementById("op").innerText = "-";
});
document.getElementById("multi").addEventListener('mouseover', () => {
  document.getElementById("op").innerText = "x";
});
document.getElementById("div").addEventListener('mouseover', () => {
  document.getElementById("op").innerText = "/";
});
document.getElementById("pow").addEventListener('mouseover', () => {
  document.getElementById("op").innerText = "^";
});

document.addEventListener('DOMContentLoaded', cambiarOperador);