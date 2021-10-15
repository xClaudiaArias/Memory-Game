const images = ["one", "two", "three", "four", "five", "six", "seven"];
const container = $("#container");

let level, score, numberOfImages = 0;
let level_container = document.querySelector('.level');
let score_container = document.querySelector('.score')

console.log(level_container.innerHTML, ' level_cint')
console.log(score_container.innerHTML, ' score cont')
// level_container.innerHTML = level.toString()
// score_container.innerHTML = score.toString()

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

let matched = []

const matchCards = () => {
  // let matched = []

  $(".card").on('click', function(e){
    // $(this).toggleClass("is-flipped");

    if (matched.length < 2) {
      matched.push(this)
      $(this).toggleClass("is-flipped");
    } 
  })

  console.log(matched)
  return matched

}

matchCards()

// -------- COMPARING THE CARDS 

let isSame = false

const compare = (arr) => {
  if (arr[0].lastChild.children[0].id === arr[1].lastChild.children[0].id && matched.length == 2) {
    console.log( "SAME, YOU WIN")
    score++
    score_container.innerHTML = score.toString();
  } else {
    console.log(" OH NO, TRY AGAIN")
    clearInterval(checkMatched)

    setTimeout(function(){
      $(arr[0]).toggleClass("is-flipped")
      $(arr[1]).toggleClass("is-flipped")
    },1000)
  }

  console.log(arr[0], arr[1], ' arr 0 and arr 1')
  console.log(arr[0].lastChild.children[0].id, 'iiiiidddd')
  console.log(arr[1].lastChild.children[0].id, 'iiiiidddd')
}

// -------- REFRESHING THE PAGE TO GET THE MATCHED CARDS RETURNED
let checkMatched = setInterval(function(){
  if (matched.length == 2) {
    console.log(matched)
    compare(matched)
  }
}, 500)




