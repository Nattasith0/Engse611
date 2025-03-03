document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a"); 

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const hrefValue = link.getAttribute("href"); 
            if (hrefValue !== "http://google.com") { 
                event.preventDefault();  
                alert("clicked!");
            }
        });
    });
});
