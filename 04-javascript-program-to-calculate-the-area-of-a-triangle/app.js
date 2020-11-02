// - 1 - Area When Base and Height is Known
let baseValue = prompt('Enter the base of a triangle: ');
let heightValue = prompt('Enter the height of a triangle: ');

let areaValue1 = (baseValue * heightValue) / 2;
console.log(`The are of the triangle is ${areaValue1}`);

// - 2 - Area When All Sides are Known
let side1 = prompt('Enter side1: ');
let side2 = prompt('Enter side2: ');
let side3 = prompt('Enter side3: ');

// calculate the semi-perimeter
let s = (side1 + side2 + side3) / 2;

//calculate the area
let areaValue2 = Math.sqrt(
    s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
    `The area of the triangle is ${areaValue2}`
);