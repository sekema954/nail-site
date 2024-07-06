/***MENU BAR ANIMATION */
menubarClicked();
function menubarClicked(){
    const menubar = document.querySelector('.menu-bar');
    const dropdown = document.querySelector('.dropdown-menu');
    const dropdownLinks = document.querySelector('.dropdown-links');
    menubar.addEventListener('click', ()=>{
        menubar.classList.toggle('change');
        dropdown.classList.toggle('toggleDropdown');
        dropdownLinks.classList.toggle('dropdown-links-active');

    })
};



/****NAVBAR FIXED  */

navFixed();
function navFixed(){
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 100) {
            navbar.classList.add('navbar-fixed-position');
        } else {
            navbar.classList.remove('navbar-fixed-position');
        }
    })
}