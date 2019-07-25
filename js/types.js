// Basic types

const Vector = ( x, y ) => {
  return { x : x, y : y}
}

const Wall = ( vectorA, vectorB ) => {
    return { VectorA : vectorA, VectorB : vectorB }
}

const Ray = (origin, direction) => {
  return { origin : origin,  direction : direction}
}