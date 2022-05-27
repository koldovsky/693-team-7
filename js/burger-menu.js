(function() {
    const burgerMenuIcon = document.querySelector('.burger-menu');
    const menuBody = document.querySelector('.navigation');
    const menuNavigationWrapper = document.querySelector('.navigation-wrapper');
    const menuSocialIcons = document.querySelector('.navigation-social-icons');

    burgerMenuIcon.addEventListener("click", function(e) {
        document.body.classList.toggle("lock");
        burgerMenuIcon.classList.toggle("visible");
        menuBody.classList.toggle("visible");
        menuNavigationWrapper.classList.toggle("visible");
        menuSocialIcons.classList.toggle("visible");
    });

    
})()