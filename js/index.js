const menu_bar = document.querySelector('.fa-bars');
const navbar = document.querySelectorAll('.navbar')
const menu_close = document.querySelector('.fa-square-xmark');

menu_bar.addEventListener('click', () =>{
    // console.log("hi")
    navbar.forEach(elem => elem.classList.add('active') );
})

menu_close.addEventListener('click', () => {
    navbar.forEach(elem => elem.classList.remove('active'))
})