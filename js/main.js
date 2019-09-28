let toggleMenu = () => {
    let navLink = document.querySelector('#nav-links');
    navLink.classList.toggle('menu-active');
    document.querySelector('#nav-menu').classList.toggle('menu-active');
    let burguerLines = document.querySelectorAll('.burger-line');
    for( let i = 0; i<burguerLines.length; i++ ){
        burguerLines[i].classList.toggle('menu-fuschia');
    }
}



let navMenu = document.querySelector('#nav-menu');
navMenu.addEventListener('click', toggleMenu);