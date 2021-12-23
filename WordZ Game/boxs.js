class Boxs{
    constructor(x,y,width, height){
        this.positionX = x;
        this.positionY = y;

        this.width = width;
        this.height = height;
   
        this.sprite = createSprite(this.positionX,this.positionY,this.width,this.height);
        this.sprite.visible = true;     
    }
    
    display(){
        rectMode(CENTER);
        rect(this.positionX,this.positionY,this.width,this.height);
    }
}