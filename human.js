class Human extends BaseClass{
  constructor(x,y){
  super(x,y,50,50)
  }



display(){
  var creatureGroup;
  creaturGroup = new Group();

  if(score % 2 === 0){
  var human = createSprite(100,600,50,50);
  var zombie = createSprite(150,610,50,50);
  var rand = Math.random(round(1,2));
  switch(rand) {
    case 1: human.x = 100
            break;
    case 2: human.x = 200
            break;
    case 3: human.x = 300
            break;
    case 4: human.x = 400
            break;
    case 5: human.x = 500
            break;
    case 6: human.x = 600    
            break;
    case 7: human.x = 700            
            break;

    default: break;
  }
  human.velocityX = Math.random(-5,5);
  zombie.velocityX = Math.random(-5,5);
 }

 



}

}