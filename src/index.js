console.log("Hello world!")
let detailsImage = document.querySelector(".details-image");
let detailsTitle = document.querySelector(".details-title");
let anchors = document.querySelectorAll(".thumbnails-anchor");

setDetails(anchors[0]);
for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event) {
        event.preventDefault();
        setDetails(anchors[i]);
    })
}
function setDetails(anchor) {
    detailsImage.setAttribute("src", anchor.getAttribute("href"));
    let thumbnailsTitle = anchor.querySelector(".thumbnails-title").innerHTML;
    detailsTitle.textContent = thumbnailsTitle + " : " + anchor.getAttribute("data-details-title");
}