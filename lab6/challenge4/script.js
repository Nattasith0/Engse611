document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); 
        alert(this.textContent); 
    });
});
