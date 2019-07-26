// All functions for drawing the visuals in the browser.

function drawWall(wall, weight = 1, color = 255){
    push()
    strokeWeight(weight)
    stroke(color)
    line(wall.VectorA.x, wall.VectorA.y, wall.VectorB.x, wall.VectorB.y)
    pop()
}

function drawLightSource(x, y, size){
    circle(x, y, size)    
}

function drawRay(ray, weight = 1, color = 255){
    stroke(color)
    strokeWeight(weight)
    push()
    translate(ray.origin.x, ray.origin.y)
    line(0, 0, ray.direction.x, ray.direction.y)
    pop()
}

function drawLight(light){
    drawLightSource(light.origin.x, light.origin.y, 5)
    for (const ray of light.rays){
        drawRay(ray)
    }
}

// Setup
let wall
let ray
let light

function setup(){
    // Preparing canvas
    createCanvas(600, 600)

    // Static objects
    wall = Wall(Vector(450, 100), Vector(450, 500))
    
    // Dynamic objects
    // ray = Ray(Vector(140, 300), Vector(10, 0))
    light = createLight(Vector(width / 2, height / 2))
}

function draw(){
    // Setting background
    background(0)
    
    // Drawing objects
    drawWall(wall, 10, 255)
    drawLight(light)
}