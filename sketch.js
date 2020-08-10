var bird;
var top_pillar = [];
var bottom_pillar = [];
var gamestate = 1;
var score = 0;

function setup(){
  createCanvas(700, 600);

  bird = new Bird(width/4, height/2, 20, 20);

  for(var i = width; i < 2000; i += 300){
    top_pillar[i] = new Pillar(i, 0, random(10, 15), random(200, 500));
    bottom_pillar[i] = new Pillar(i, height, random(10, 15), random(200, 500));
  }
}

function draw(){
  background(0);
  
  if(gamestate === 1){
    fill("white");
    score += 0.1;
    text("Your score : " + round(score), 600, 10);

    bird.display();
    bird.move(5);

    if(bird.y >= height){
      bird.y = height;
    }

    if(keyIsDown(UP_ARROW)){
      bird.move(-8);
    }

    if(keyIsDown(DOWN_ARROW)){
      bird.move(2);
    }

    if(bird.y <= 0){
      bird.y = 0;
    }

    for(var i = width; i < 2000; i += 300){    
      top_pillar[i].display("red");
      top_pillar[i].move();
      bottom_pillar[i].display("red");
      bottom_pillar[i].move();

      if(top_pillar[i].x <= 0){
        top_pillar[i].x = width;
        top_pillar[i].height += 2;
      }

      if(bottom_pillar[i].x <= 0){
        bottom_pillar[i].x = width;
        bottom_pillar[i].height += 2;
      }

      if(top_pillar[i].IsTouching(bird) === true){
        gamestate = 0;
      }

      if(bottom_pillar[i].IsTouching(bird) === true){
        gamestate = 0;
      }
    }
  }

  if(gamestate === 0){
    fill("white");
    textSize(20);
    text("YOU LOSE !", 295, height/2);
  }
}