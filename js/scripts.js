const images = ["one", "two", "three", "four", "five", "six", "seven"];
const container = $("#container");

let level, score, numberOfImages = 0;

for (let i = 0; i < 6; i++){

    // parent element 
    let cardSpace = document.createElement("div")
    container.append(cardSpace)

    // child element 
    let newCard = document.createElement("div")
    cardSpace.append(newCard)
}
$( "#container div" ).addClass("card-space");
$( ".card-space div" ).addClass("card");

$(".card").each(function(i, e){

  let backDiv = document.createElement("div")
  let frontDiv = document.createElement("div")

  backDiv.classList.add("back-div")
  frontDiv.classList.add("front-div")

  e.append(backDiv)
  e.append(frontDiv)


})

$(".card").removeClass("card-space");

// add card__side class 
$(".front-div").addClass("card__side")
$(".back-div").addClass("card__side")

// ---------- DO NOT  DELETE  👇

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


// ------------ DON NOT DELETE 👆







$(".front-div").each(function(i, e){

  let newImg = document.createElement('img')
  newImg.setAttribute("src",`./Images/${randomizedImages[i]}.jpg`)
  newImg.classList.add("front-img")
  newImg.setAttribute("id", `${randomizedImages[i]}`)

  e.append(newImg)
})



// -- CARD FLIP 

// $(".card").on('click', function(){
//   $(this).toggleClass("is-flipped");
// })
// ----------------
// ID ID D ID ID 👇
// let imgId = this.children[1].children[0].id
// ------------------


// let matched = []
// // getting two cards to match 
// $(".card").on('click', function(e){
//   if( matched.length < 2 ) matched.push(this)

//   comparedMatch(matched)
// })
// // comparing the matches 

// function comparedMatch(arr){
//   arr.map(c => {
//     let imgId = c.children[1].children[0].id
//   })
// }





// $(".card").on('click', function(){

//   if (matched.length < 2) {
//     $(this).toggleClass("is-flipped");
//     // console.log(this, ' :this')
//     // console.log(this.lastElementChild.firstElementChild.id, ' :this is the ID to match')
//     console.log($(".card").attr('class'), " :class attr")
//     if ($(".card").hasClass("is-flipped")) { 
//       matched.push($(this))
//       // console.log(this.id, ' :this.id')
//       // console.log(matched, " :matched")
//     } 
//   } else {
//       $(this).removeClass(".is-flipped")
//   }

//   if (matched.length === 2) {
//     console.log(matched[0])
//   }
// })

let matched = []
let check = setInterval(checkMatch, 1000) 
function stopChecking() {
  clearInterval(check)
}

// getting two cards on match array 
$(".card").on('click', function(e){
  if( matched.length < 2 ) matched.push(this)
})

function checkMatch(){
  console.log(matched.length, ' matchissss')
  if (matched.length === 2) stopChecking()
}


console.log(matched, ' matched matched')
function comparedMatch(arr){
  arr.map(c => {
    let imgId = c.children[1].children[0].id
  })
}  



