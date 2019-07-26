// Logic for light sources

// Calculate the end point of a ray, based on its origin and direction and all objects in the scene
function findRayEndPoint(ray, objects){
    // Trace ray
    // Return first point of collision

}

// Creates a light source and the rays it emits. Each ray has an origin, a direction and an end point.
function  createLight(origin, definition = 2){
    // Make directional vectors from point of origin, in 360 degrees (?)
    let rays = []
    for (let a = 0; a < 360; a += definition){
        const direction = VectorFromAngle(a)
        const newRay = Ray(origin, direction)
        rays.push(newRay)
    }
    return Light(origin, rays)
}