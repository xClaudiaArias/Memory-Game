const images = ["one", "two", "three", "four", "five", "six", "seven"];
const  container = $("#container");


// create images element with document.createElement 
// set its attributes 'src, alt, etc..'
// insert it on the container

// for level 1: generate 6 images, with 3 unique ones 
// select 3 random images
let numOfImages = 7;
let imgArr = [];
let imgArr2 = [];


for (let i = 0; i < 3; i++){
    let randomIndex = Math.floor(Math.random() * numOfImages)
    imgArr.push(images[randomIndex])
    imgArr2.push(images[randomIndex])

    // container.append("<img src='./Images/" + images[randomIndex] + ".jpg'>")
    images.splice(randomIndex, 1)
    numOfImages -= 1;
    randomIndex = Math.floor(Math.random() * numOfImages)

}

let combinedArr = imgArr.concat(imgArr2)
let lenCombArr = 6

let randomizedArr = []

for (const [i,img] of combinedArr.entries()){
    console.log(i, img, " :i, img")
    let rando =  Math.floor(Math.random() * lenCombArr)

    container.append("<img src='./Images/" + combinedArr[rando] + ".jpg'>")
    randomizedArr.push(combinedArr[i])

    combinedArr.splice(rando, 1)
    lenCombArr--
    container.append("<img src='./Images/" + combinedArr[rando] + ".jpg'>")
}





console.log(imgArr, imgArr2, combinedArr, randomizedArr, " :imgArr, imgArr2, combinedArr, randomizedArr")




// LEVEL 1 TO DO: 
// -- add ID to images
// -- make images display TWICE randomly 
// -- button to start  playing game
// -- figure out the card logic 






// **** DON'T DELETE 👇 ****

// for (const img of images){
    // this is how to add the images to the dom 
    // container.append("<img src='./Images/" + img + ".jpg'>").attr("src", `./Images/{img}.jpg`)
// }

// **** DON'T DELETE 👆 ****






// level 2: generate 10 images  with 5 unique ones
// level 3:  generate 14 images with 7 unique ones



