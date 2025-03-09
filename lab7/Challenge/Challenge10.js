function changeStyle() {
    let text = document.getElementById("styledText");

    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    let randomSize = Math.floor(Math.random() * (32 - 16 + 1)) + 16 + "px";

    text.style.color = randomColor;
    text.style.fontSize = randomSize;
    text.style.fontWeight = "bold";
}
