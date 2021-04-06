// eula
let eula = [];

let randomIndex;
let animating = false;
let character = [];
let imageCounter = 0;
let startRandomizerButton; 
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;

function preload(){
  
  for (let i = 0; <= 7; i++) {
    character[i] = loadImage(`assets/character${i}.JPG`)
  }
}
function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent("#canvasDiv")
  
  background(300);
  textSize(32);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);
  imageMode(CENTER);
  frameRate(7);
  
  //text("Choose Your Character", width/2, height/2);
  //setInterval(changeBackground, 3000);
//console.log(character);
  //button = createButton("CHOOSE YOUR CHARACTER");
  startRandomizerButton = select('#randButton')
  startRandomizerButton.mousePressed(buttonPressed);
  
  addMoreButton = select('#addMoreButton')
  addMoreButton.mousePressed(addAnotherInput);
  
  for (let i = 0; i < 3; i++){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parents("#inputFields");
  }
  
}


function draw() {
  
  if (animating == true){
    clear();
   image(character[imageCounter], width/2, height/2);
    
    if (imageCounter < character.length - 1){
    imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }


//function changeBackground(){
  //background(random(255), random(255), random(255));
    //setInterval(changeBackground, 3000);
}
function addAnotherInput(){
   nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parents("#inputFields");
}
function randomizer(){
  animating = false;
   if (eula[0]){
      //background(200,650,400);
     clear();
 randomIndex = int(random(eula.length));

console.log(eula[randomIndex].name);
text(eula[randomIndex].name, width/2, height - 50);
     image(random(character), width/2, height/2);

eula.splice(randomIndex, 1);
console.log(eula);

} else {
  background(200,650,400);
  text("game over!", 50, 50);
}
}

function buttonPressed() {
  if (firstTime == true){
    
  
  for (let i = 0; i < nameInputs.length; i++){
    eula.push(nameInputs[i].value());
    }
    firstTime = false;
  }
  
  animating = true;
  setTimeout(randomizer, 2000);
 
}