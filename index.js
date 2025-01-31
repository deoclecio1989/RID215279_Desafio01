const image = document.querySelector('.zoom-image');

image.addEventListener('mousemove', function(event) {
    const { offsetWidth: width, offsetHeight: height } = image;
    const { offsetX: x, offsetY: y } = event;

    const xPos = (x / width) * 100;
    const yPos = (y / height) * 100;

    image.style.transformOrigin = `${xPos}% ${yPos}%`;
});

image.addEventListener('mouseleave', function() {
    image.style.transformOrigin = 'center center'; // Resetando para o centro ao sair do mouse
});



// Elemento onde o número será exibido
const counterElement = document.getElementById('counter1');

// Definindo os valores inicial e final
let currentNumber = 100;
const targetNumber = 850;
const increment = 50; // Aumento a cada intervalo
const speed = 50; // Intervalo em milissegundos (quanto menor, mais rápido)

const interval = setInterval(() => {
    // Atualiza o número mostrado
    counterElement.textContent = currentNumber;

    // Se o número atual for menor que o número final, aumenta
    if (currentNumber < targetNumber) {
        currentNumber += increment;
    } else {
        // Para o contador quando o número final for alcançado
        clearInterval(interval);
    }
}, speed);
