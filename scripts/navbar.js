const menuBtn = document.querySelector('#menu-btn');
const menuText = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');
const remainder = document.querySelector('.remainder');
const navLink = document.querySelector('nav ul');
let open = false;

menuBtn.addEventListener('mouseover', () => {
    menuText.style.background = '#363644';
    menuText.style.fontWeight = '700';
    menuIcon.style.background = "url('../assets/images/menu-icon-focus.png') no-repeat center center";
    menuIcon.style.backgroundSize = 'contain';
});
menuBtn.addEventListener('mouseout', () => {
    if(!open){
        menuText.style.background = '#43424c';
        menuText.style.fontWeight = '400';
        menuIcon.style.background = "url('../assets/images/menu-icon.png') no-repeat center center";
        menuIcon.style.backgroundSize = 'contain';
    }
});



const openMenu = () => {
    if(open){
        nav.style.right = '-100vw';
        remainder.style.opacity = '0';
        setTimeout(() => {remainder.classList.add('d-none');}, 100)
        open = false;
        menuText.style.background = '#43424c';
        menuText.style.fontWeight = '400';
        menuIcon.style.background = "url('../assets/images/menu-icon.png') no-repeat center center";
        menuIcon.style.backgroundSize = 'contain';
    } else {
        nav.style.right = 0;
        open = true;
        menuIcon.style.background = "url('../assets/images/menu-close.png') no-repeat center center";
        menuIcon.style.backgroundSize = 'contain';
        if(window.innerWidth > 767){
            remainder.classList.remove('d-none');
            setTimeout(() => {remainder.style.opacity = 0.3;}, 500)
            
        }
    }
};



menuBtn.addEventListener('click', () => {
    openMenu();
});
remainder.addEventListener('click', () => {
    openMenu();
});
navLink.addEventListener('click', () => {
    openMenu();
});


