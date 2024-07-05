/***MENU BAR ANIMATION */
menubarClicked();
function menubarClicked(){
    const menubar = document.querySelector('.menu-bar');
    const dropdown = document.querySelector('.dropdown-menu');
    menubar.addEventListener('click', ()=>{
        menubar.classList.toggle('change');
        dropdown.classList.toggle('toggleDropdown');

    })
};
