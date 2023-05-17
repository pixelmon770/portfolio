let iconMenu = document.querySelector("#menu-icons");
let navbar = document.querySelector("nav");

iconMenu.onclick = () =>{
    iconMenu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}