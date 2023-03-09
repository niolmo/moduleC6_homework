const btn = document.getElementById('but');
const ligth = document.getElementById('img')
const darck = document.getElementById('imgDarck')


btn.addEventListener('click', (e) => {
    btn.classList.toggle('active')

    if(btn.classList.contains('active')) {
        ligth.style.display = 'none'
        darck.style.display= 'block'
    }else {
        ligth.style.display = 'block'
        darck.style.display= 'none'
    }

})