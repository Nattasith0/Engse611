let img = document.getElementById("zoom");

img.onclick = function () {
    img.classList.toggle("azoom");
}

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.querySelectorAll("table.table-show button");


    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            
            window.open(`../challenge/challenge${index + 1}.html`);
        });
    });
});

