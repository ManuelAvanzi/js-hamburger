// apertura menù hamburger da mobile

const hamburgerBtn = document.querySelector('.fa-bars');
const MenuHamburger = document.querySelector('.hamburger-menu');


const close = document.querySelector('.close');

// al click aggiungo la classe active
hamburgerBtn.addEventListener('click',function(){
    MenuHamburger.classList.add('active');
});

// rimuovo la classe active
close.addEventListener('click',function(){
    MenuHamburger.classList.remove('active');
});
