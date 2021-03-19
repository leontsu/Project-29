const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand1, stand2;
var polygon, polygonimg;
var slingshot;

//stand 1 boxes
var l1,l2,l3,l4,l5,m1,m2,m3,t1;

//stand 2 boxes
var sl1,sl2,sl3,st1;

function preload()
{
    polygonimg = loadImage("polygon.png");
}

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    // Making the ground
    ground = new Ground(displayWidth/2,390,displayWidth,displayHeight/20);

    // Making the Stand
    stand1 = new Ground(520,300, 370,25);
    stand2 = new Ground(1000,200,300,25)

    //boxes for stand 1
    //level 3 boxes
    l1 = new Box(200,125,60,70);
    l2 = new Box(231,125,60,70);
    l3 = new Box(262,125,60,70);
    l4 = new Box(293,125,60,70);
    l5 = new Box(324,125,60,70);

    
    //level 2 boxes
    m1 = new Box(230,90,60,70);
    m2 = new Box(261,90,60,70);
    m3 = new Box(292,90,60,70);

    //level 1 boxes
    t1 = new Box(261,55,60,70);


    //boxes for stand 2
    //level 3 boxes
    sl1 = new Box(470,75,60,70);
    sl2 = new Box(501,75,60,70);
    sl3 = new Box(532,75,60,70);
    st1 = new Box(501,39,60,70);

    //polygon
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon, {x: 100, y:200})
}

function draw()
{
    background(rgb(101,67,33));

    ground.display();

    stand1.display();
    stand2.display();

    // Stand 1 boxes
    l1.display();
    l2.display();
    l3.display();
    l4.display();
    l5.display();
    fill(rgb(250,218,221));
    m1.display();
    m2.display();
    m3.display();
    fill(rgb(144,238,144));
    t1.display();

    //Stand 2 boxes
    sl1.display();
    sl2.display();
    sl3.display();
    st1.display();

    //Polygon
    imageMode(CENTER);
    image(polygonimg,polygon.position.x,polygon.position.y,40,40);
    slingshot.display();

    Engine.update(engine);
}

function mouseDragged()
{
    Matter.Body.setPosition(this.polygon, {x:mouseX,y:mouseY});
}

function mouseReleased()
{
    slingshot.fly();
};