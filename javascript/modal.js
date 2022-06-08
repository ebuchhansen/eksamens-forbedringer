let openModalButtons = document.querySelectorAll("[data-modal-target]")
let closeModalButtons = document.querySelectorAll("[data-close-button]")
let overlay = document.getElementById("overlay")


openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal")
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add("active")
    overlay.classList.add("active")
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove("active")
    overlay.classList.remove("active")
}

/*hover tekst i menu*/

let colors = ["#4E3B66","#DCBCFD", "#F07068", "#8C1E18"];

function changeColor(element, color) {
  element.style.backgroundColor = color;
}
