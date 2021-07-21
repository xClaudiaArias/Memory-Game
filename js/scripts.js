const images = ["one", "two", "three", "four", "five", "six", "seven"];
const  container = $("#container");


// create images element with document.createElement 
// set its attributes 'src, alt, etc..'
// insert it on the container

// for level 1: generate 6 images, with 3 unique ones 
// select 3 random images
let numOfImages = 7;

for (let i = 0; i < 3; i++){
    let randomIndex = Math.floor(Math.random() * numOfImages)
    container.append("<img src='./Images/" + images[randomIndex] + ".jpg'>").attr("src", `./Images/{img}.jpg`)
    images.splice(randomIndex, 1);
    numOfImages -= 1;
    randomIndex = Math.floor(Math.random() * numOfImages)
}

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



