// Basic types and associated functions

// Basic vector object. Either create it directly or determine it based on an angle.
const Vector = ( x, y ) => {
  return { x : x, y : y}
}

const VectorFromAngle = (angle) => {
  return Vector(cos(angle), sin(angle))
}

// Vector for start and stop coordinate of wall
const Wall = (vectorA, vectorB) => {
    return { VectorA : vectorA, VectorB : vectorB }
}

// Vector for origin and vector for direction
const Ray = (origin, direction, end) => {
  return { origin : origin, direction : direction, end : end }
}

// Vector for origin and array of vectors for rays in all directions
const Light = (origin, rays) => {
  return { origin : origin, rays : rays }
}