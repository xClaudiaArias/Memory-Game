const images = ["one", "two", "three", "four", "five", "six", "seven"];
const container = $("#container");


// selects 3 random images 

let selectedImages = [];

let num = images.length

for (let i = 0; i < 3; i++){
  // picks a random number as index
    let randomIndex = Math.floor(Math.random() * num)

  // adds element to the list TWICE 
    for (let j = 0; j < 2; j++){
        selectedImages.push(images[randomIndex])

    }

  // removes the element from the list so it can not be chosen again
    images.splice(randomIndex, 1)
  // decreases num because the original list is also decreasing 
    num--
}

console.log(images, " :images")
console.log(selectedImages, " :selectedImages")


// 1. randomize SELECTED-IMAGES-LIST again to display the elements randomly on the page 
// FIX THIS 👇👇👇👇👇
for (let [i, img] of selectedImages.entries()){
    container.append(`<img id="card-${i + 1}" class="card" src="./Images/${img}.jpg">`)
}

