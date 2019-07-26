// Logic for calculating line intersection

// Helper functions for calculating intersection
function calcT(x1, x2, x3, x4, y1, y2, y3, y4){
    numerator   = (x1 - x3)*(y3 - y4) - (y1 - y3)*(x3 - x4)
    denomitator = (x1 - x2)*(y3 - y4) - (y1 - y2)*(x3 - x4)
    return numerator / denomitator
}

function calcU(x1, x2, x3, x4, y1, y2, y3, y4){
    numerator   = (x1 - x2)*(y1 - y3) - (y1 - y2)*(x1 - x3)
    denomitator = (x1 - x2)*(y3 - y4) - (y1 - y2)*(x3 - x4)
    return -(numerator / denomitator)
}

// Calculating point of intersection. Returns a vector
function calcIntersectPoint(x1, x2, y1, y2, T){
    x = x1 + T*(x2 - x1)
    y = y1 + T*(y2 - y1)

    return Vector(x, y)
}

// Calculating if two lines intersect. Returns point of intersection
function linesIntersect(object, ray){
    // L1 is the object
    x1 = object.VectorA.x
    y1 = object.VectorA.y
    x2 = object.VectorB.x
    y2 = object.VectorB.y

    // L2 is the ray
    x3 = ray.origin.x
    y3 = ray.origin.y
    x4 = ray.direction.x
    y4 = ray.direction.y

    // Doing the math
    T = calcT(x1, x2, x3, x4, y1, y2, y3, y4)
    U = calcU(x1, x2, x3, x4, y1, y2, y3, y4)
    
    if ((0 < T && T < 1) && U > 0){
        return calcIntersectPoint(x1, x2, y1, y2, T)
    }
}