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

let documentClick = (evt) => {
    let navLink = document.querySelector('#nav-links');
    if( navLink.classList.contains("menu-active") ){
        let burguerLines = document.querySelectorAll('.burger-line');
        let outside = true;

        for(let i=0; i<burguerLines.length;i++){
            if(evt.target == burguerLines[i]){
                outside = false;
            }
        }
        for(let i=0;i<navLink.children.length;i++){
            if(evt.target == navLink.children[i] || evt.target == navLink.children[i].firstChild){
                outside = false;
            }
        }

        if( evt.target == navLink || evt.target == navMenu ){
            outside = false;
        }

        if(outside){
            navLink.classList.toggle('menu-active');
            document.querySelector('#nav-menu').classList.toggle('menu-active');
            for( let i = 0; i<burguerLines.length; i++ ){
                burguerLines[i].classList.toggle('menu-fuschia');
            }
        }
        
    }
}

document.addEventListener("click", documentClick);