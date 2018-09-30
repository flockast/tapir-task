window.onload = () => {

    let current = 1;
    let widthSlider = document.getElementsByClassName("slider__track-outer")[0].offsetWidth

    const trackEl = document.getElementsByClassName("slider__track")[0]
    const items = document.getElementsByClassName("slider__item")
    const currentNum = document.getElementsByClassName("pagenation__current")[0]
    const prevEl = document.getElementsByClassName("pagenation__prev")[0]
    const nextEl = document.getElementsByClassName("pagenation__next")[0]

    window.onresize = event => {
        widthSlider = document.getElementsByClassName("slider__track-outer")[0].offsetWidth
        trackEl.style.transform = `translate3d(-${(current - 1) * widthSlider}px, 0, 0)`
        setSizes()
    }

    function setSizes() {
        trackEl.style.width = `${widthSlider * items.length}px`
        for (let i = 0; i < items.length; i++)
            items[i].style.width = `${widthSlider}px`
    }

    function initial() {
        document.getElementsByClassName("pagenation__all")[0].innerHTML = items.length;
        currentNum.innerHTML = current;
        setSizes()
    }

    nextEl.onclick = event => {
        if (current < items.length) current++
        slideTo(current)
    }

    prevEl.onclick = event => {
        if (current > 1) current--
        slideTo(current)
    }

    function slideTo(current) {
        trackEl.style.transform = `translate3d(-${(current - 1) * widthSlider}px, 0, 0)`
        currentNum.innerHTML = current
    }

    initial()
}