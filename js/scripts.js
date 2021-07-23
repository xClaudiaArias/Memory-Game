const images = ["one", "two", "three", "four", "five", "six", "seven"];
const container = $("#container");


// selects random images 


const game = () => {

    // get number of images 
    let numOfImages = images.length; 
    let imgArr = [];
    let imgArr2 = [];
    
    for (let i = 0; i < 3; i++){
        let randomIndex = Math.floor(Math.random() * numOfImages)
        imgArr.push(images[randomIndex])
        imgArr2.push(images[randomIndex])
    
        images.splice(randomIndex, 1)
        numOfImages -= 1;
        randomIndex = Math.floor(Math.random() * numOfImages)
    }
    
    // #randomizes images  
    let combinedArr = imgArr.concat(imgArr2)
    let lenCombArr = combinedArr.length
    let randomizedArr = []
    
    for (let i = 0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * lenCombArr)
        console.log(randomIndex, " :randomIndex")
    
        randomizedArr.push(combinedArr[randomIndex])
        combinedArr.splice(randomIndex, 1)
    
        lenCombArr -= 1;
    }
    
    // # displays images 
    for (let [i, img] of randomizedArr.entries()){
        console.log(i, img, " :i, img")
        container.append(`<img id="card-${i + 1}" class="card" src="./Images/${img}.jpg">`)
    }
    
    
    
    
    // LEVEL 1 TO DO: 

    // -- figure out the card logic 
    
    
    
    
    
    
    // **** DON'T DELETE 👇 ****
    
    // for (const img of images){
        // this is how to add the images to the dom 
        // container.append("<img src='./Images/" + img + ".jpg'>").attr("src", `./Images/{img}.jpg`)
    // }
    
    // **** DON'T DELETE 👆 ****
    
    
    
    
    
    
    // level 2: generate 10 images  with 5 unique ones
    // level 3:  generate 14 images with 7 unique ones
    
    
    
}

// start game btn 
// calls game function on click 
$('#start-game').on('click', () => {
    $(".level").text(1)
    game()
})