const images = ["one", "two", "three", "four", "five", "six", "seven"];
const container = $("#container");

// back side image generator 

const generateImages = () => {
  for (let i = 0; i < 6; i++){
    container.append(`<div class="card-holder">
                        <div id="back">
                          <img class="card" src="./Images/back.jpg">
                        </div>
                        <div id="front">
                        </div>
                      </div>`)
  }
}

generateImages()

// selects 3 random images 

/* 
let selectedImages = [];
let num = images.length;

for (let i = 0; i < 3; i++){
  // picks a random number as index
    let randomIndex = Math.floor(Math.random() * num);
  // adds element to the list TWICE 
    for (let j = 0; j < 2; j++){
      selectedImages.push(images[randomIndex]);
    }
  // removes the element from the list so it can not be chosen again
    images.splice(randomIndex, 1);
  // decreases num because the original list is also decreasing 
    num--;
}

// randomize images
let randomizedImages = [];
let lenSelected = selectedImages.length

for (let i = 0; i < 6; i++){
  let randomIndex = Math.floor(Math.random() * lenSelected);

  randomizedImages.push(selectedImages[randomIndex]);
  selectedImages.splice(randomIndex, 1)
  lenSelected--;
}

// display random images on screen 
for (let [i, img] of randomizedImages.entries()){
  container.append(`<img id="card-${i + 1}" class="card" src="./Images/${img}.jpg">`)
}
 */


