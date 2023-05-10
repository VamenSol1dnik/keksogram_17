const bigImageBox = document.querySelector(".big-picture");
const images = document.querySelector(".images");
const close = document.querySelector(".big-picture_close");

export function showFullScreen(dataArray) {
    pictures.addEventListener ("click", (event) => {
        const postID = event.target.dataset.id - 1;
        let commentsHTML = "";

        document.body.classList.add("modal-open");
        bigImageBox 
            .querySelector(".social_comment-count")
            .classList.add("hidden");

            if (!isNaN(postID)) {
                bigImageBox.classList.remove("hidden");
            
                console.log(dataArray[postID]);
                bigImageBox.querySelector(".big-image_img img").src =
                    dataArray[postID].url;
                bigImageBox.querySelector(".social_caption").innerText =
                    dataArray[postID].description;
                bigImageBox.querySelector(".big-image_img img").src =
                    dataArray[postID].likes;
                bigImageBox.querySelector(".big-image_img img").src =
                    dataArray[postID].comments.length;

                dataArray[postID].comments.forEach( (comment) =>{
                    commentsHTML += `
                    `
                });

                bigImageBox.querySelector(".social_comments").innerHTML = commentsHTML;
            }
    });

    close.addEventListener("click", () => {
        bigImageBox.classList.add("hidden");
        document.body.classList.remove("modal-open");
            bigImageBox
                .querySelector(".social_comment-count")
                .classList.remove("hidden");
    });

    document.addEventListener("keyup", (evt) => {
        if (evt.key === "Escape") {
            bigImageBox.classList.add("hidden");
            document.body.classList.remove("modal-open");
            bigImageBox
            .querySelector("social_comment-count")
            .classList.remove("hidden");            
        }
    });
}