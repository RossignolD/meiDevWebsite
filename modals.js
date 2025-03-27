// Get the modal
const buttons = document.getElementsByClassName("details-button");

const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalBackground= document.getElementById("modal-background")

function makeButtonsClickable(buttons) {
  for (let button of buttons) {
    button.addEventListener("click", (event) => {
      console.log(event.target.getAttribute("id"))
      openModal(button)
    });
  }
}

document.querySelector(".close").addEventListener("click", closeModal);

function openModal(button){
  const project = button.closest(".project");
  console.log(project)
  modalTitle.textContent = project.dataset.title;
  modalDescription.textContent = project.dataset.description;
  modalBackground.classList.remove("hidden");
}

window.onclick = function(event) {
  if (event.target == modalBackground) {
    closeModal()
  }
}

function closeModal() {
  modalBackground.classList.add("hidden");
}

makeButtonsClickable(buttons)