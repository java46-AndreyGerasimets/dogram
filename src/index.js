let detailsImage = document.querySelector(".details-image");
let detailsTitle = document.querySelector(".details-title");
let anchors = document.querySelectorAll(".thumbnails-anchor");
let mainContentEl = document.querySelector(".main-content");
let selectedItem;

for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event) {
        event.preventDefault();
        setDetails(anchors[i]);
        showDetails();
    })
}
function setDetails(anchor) {
    let hrefValue = anchor.getAttribute("href");
    detailsImage.setAttribute("src", hrefValue);
    let thumbnailsTitleSelector = `[href="${hrefValue}"] .thumbnails-title`;
    let thumbnailsTitleEl = document.querySelector(thumbnailsTitleSelector);
    detailsTitle.textContent = `${thumbnailsTitleEl.textContent}: ${anchor.getAttribute('data-details-title')}`;

    anchor.parentElement.classList.add("selected");
    if(selectedItem) {
        selectedItem.classList.remove("selected");
    }
    selectedItem = anchor.parentElement;
}

function showDetails() {
    mainContentEl.classList.remove('hidden');
}

function hideDetails() {
    mainContentEl.classList.add('hidden');
    if(selectedItem) {
        selectedItem.classList.remove("selected");
    }
}