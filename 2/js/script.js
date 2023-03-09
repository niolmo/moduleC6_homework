const btn = document.getElementById('but');
const screeWidth = window.screen.width;
const screenHeight = window.screen.height;

btn.addEventListener('click', (e) =>{   
    alert(`Ширина: ${screeWidth}. Высота: ${screenHeight}.`);
});
