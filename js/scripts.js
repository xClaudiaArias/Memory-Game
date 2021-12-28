const container = $("#container");

let level_container = document.querySelector('.level');
let score_container = document.querySelector('.score')

let level = parseInt(level_container.innerHTML);
let score = parseInt(score_container.innerHTML);

let firstLev = 6
let rand = 3
let randomizedImages;



const loadCards = (lev, ra) => {
  const images = ["one", "two", "three", "four", "five", "six", "seven"];

  for (let i = 0; i < lev; i++){
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


  let selectedImages = [];
  let num = images.length;

  for (let i = 0; i < ra; i++){
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

  randomizedImages = [];
  let lenSelected = selectedImages.length

  for (let i = 0; i < lev; i++){
    let randomIndex = Math.floor(Math.random() * lenSelected);

    randomizedImages.push(selectedImages[randomIndex]);
    selectedImages.splice(randomIndex, 1)
    lenSelected--;
  }

  $(".front-div").each(function(i, e){

    let newImg = document.createElement('img')
    newImg.setAttribute("src",`./Images/${randomizedImages[i]}.jpg`)
    newImg.classList.add("front-img")
    newImg.setAttribute("id", `${randomizedImages[i]}`)

    e.append(newImg)
  })


  matched = []

  const matchCards = () => {

    $(".card").on('click', function(e){
      if (matched.length < 2) {
        matched.push(this)
        $(this).toggleClass("is-flipped");
      } 
    })

    return matched

  }

  matchCards()

  // -------- COMPARING THE CARDS 

  const compare = (arr) => {
    if (arr[0].lastChild.children[0].id === arr[1].lastChild.children[0].id && matched.length == 2) {
      score++;
      score_container.innerHTML = score + ""
      $(arr[0]).addClass("is-flipped")
      $(arr[1]).addClass("is-flipped")
      matched = []
    } else {
      setTimeout(function(){
        $(arr[0]).toggleClass("is-flipped")
        $(arr[1]).toggleClass("is-flipped")
      },1000)
      matched = []
    }
  }

  // -------- REFRESHING THE PAGE TO GET THE MATCHED CARDS RETURNED
  let checkMatched = setInterval(function(){
    if (matched.length == 2) {
      compare(matched)
    }
  }, 500)
}


function checkLevel() {
  if (score === 3){
    level = 2
    level_container.innerHTML = level
    firstLev = 10
    rand = 5
    // randomizedImages = []
  }if (score === 3){
    level = 2
    level_container.innerHTML = level
    firstLev = 10
    rand = 5
    // randomizedImages = []
  } else if (score === 8){
    level = 3
    level_container.innerHTML = level
    firstLev = 14
    rand = 7
    // randomizedImages = []
  } else if (score === 15) {
    clearInterval(levelUp)
  }
}


const game = () => {
  // const images = ["one", "two", "three", "four", "five", "six", "seven"];
  $("#container").css('visibility', 'visible');
  $("#level").css('visibility', 'visible');
  $("#score").css('visibility', 'visible');

  // loading the cards for the first level 
  loadCards(firstLev, rand)

  // leveling up based on score 
  levelUp = setInterval(checkLevel, 500)
}

// START GAME BUTTON 👇
let start_btn = document.querySelector('#start-game');

$(start_btn).on('click', function(){
  game()
  $(this).prop("disabled",true);
})

const lev_up = () => {
  
  let tilt = function (){
    container.empty()
    console.log("whaaaat")

  }


  function testing(){

    console.log(firstLev, rand, " firstLev, rand")
    let myTimeout = setTimeout(tilt, 300)
    // clearInterval(ll)
  }

  // NOTES :
    // change the entire set interval so hat it can be called again and again 

  let ll = setInterval(function(){
    if (level === 2) {
      myTimeout = setTimeout(tilt, 300)
      clearInterval(ll)
      testing()
    } else if (level === 3) {
      // console.log(firstLev, rand, " firstLev, rand")
      // clearInterval(ll)
      testing()
      clearInterval(ll)
    }
  }, 500)

  let empty = setInterval(function(){
    if (level === 2 && container.is(':empty')){
      console.log("container is empty")
      game()
      clearInterval(empty)
    } else {
      console.log("dun dun")
    }
  }, 1000)
}

lev_up()
