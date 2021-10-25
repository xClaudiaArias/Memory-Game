const images = ["one", "two", "three", "four", "five", "six", "seven"];
const container = $("#container");

let level_container = document.querySelector('.level');
let score_container = document.querySelector('.score')

let level = parseInt(level_container.innerHTML);
let score = parseInt(score_container.innerHTML);

const game = (lev, sco) => {

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
    newImg.setAttribute("id", `${randomizedImages[i]}`)

    e.append(newImg)
  })

  let matched = []

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
      console.log( "SAME, YOU WIN")
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

let start_btn = document.querySelector('#start-game');

$(start_btn).on('click', function(){
  $("#container").css('visibility', 'visible');
  $("#level").css('visibility', 'visible');
  $("#score").css('visibility', 'visible');
  game(level, score)
})


