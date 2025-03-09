function traverseDOM() {
    let secondChild = document.getElementById("second-child");

    let parent = secondChild.parentNode;
    parent.classList.add("highlight");

    let firstChild = secondChild.previousElementSibling;
    if (firstChild) {
        firstChild.classList.add("highlight");
    }
}
