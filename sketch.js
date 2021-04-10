// genshin characters
let chara = [];//{
  //  name: "✧༺♥༻∞ PLAYER 1 ∞༺♥༻✧",
    //color: "white"
//  },
//  {
//    name: "*＊✿❀ PLAYER 2 ❀✿＊*",
    //color: "black"
//  },
//  {
//    name: "｡o°✥✤✣ PLAYER 3  ✣✤✥°o｡",
    //color: "green"
//  }
let randomIndex;
let animating = false;
let characters = [];
let imageCounter = 0;
let startRandomizerbutton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;
//let newInputButton;
function preload() {
  for (let i = 0; i <= 7; i++) {
    characters[i] = loadImage("assets/character" + i + ".png")
  }
}
//let counter = 0;

function setup() {
  cnv = createCanvas(1920, 1080);
  cnv.parent("#canvasDiv");
  background(220, 700, 800);
  textSize(24);
  textAlign(CENTER);
  imageMode(CENTER);
  textStyle(ITALIC);
  fill(70);
  imageMode(CENTER);
  frameRate(3);
  text("✧･ﾟ: *✧･ﾟ:*GENSHIN IMPACT*:･ﾟ✧*:･ﾟ✧", width / 2, height / 2);
  //button = createButton("∞ ₒ ˚ ° 𐐒 CHOOSE YOUR CHARACTER 𐐚 ° ˚ ₒ ∞");
  startRandomizerbutton = select('#randButton')
  startRandomizerbutton.mousePressed(buttonPressed);
  addMoreButton = select('#addMoreButton')
  addMoreButton.mousePressed(addAnotherInput);

  for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
  //console.log(characters);
  //setTimeout(changeBackground, 1000);
}
//console.log(random(3));
//console.log(chara.length)

//console.log(chara);
//console.log(chara[2].color);
//chara[1] = "genshin";
//console.log("initial array is")
//console.log(chara);

//chara.shift();
//console.log("array after shift")
//console.log(chara);

//chara.splice(4, 1);
//console.log("array after splice")
//console.log(chara);
//chara.unshift("2");
//console.log("array after unshift")
//console.log(chara);




function draw() {


  //background(220, 700, 800)
  if (animating == true) {
    clear();
    //ellipse(random(width), random(height), random(10, 100));
    image(characters[imageCounter], width / 2, height / 2);
    if (imageCounter < characters.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }
}
function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
}
function changeBackground() {
  //if (counter <= 2){
  //counter++;
  //console.log(counter)
  //background(random(255), random(255), (random(255)));
  //setTimeout(changeBackground, 1000);
  //} else {

  //}
}

function randomizer() {
  animating = false;
  if (chara[0]) {
    // this displays random name and splices it out of array
    //background(random(220, 255));
    clear();
    randomIndex = int(random(chara.length));

    //console.log(chara[randomIndex].name);
    //text(chara[randomIndex].name + "'s favorite color is" + chara[randomIndex].color, 50, 50);
    text(chara[randomIndex], width / 2, height - 50);
    image(random(characters), width / 2, height / 2);
    chara.splice(randomIndex, 1);
  } else {
    background(random(220, 255));
    text("GAME OVER", width / 2, height / 2);
  }
}

function buttonPressed() {
  if (firstTime == true){
    //for (let i = 0; i < nameInputs.length; i)
  for (let i= 0; i < nameInputs.length; i++){
    chara.push(nameInputs[i].value());
  }
  firstTime = false;
} //else
  animating = true;
  setTimeout(randomizer, 2000);

}
