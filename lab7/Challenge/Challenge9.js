function toggleBox() {
    let box = document.getElementById("box");

    if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "block"; // แสดงกล่อง
    } else {
        box.style.display = "none"; // ซ่อนกล่อง
    }
}
