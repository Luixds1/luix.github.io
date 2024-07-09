const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Variáveis do jogo
let pacMan = {
    x: 50,
    y: 50,
    radius: 15,
    speed: 5,
    dx: 0,
    dy: 0
};

let bolinhas = [
    { x: 100, y: 100, radius: 5 },
    { x: 200, y: 200, radius: 5 },
    { x: 300, y: 300, radius: 5 }
];

// Função para desenhar o Pac-Man
function drawPacMan() {
    ctx.beginPath();
    ctx.arc(pacMan.x, pacMan.y, pacMan.radius, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(pacMan.x, pacMan.y);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();
}

// Função para desenhar as bolinhas
function drawBolinhas() {
    bolinhas.forEach(bolinha => {
        ctx.beginPath();
        ctx.arc(bolinha.x, bolinha.y, bolinha.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    });
}

// Função principal do jogo
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPacMan();
    drawBolinhas();

    pacMan.x += pacMan.dx;
    pacMan.y += pacMan.dy;

    requestAnimationFrame(gameLoop);
}

// Controle do Pac-Man
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        pacMan.dy = -pacMan.speed;
        pacMan.dx = 0;
    } else if (event.key === 'ArrowDown') {
        pacMan.dy = pacMan.speed;
        pacMan.dx = 0;
    } else if (event.key === 'ArrowLeft') {
        pacMan.dx = -pacMan.speed;
        pacMan.dy = 0;
    } else if (event.key === 'ArrowRight') {
        pacMan.dx = pacMan.speed;
        pacMan.dy = 0;
    }
});

gameLoop();
