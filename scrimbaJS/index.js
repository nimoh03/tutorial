window.addEventListener('DOMContentLoaded', setup); 

function setup() {
    const options = {
        rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        })
    }, options);

    const card = document.querySelectorAll('.card');

    card.forEach(p => observer.observe(p));
}

const offcanvas = document.getElementById("offcanvas")

const openBtn = document.getElementById("btn")

const btnClose = document.getElementById("btn-close")

openBtn.addEventListener("click",function (){
    offcanvas.style.width = "50%"   
    offcanvas.style.visibility = "visible"
})

btnClose.addEventListener("click",function () {
    offcanvas.style.width = "0"
    offcanvas.style.visibility = "hidden"
})

