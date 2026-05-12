const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('prev-button')
const btnNext = document.getElementById('next-button')

let currentSlide = 0;

function esconderSlide() {
    slider.forEach(item => item.classList.remove('on'))
}

function mostrarSlide() {
    slider[currentSlide].classList.add('on')
}

function avancarSlide() {
    esconderSlide()
    if (currentSlide == slider.length - 1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    mostrarSlide()
}

function voltarSlide() {
    esconderSlide()
    if (currentSlide == 0) {
        currentSlide = slider.length - 1
    } else {
        currentSlide--
    }
    mostrarSlide()
}

btnNext.addEventListener('click', avancarSlide)
btnPrev.addEventListener('click', voltarSlide)

const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion => {

    accordion.addEventListener('click', () => {

        accordion.classList.toggle('active')

    })

})