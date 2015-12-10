var shapes, links, dX, dY;

function preload(){
    
    loadJSON("json/links.json",function(data){
        console.log("links");
        links = data;
        links.forEach(function(link){
            new Link(link);
        });
    });
    
    loadJSON("json/shapes.json",function(data){
        // json loaded
        shapes = data;
        shapes.forEach(function(shape){
            new Shape(shape);
            console.log(shape);
        });
    });

}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    
    resetMatrix();
    clear();
    dX = windowWidth-320;
    dY = windowHeight-500;
    push();
    translate(dX/2,dY/2);
    shapes.forEach(function(shape){
        shape.draw();
    });
    links.forEach(function(link){
        link.draw();
    });
    pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

window.addEventListener('touchstart',function(e){e.preventDefault()});
