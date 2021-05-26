var canva;
var gamestate = 0, contestantCount, database, quiz, question, allContestant

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz1 = new Quiz(); 
  quiz1.getState()
  quiz1.start()

}


function draw(){
  background("pink");


  
}
