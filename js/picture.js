const container = document.querySelector(".pictures");
const tmpPicture = document.getElementById("picture");
const thumbnailsFragment = new DocumentFragment();
export function thumbnails(thumbs){
  thumbs.forEach((thumb=> createThumb(thumb)));
  container.append(thumbnailsFragment);
}

function createThumb(data) {
const container = document.querySelector(".pictures");
const tmpPicture = document.getElementById("picture");
const thumbnailsFragment = new DocumentFragment();
}