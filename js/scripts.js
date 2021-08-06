const images = ["one", "two", "three", "four", "five", "six", "seven"];
const container = $("#container");

let level, score, numberOfImages = 0;

for (let i = 0; i < 6; i++){
    let newEl = document.createElement("div")
    container.append(newEl)
}
$( "#container div" ).addClass("card");

$(".card").each(function(i, e){

  let frontDiv = document.createElement("div")
  let backDiv = document.createElement("div")

  frontDiv.classList.add("front-div")
  backDiv.classList.add("back-div")

  e.append(frontDiv)
  e.append(backDiv)

})

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

let randomizedImages = [];
let lenSelected = selectedImages.length

for (let i = 0; i < 6; i++){
  let randomIndex = Math.floor(Math.random() * lenSelected);

  randomizedImages.push(selectedImages[randomIndex]);
  selectedImages.splice(randomIndex, 1)
  lenSelected--;
}

$(".front-div").each(function(i, e){
  let newImg = document.createElement('img')
  newImg.setAttribute("src",`./Images/${randomizedImages[i]}.jpg`)
  newImg.classList.add("front-img")

  e.append(newImg)
})
