var shapes, links;

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
    shapes.forEach(function(shape){
        shape.draw();
    });
    links.forEach(function(link){
        link.draw();
    });
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}