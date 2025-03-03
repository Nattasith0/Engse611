document.addEventListener("DOMContentLoaded", function () {
    let paragraphs = document.querySelectorAll("#main p"); 
    
    paragraphs.forEach(p => {
        if (p.textContent.includes("Llamas and Chickens!")) { 
            p.style.color = "red"; 
        }
    });
});
