
// JavaScript to toggle the dropdown menu
document.addEventListener("DOMContentLoaded", function () {
    const open = document.getElementById("menu-open");
    const close = document.getElementById("menu-close");

    open.addEventListener("click", function () {
        	document.getElementById("menu-box").classList.add('active');
    });

    close.addEventListener("click", function () {
                document.getElementById("menu-box").classList.remove('active');   
    });
});


