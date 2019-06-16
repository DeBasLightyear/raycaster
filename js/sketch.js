// For drawing the visuals
function drawWall(wall, weight = 1, color = 255){
    push()
    strokeWeight(weight)
    stroke(color)
    line(wall.VectorA.x, wall.VectorA.y, wall.VectorB.x, wall.VectorB.y)
    pop()
}

function drawLightSource(){
    // circle(mouseX, mouseY, 10)
    circle(140, 300, 10)    
}

function castRay(ray, weight = 1, color = 255){
    stroke(color)
    strokeWeight(weight)
    push()
    line(ray.origin.x, ray.origin.y, ray.direction.x, ray.direction.y)
    pop()
}

// Setup
let wall;
let ray;

function setup(){
    // Preparing canvas
    createCanvas(600, 600);

    // Static objects
    wall = Wall(Vector(450, 100), Vector(450, 500))
    
    // Dynamic objects
    ray = Ray(Vector(140, 300), Vector(10, 0))
}

function draw(){
    // Setting background
    background(0);
    
    // Drawing objects
    drawWall(wall, 10, 255)
    castRay(ray, 2, 255)
    ray.direction = Vector(mouseX, mouseY)

}