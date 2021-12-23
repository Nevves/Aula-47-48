var map;
var pc1, pc1_Anm;
var npcz1, npcz1_Anm, npcz2, npcz3, npcz4, npcz5,npcz6, 
npcz7, npcz8, npcz9, npcz10, npcz12 , npcz13, npcz14, npcz15;

var boxs1, boxs2, boxs3, boxs4, boxs5, boxs6, boxs7, boxs8, boxs9, boxs10,
boxs11, boxs12, boxs13, boxs14, boxs15, boxs16, boxs17, boxs18, boxs19, boxs20,
boxs21, boxs22, boxs23, boxs24, boxs25, boxs26, boxs27, boxs28, boxs29, boxs30,
boxs31, boxs32, boxs33, boxs34, boxs35, boxs36;

var paredes1_1, paredes1_2;
var paredes2_1, paredes2_2;


var boxsgroup;

var cureFzombies, cureFzombies_img;
var paredes, paredes_img;
var boxs, boxs_img;

function preload(){
    
    map = loadImage("imagens/map.png");
    
    paredes_img = loadImage("imagens/paredes.png");
    boxs_img = loadImage("imagens/boxs.png");

    pc1_Anm = loadAnimation("imagens/Hero_R1.png", 
    "imagens/Hero_R2.png", "imagens/Hero_R3.png");

    cureFzombies_img = loadImage("imagens/escudo.png");

}

function setup(){
    canvas = createCanvas(400,400);

    cureFzombies = createSprite(85,350);
    cureFzombies.addImage("Cure for zombies", cureFzombies_img);
    cureFzombies.scale = 0.004;


    paredes = createSprite(200,200);
    paredes.addImage("Paredes", paredes_img);
    paredes.scale = 0.2;

    boxs = createSprite(200,200);
    boxs.addImage("Boxs", boxs_img);
    boxs.scale = 0.2;

    boxsgroup = createGroup();
    
    pc1 = createSprite(20,165);
    pc1.addAnimation("PC Animation", pc1_Anm);
    pc1.scale = 0.004;

    boxs1 = new Boxs(192,14,10,10);
    boxs2 = new Boxs(167,14,11,10);
    boxs3 = new Boxs(175,12,5,5);
    boxs4 = new Boxs(174,30,5,5);
    boxs5 = new Boxs(176,45,10,10);
    boxs6 = new Boxs(157,32,9,9);
    boxs7 = new Boxs(155,26,5,5);
    boxs8 = new Boxs(172,111,10,9);
    boxs9 = new Boxs(170,104,5,5);
    boxs10 = new Boxs(248,117,11,5);
    boxs11 = new Boxs(60,147,20,10);
    boxs12 = new Boxs(48,145,5,5);
    boxs13 = new Boxs(61,154,10,5);
    boxs14 = new Boxs(91,147,10,10);
    boxs15 = new Boxs(98,145,6,5);
    boxs16 = new Boxs(71,174,20,10);
    boxs17 = new Boxs(59,177,6,5);
    boxs18 = new Boxs(132,184,11,9);
    boxs19 = new Boxs(239,165,0,0);
    boxs20 = new Boxs(239,165,0,0);
    boxs21 = new Boxs(239,165,0,0);
    boxs22 = new Boxs(239,165,0,0);
    boxs23 = new Boxs(239,165,0,0);
    boxs24 = new Boxs(239,165,0,0);
    boxs25 = new Boxs(239,165,0,0);
    boxs26 = new Boxs(239,165,0,0);
    boxs27 = new Boxs(239,165,0,0);
    boxs28 = new Boxs(239,165,0,0);
    boxs29 = new Boxs(239,165,0,0);
    boxs30 = new Boxs(239,165,0,0);
    boxs31 = new Boxs(239,165,0,0);
    boxs32 = new Boxs(239,165,0,0);
    boxs33 = new Boxs(239,165,0,0);
    boxs34 = new Boxs(239,165,0,0);
    boxs35 = new Boxs(239,165,0,0);
    boxs36 = new Boxs(239,165,0,0);

    paredes1_1 = createSprite(84,195,5,15);
    paredes1_2 = createSprite(119,197,5,18);

    paredes2_1 = createSprite(60,190,15,5);
    paredes2_2 = createSprite(60,222,15,5);



    //for(var i = 1; i < 37; i++){
        //var testboxi = boxs(i);
        //console.log(i);
        //boxsgroup.add(boxs(i));
    //}

    npcz1 = new Zombies(239,165);
    npcz2 = new Zombies(265,202);
    npcz3 = new Zombies(301,237);
    npcz4 = new Zombies(269,272);
    npcz5 = new Zombies(182,273);
    npcz6 = new Zombies(98,351);
    npcz7 = new Zombies(233,353);
    npcz8 = new Zombies(171,342);
    npcz9 = new Zombies(310,337);
    npcz10 = new Zombies(104,195);
    npcz11 = new Zombies(198,132);
    npcz12 = new Zombies(266,79);
    npcz13 = new Zombies(213,23);
    npcz14 = new Zombies(349,290);
    npcz15 = new Zombies(58,209);
    
}

function draw(){
    background(map);

    if (keyDown("A")){
        pc1.x -= 0.8;
    }

    if (keyDown("D")){
        pc1.x += 0.8;
    }

    if (keyDown("W")){
        pc1.y -= 0.8;
    }

    if (keyDown("S")){
        pc1.y += 0.8;
    }

    drawSprites();
    
    mouse();
    

   
}

function mouse() {
    var posx,posy;
    posx = mouseX;
    posy = mouseY;
    
    if(mousePressedOver(boxs)){  

     console.log("posição X = "+posx);
     console.log("posição Y = "+posy);
    }
}