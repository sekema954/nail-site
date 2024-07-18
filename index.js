/***MENU BAR ANIMATION */
document.addEventListener("DOMContentLoaded", function() {
    const menubar = document.querySelector('.menu-bar');
    const dropdown = document.querySelector('.dropdown-menu');
    const dropdownLinks = document.querySelector('.dropdown-links');

    // Function to handle menu bar click and dropdown behavior
    menubar.addEventListener('click', () => {
        menubar.classList.toggle('change');
        dropdown.classList.toggle('toggleDropdown');
        dropdownLinks.classList.toggle('dropdown-links-active');
    });

    // Add click event listener to each dropdown link
    dropdownLinks.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            // Close the dropdown menu
            closeDropdownMenu();
        });
    });

    // Function to close the dropdown menu
    function closeDropdownMenu() {
        menubar.classList.remove('change'); // Remove the menu bar toggle
        dropdown.classList.remove('toggleDropdown'); // Remove the dropdown visibility toggle
        dropdownLinks.classList.remove('dropdown-links-active'); // Remove the active class from dropdown links
    }
});




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

