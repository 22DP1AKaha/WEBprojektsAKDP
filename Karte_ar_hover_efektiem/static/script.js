var modals = document.querySelectorAll(".modal");
var btns = document.querySelectorAll(".myBtn");
var spans = document.querySelectorAll(".close");

btns.forEach(function (btn, index) {
    btn.onclick = function () {
        modals[index].style.display = "block";
        document.body.classList.add("modal-open");
    };
});

spans.forEach(function (span, index) {
    span.onclick = function () {
        modals[index].style.display = "none";
        document.body.classList.remove("modal-open");
    };
});

modals.forEach(function (modal, index) {
    modal.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    };
});

document.addEventListener('keydown', function (event){
    if(event.key == 'Escape'){
        modals.forEach(function (modal){
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        })
    }
})



const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active"); 
});

