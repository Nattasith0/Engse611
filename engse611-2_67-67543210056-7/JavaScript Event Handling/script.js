document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".myImage img");
    const mainImage = document.getElementById("mainImage");

    thumbnails.forEach((thumb) => {
        thumb.addEventListener("click", function () {
            mainImage.src = this.src;
        });
    });
});
