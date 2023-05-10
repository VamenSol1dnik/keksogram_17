import { thumbnails } from './picture.js';
import { openBigImage } from './fullscreen.js';
import {onPhotoUpload} from "./validation.js";

fetch("http://localhost:4000/photos")
  .then((response) => response.json())
  .then((data) => {
    posts = data;
    thumbnails(posts);
  });

  const container = document.querySelector(".pictures");
  container.addEventListener('click', function(event) {
    let pictureWraper = event.target.closest('.picture');
    if (pictureWraper) {
      openBigImage(pictureWraper, posts);
    }
  });
  
  const photoInput = document.querySelector('#upload-file');
  photoInput.addEventListener('change', onPhotoUpload);