let detailsImage = document.querySelector(".details-image");
let detailsTitle = document.querySelector(".details-title");
let mainContentEl = document.querySelector(".main-content");
let detailsSound = document.querySelector(".details-sound");

let selectedItem;
let anchors = document.querySelectorAll(".thumbnails-anchor");

for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event) {
        event.preventDefault();
        if (selectedItem != anchors[i].parentElement) {
            showDetails();
            setDetails(anchors[i]);
        }
    })
}

function setDetails(anchor) {
    let hrefValue = anchor.getAttribute("href");
    detailsImage.setAttribute("src", hrefValue);
    anchor.parentElement.classList.add("selected");
    if (selectedItem) {
            selectedItem.classList.remove("selected")
    }
    selectedItem = anchor.parentElement;
    let thumbnailsTitleSelector = `[href="${hrefValue}"] .thumbnails-title`;
    let thumbnailsTitleEl = document.querySelector(thumbnailsTitleSelector);
    detailsTitle.textContent = `${thumbnailsTitleEl.textContent}: ${anchor.getAttribute('data-details-title')}` ;
    let sound = document.querySelector(`[href="${hrefValue}"] .thumbnails-sound`).getAttribute("src");
    detailsSound.setAttribute("src", sound);
    detailsSound.muted = false;
    setTimeout((function() {detailsSound.muted = true;}), 10000);
}

function showDetails() {
    mainContentEl.classList.remove('hidden');
    detailsImage.parentElement.classList.add('is-tiny');
    setTimeout(removeIsTiny);
}

function removeIsTiny() {
    detailsImage.parentElement.classList.remove('is-tiny');
}

function hideDetails() {
    mainContentEl.classList.add('hidden') ;
    if (selectedItem) {
        selectedItem.classList.remove('selected')
    }
}