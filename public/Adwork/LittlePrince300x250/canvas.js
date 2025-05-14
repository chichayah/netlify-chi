////////////
// PETALS //
////////////

// vars
var cjs = createjs;
var w;
var h;
var stage;
var containerPetals;
var petalsImages = ['petal1.png','petal2.png','petal3.png', 'petal4.png']
var petalsArray=[];

// settings
var speed = 1;
var size = 3; 
var num = 100;
var angle = 0;
var gap = 10;

function initCanvas(){
    canvas = document.getElementById("cvs");
    w = canvas.width = 400;
    h = canvas.height = 350;
	stage = new cjs.Stage(canvas);
    containerPetals = new cjs.Container();
	for(var i=0;i<=num;i++){
		petalsArray.push(new createPetals())
		containerPetals.addChild(petalsArray[i])
	}
	stage.addChild(containerPetals)

	gsap.ticker.add(draw);
}

var c;
function draw(){
    angle += 0.01;

    for(var i=petalsArray.length-1;i>=0;i--){
        c = petalsArray[i];

        c.r += c.rs;
        c.y += Math.sin(angle+c.d) * 3 + c.radius/2;
        c.x -= Math.sin(angle) + 13 ;
        c.rotation -= .2;
        if(c.x < -gap) c.x = w+gap;
        if(c.y < -gap) c.y = h+gap;

        if(c.x <= 0) {
            petalsArray.splice(i,1)
            containerPetals.children.splice(i,1)
        }
    } 
    stage.update();
}

function removePetals(){
    gsap.ticker.remove(draw)
}

function createPetals(){
	var c = this.img = new cjs.Bitmap(rrPetals());

    c.x = Math.random() * (w*2);
    c.y = Math.random() * h;
    c.d = Math.random() * num;
    c.r = 0;
    c.rotation = 0;
    c.radius =  Math.random()*2+1;
    c.scaleX = c.scaleY = rr(.02,.28) * size;
    c.rs =  rr(.1,3)* ((Math.random()) > .5 ? 1 : -1);

	return c;
}

// utils
function rr(min, max){
	var r = (Math.random() * (max - min)) + min;
    return r;
}

function rrPetals(){
	return petalsImages[Math.floor(Math.random()*petalsImages.length)]
}

///////////
// STARS //
///////////

//global vars
var starCanvas;
var starStage;
var starCjs = createjs;
var circle = [];

//init
function initStarCanvas(){
    starCanvas = document.getElementById("starscvs");
    w = starCanvas.width = 300;
    h = starCanvas.height = 250;
    starStage = new cjs.Stage(starCanvas);
    var bounds={a:0,b:300,c:0,d:250};
    circles = new createCircle(300,.12,.04,bounds)
    starStage.addChild(
        circles.container
    );
    gsap.ticker.add(drawStars);
}
function clearScene(){
    circle = [];
    circle.container.removeAllChildren ()
    stage.removeChild(circles.container)
}

//ticker
var dt=0;
function drawStars(){
    dt++;
	for(var i=circle.length-1; i>=0; i--){
		circle[i].move()
	}
    starStage.update()
}

function removeStars(){
    gsap.ticker.remove(drawStars)
}

//create circle particle
function createCircle(n,max,min,b){
	var that = this;
    this.container = new cjs.Container();
    this.circimg = new Image();
    this.circimg.src = "stars.png";
    this.circimg.onload = function(){
        for(var i=0;i<n;i++){
            circle.push(new circleclass(that.container,that.circimg,max,min,b))
        } 
    }
}
//magic circle constructor
function circleclass(container,img,max,min,bounds){
	var s = this.circle;
	s = new cjs.Bitmap(img);
    s.regX = s.regY = 25;
    s.scale = rr(min,max);
	s.delta = rr(.001,.002);
	s.adelta = rr(.001,.002);
	s.alpha = .7;
	s.scaleX = s.scaleY = s.scale;
	s.x = rr(bounds.a,bounds.b)
    s.y = rr(bounds.c,bounds.d);
	s.life = 1;
	s.rs = Math.random()*.3; // rotation speed
	s.rotation = Math.random()*360; // rotation start
    container.addChild(s);
	this.move = function(){
		s.scale += s.delta;
		s.scaleX = s.scaleY = s.scale;
		s.alpha += s.adelta;
		if (s.scale <min || s.scale > max) s.delta = -s.delta;
		if (s.alpha <.6 || s.alpha > .9) s.adelta = -s.adelta;
  	}
}