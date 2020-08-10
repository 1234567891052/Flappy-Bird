function Bird(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.display = function(){
        push();
            fill("blue");
            noStroke();
            rectMode(CENTER);
            rect(this.x, this.y, this.width, this.height);
        pop();
    }

    this.move = function(yvel){
        this.y += yvel;
    }
}