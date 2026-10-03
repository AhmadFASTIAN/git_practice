const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", function () {
    message.textContent = "You just changed the project using JavaScript!";
});