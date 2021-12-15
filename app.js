// class Rectangle {
//     constructor(element) {

//     }
// }
let btnFigure = document.querySelector(".btn_figure")
let iconFleche = document.querySelector(".arrow_right")
let categoryCount = document.querySelector(".categorie_count")


btnFigure.addEventListener("mouseenter", (e) => {
    iconFleche.style.marginLeft = "30px"
    iconFleche.style.fontSize = "27px"
})

btnFigure.addEventListener("mouseleave", (e) => {
    iconFleche.style.marginLeft = "10px"
})

ratio = .3
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

window.addEventListener("DOMContentLoaded", (event) => {
    const handleIntersect = function(entries, observer) {
        entries.forEach(function(entry) {
            // verify d'abord si il s'agit d'un element de statistic
            if (entry.target.classList.contains("categorie_count")) {
                // verifier le ratio pour etre sur que l'element bien visible a l'ecran
                let value = entry.target.textContent
                if (entry.intersectionRatio > ratio) {
                    console.log("Count observer")
                        // recuperer la valeur de la statistique
                    let i = 0
                        // verifier si cette valeur possede K
                    if (value.includes("K")) {
                        valueConvert = parseInt(value.slice(0, value.length - 1))
                            // creer une intervalle qui permettra d'incrementer la valeur 
                        let interval = window.setInterval(function() {
                            entry.target.innerText = i + "K"
                            i++
                            if (entry.target.textContent == valueConvert + "K") {
                                clearInterval(interval)
                            }
                        }, 100)

                    } else { // A faire lorsque la stat ne possede pas K
                        let interval = window.setInterval(function() {
                            entry.target.innerText = i
                            i++
                            if (entry.target.textContent == value) {
                                clearInterval(interval)
                            }
                        }, 50)
                    }
                    observer.unobserve(entry.target)
                }
                // Gerer l'observation des autres elements
            } else {
                if (entry.intersectionRatio > ratio) {
                    entry.target.classList.add("reveal_y_visible")
                    observer.unobserve(entry.target)
                }
            }
        })
    }

    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('[class*="reveal_y_"]').forEach(function(r) {
        observer.observe(r)
    })
    document.querySelectorAll(".reveal_x_left").forEach(function(r) {
        observer.observe(r)
    })
    document.querySelectorAll(".reveal_x_rigth").forEach(function(r) {
        observer.observe(r)
    })
    document.querySelectorAll(".categorie_count").forEach(function(r) {
        observer.observe(r)
    })
});

// Retire l'animation sur les card lorsqu'on est sur mobile 


// Boutton de scroll vers le haut
var btnScrollUp = document.querySelector(".btn_to_scroll");
btnScrollUp.addEventListener("click", topFunction)

window.onscroll = function() { scrollFunction() };

let lastPosition = 0
let newPosition = 0
window.addEventListener("scroll", function(e) {
    newPosition = window.scrollY
    if (newPosition > lastPosition) {
        btnScrollUp.style.transform = "translateY(0px)";
    } else {
        btnScrollUp.style.transform = "translateY(300px)";
    }

    lastPosition = newPosition
})

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollUp.style.transform = "translateY(0px)";
    } else {
        btnScrollUp.style.transform = "translateY(300px)";
    }
}

// Sroll a  l'entete du document lorsque l'utilisateur clique sur le boutton 
function topFunction() {
    document.body.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}