const button = document.getElementById('loveBtn');
const message = document.getElementById('message');
const body = document.body;

// Lista de cores fofas para os corações
const heartColors = ['#ff3366','#ff6699','#ff99cc','#ffccff','#ff6666','#ff99aa'];

// Função criar coração
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '❤️';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.color = heartColors[Math.floor(Math.random()*heartColors.length)];
  heart.style.fontSize = (20 + Math.random()*20) + 'px';
  heart.style.animationDuration = (2 + Math.random()*2) + 's';
  body.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}

// Ao clicar no botão
button.addEventListener('click', () => {
  // Mostrar frase com fade in
  message.style.opacity = 1;

  // Criar vários corações
  for(let i=0; i<30; i++) {
    setTimeout(createHeart, i * 100);
  }
});

