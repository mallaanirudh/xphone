const phoneImage = document.getElementById('phoneImage');

document.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth) - 0.5;
    const y = (event.clientY / window.innerHeight) - 0.5;

    const tiltY = x * 100; // Adjusted for subtle effect
    const tiltX = -y * 100; // Adjusted for subtle effect

    phoneImage.style.transform = `rotateY(${tiltY}deg) rotateX(${tiltX}deg)`;
});
