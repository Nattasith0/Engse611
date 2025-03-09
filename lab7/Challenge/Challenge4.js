function addParagraph() {
    let p = document.createElement("p"); 
    p.textContent = "This is a new paragraph!"; 
    document.getElementById("container").appendChild(p); 
}
