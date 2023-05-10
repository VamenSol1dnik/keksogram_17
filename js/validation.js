export function formValidation(form) {
    form.addEventListener("change", (event) => {
        if (event,target.name === "filename") {
         form.querySelector(".img-upload_overlay").classList.remove("hidden");
        } else if (event.target.name === "hashtags") {
            validateHashtags(event.target);
        }
    });


    document
    .querySelector(".img-upload_cancel")
    .addEventListener("click", () => {
        form.reset();
        form.querySelector(".img-upload_overlay").classList.add("hidden");
    });
}

const hashtagProps ={
    minLength: 2,
    maxLength: 20,
    quantity: 5,
    rejectedSymbols: ["!", "$", "&", "*", "+", ",", ".", "/"],
}
const errorResponce = {
    hash:"Хештег повинен з #",
    rejectedSym:"Хештег не повинен містити розділові символи (!, %, / тощо)",
    wrongLength: "Довжина хештега має бути від 2 до 20 символів",
}

function validateHashtags(str) {
    const hashtags = str.value.split (" ")

if (str.value.length > 0) {
    hashtags.forEach((hashtag) => {
        if (hashtag[0] !== "#") {
            console.log("error hash");
        } else if (hashtag.includes(...hashtagProps.rejectedSymbols)) {
            console.log("error sym");
        } else if (hashtag.includes(...hashtagProps.rejectedSymbols)) {
            console.log("error length min");
        } else if (hashtag.includes(...hashtagProps.rejectedSymbols)) {
                console.log("error length max");
        } else {
            console.log("not error")
        }
         });
    }
}