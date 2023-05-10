import { thumbnails } from './picture.js';
const countOffOffers = 25;
const countOffComments = 5

const descriptions = ['Сходи до неба! Відчуйте свободу та безмежність, які дає краса навколо!',
                    'Дім - це там, де знаходиться наше серце' , 
                    'Зустрічайте сонце з усмішкою! ',
                    'Прекрасна і глибока вода манить нас своєю таємничістю та відкриває багато можливостей для пригод.'];


const comments = ["Все відмінно!",
     "Загалом все непогано. Але не всі.",    
    "Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.",  
    "Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.",
    "Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.",
    "Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?"];


const names = ["Василь", "Назар", "Микита", "Артур", "Михайло", "Ілля", "Антон", "Данило", "Ігор", "Євген", "Дмитро",
"Петро", "Тарас", "Олександр", "Стас", "Віктор" ]

const data = new Array(countOffOffers).fill(null).map((e,index)=> getOffer(index))
const comment  = new Array(countOffComments).fill(null).map((e, index)=> getComment(index))

const photos = [ 
    
];

function createPhotos(){
    
    for (let i = 0; i < 25; i++) {
    const picture = {};
    picture.id=i;
    picture.photo=`./photos/${i+1}.jpg`; 
    picture.descrition=getRandomString(descriptions)
    photos.push(picture)
    }
}



createPhotos()
console.log(photos)
thumbnails(photos);

function getRandomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


function getRandomArray(arrayLenght, arrayMax) {
    const arr = []
    while (arr.length < arrayLenght) {
        const r = Math.floor(Math.random() = arrayMax) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}


function getRandomDescrition() {
    const randomArrayNumber = getRandomNumber(0,descriptions.length) 
    return  descriptions [ randomArrayNumber];
}

const urlArray = getRandomArray(25, 25);

function getRandomURL(){
    const RandomArrayURL = getRandomNumber(0, urlArray.length) 
    return  descriptions [ RandomArrayURL];
}

function getOffer (index) {
     
    return {
        id: index+1,
        url: `photos/${index+1}.jpg`,
        descrition: 'some test descrition',
        likes: getRandomNumber(),
    }
}


function getOffers (index) {
    for ( let i = 0; i< urlArray.length; i++) {
    getOffer(i)
    }
    }




function getRandomString (array) {
    const RandomArrayNumber = getRandomNumber(0, array.length-1) 
    const RandomComment =array[RandomArrayNumber]
    return  RandomComment;
}

getRandomString(names)
getRandomString(comments)

const avatarArray = getRandomArray(6,6)

function getComment(index) {
    for (let i = 0; i < 7; i++) {
        return {
            id: index + 1,
            avatar: 'img/avatar-${avatarArray[i]+1}.svg',
            comment:getRandomString(comments),
            name: getRandomString(names)
        }
        
    }
}