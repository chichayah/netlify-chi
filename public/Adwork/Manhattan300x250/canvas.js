var canvas = document.getElementById("cvs");
var w = canvas.width = 300;
var h = canvas.height = 250;
var ctx = canvas.getContext("2d");
var particles = [];
var speed= 0;
var size = 200;
var angle = 2;
var mp = 200; // max particle
var gap = 0;
var snowImg = new Image();
    snowImg.src = 'snow.png';
    
function rr(min, max,round) {
    var r = (Math.random() * (max - min)) + min;
    if(!round) return r;
    else return Math.floor(r); 
}

for(var i = 0; i < mp; i++){
    particles.push(new create_particle());
}

function create_particle(){
    this.x = Math.random()*w;
    this.y = Math.random()*h;
    this.s = Math.random() * size;
    this.d = Math.random() * mp;
    this.r = 0;
    this.radius =  Math.random()*2+1;
    this.rs =  rr(.1,3)* ((Math.random()) > .5 ? 1 : -1);
}

function draw() {
  
    ctx.clearRect(0, 0, w, h);
    for(var t=0; t<particles.length; t++){

        var p = particles[t];
        ctx.drawImage(snowImg, p.x, p.y, snowImg.width/2, snowImg.height/2)

        p.r+=p.rs;
        p.y += (Math.cos(angle) + 1 + p.radius/2) / 2;
        p.x -= (Math.sin(angle))/2;
        if(p.x < -gap) p.x = w+gap;
        if(p.y < -gap) p.y = h+gap;
        // if(p.x > w+gap) p.x = -gap;
        if(p.y > h+gap) p.y = -gap;
    }
}
// TweenLite.ticker.addEventListener("tick", draw);
gsap.ticker.add(draw);

function removeSnow() {
    gsap.ticker.remove(draw);
}