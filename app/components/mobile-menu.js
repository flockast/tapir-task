const toggleMenuElement = document.getElementsByClassName("menu-mobile__toggle")[0]
const menuMobileElement = document.getElementsByClassName("menu-mobile")[0]

toggleMenuElement.onclick = event => {
    event.preventDefault()
    menuMobileElement.classList.toggle("opened")
}