let iconMenu = document.querySelector("#menu-icons");
let navbar = document.querySelector("nav");
let section = document.querySelectorAll("section")
let header = document.querySelector("header");
let navLink = document.querySelectorAll("header nav a") 
iconMenu.onclick = () =>{
    iconMenu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
window.onload = ()=>{
    header.classList.toggle('slideUp')
    document.querySelector("body").classList.toggle("fade-out");
    document.querySelector('.homeContent').classList.add("slideRight")
}

window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - (screen.height/2);
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if(id !== "home"){
            if(top >= offset && top < offset + height){
                console.log(id)
                document.querySelector('section#'+id).classList.add("slideUp")
                if(id == "skills"){
                    let x =document.querySelectorAll(".bar>span");
                    x.forEach(el=>{
                        el.classList.add("animBar")
                    })
                }
            }
        }

    })
}
