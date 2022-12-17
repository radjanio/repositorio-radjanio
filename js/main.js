function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src =  "imagens/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src =  "imagens/menu-close.png";  
    }
}
