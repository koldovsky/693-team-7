(function() {
    const burgerMenuIcon = document.querySelector('.burger-menu');
    const menuBody = document.querySelector('.navigation');
    const menuBurgerWrapper = document.querySelector('.burger-wrapper');

    burgerMenuIcon.addEventListener("click", function(e) {
        document.body.classList.toggle("lock");
        burgerMenuIcon.classList.toggle("visible");
        menuBody.classList.toggle("visible");
        menuBurgerWrapper.classList.toggle("visible");
    });

    
})()