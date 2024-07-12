const body = document.body
const toggleButton = document.getElementById("togglebutton")
const circle = document.getElementById("circle")

toggleButton.addEventListener("click", () => {
    circle.classList.toggle("nigth")
    body.classList.toggle("dark")
})