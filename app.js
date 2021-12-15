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
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add("reveal_y_visible")
                observer.unobserve(entry.target)
            }
            if (entry.target.classList.contains("categorie_count")) {
                console.log("Count observer")
                let value = entry.target.textContent
                let i = 0
                if (value.includes("K")) {
                    valueConvert = parseInt(value.slice(0, value.length - 1))
                    console.log(valueConvert)
                    let interval = window.setInterval(function() {

                        entry.target.innerText = i + "K"
                        i++
                        if (entry.target.textContent == valueConvert + "K") {
                            clearInterval(interval)
                        }
                    }, 100)

                } else {
                    let interval = window.setInterval(function() {
                        entry.target.innerText = i
                        i++
                        if (entry.target.textContent == value) {
                            clearInterval(interval)
                        }
                    }, 50)
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