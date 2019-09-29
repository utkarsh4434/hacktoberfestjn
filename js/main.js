toggleMenu = () => {
    let navLink = document.querySelector('#nav-links');
    navLink.classList.toggle('menu-active');
    document.querySelector('#nav-menu').classList.toggle('menu-active');
    let burguerLines = document.querySelectorAll('.burger-line');
    for( let i = 0; i<burguerLines.length; i++ ){
        burguerLines[i].classList.toggle('menu-fuschia');
    }
}
isClickOutsideNavbar  = (evt) => {
    let outsideClick = true;    
    let burguerLines = document.querySelectorAll('.burger-line');
    let navLink = document.querySelector('#nav-links');
    for(let i=0; i<burguerLines.length;i++){
        if(evt.target == burguerLines[i]){
            outsideClick = false;
        }
    }
    for(let i=0;i<navLink.children.length;i++){
        if(evt.target == navLink.children[i] || evt.target == navLink.children[i].firstChild){
            outsideClick = false;
        }
    }
    if( evt.target == navLink || evt.target == navMenu ){
        outsideClick = false;
    }
    return outsideClick;
}
documentClick = (evt) => {
    let navLink = document.querySelector('#nav-links');
    if( navLink.classList.contains("menu-active") ){
        outsideClick = isClickOutsideNavbar(evt);
        if(outsideClick){
            toggleMenu();
        }
    }
}

let navMenu = document.querySelector('#nav-menu');
navMenu.addEventListener('click', toggleMenu);
document.addEventListener("click", documentClick);