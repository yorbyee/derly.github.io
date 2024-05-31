function showMessage() {
    const name = document.getElementById('nameInput').value;
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `¡Feliz Cumpleaños, ${name}!`;

    const balloonsContainer = document.getElementById('balloonsContainer');
    balloonsContainer.innerHTML = ''; // Clear previous balloons

    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.animationDuration = `${Math.random() * 2 + 3}s`;
        balloonsContainer.appendChild(balloon);
    }
}

function getRandomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
}
