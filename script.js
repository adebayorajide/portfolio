const topBtnEl = document.querySelector(".top-btn");
const x = window.matchMedia("(max-width:600px)");
const aboutTextEl = document.getElementById("para-abt");

topBtnEl.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})

window.addEventListener("load", ()=>{
    if(x.matches) {
        aboutTextEl.innerHTML = `<p> My name is Ajide Tosin Adebayo. I'm a graduate of Computer Science from the University of Ilorin, I'm a Front End Developer based in Lagos, Nigeria, and
        I'm very passionate and dedicated to my work. With 1+ year experience as a 
        Front End Developer, I have acquired the skills to build great and premium 
        user interface that aid good user experience.</p>`
    }
})
