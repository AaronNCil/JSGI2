let tHeight = 9;
let tMass = 8; 
let jHeight = 10;
let jMass = 45;

let tBMI = tMass / tHeight**2;
let jBMI = jMass / jHeight**2;

if (tBMI > jBMI ){
    var option = true;
} else {
    var option = false;
}

console.log(`Is Tom's BMI higher than Jerry's? ${option}`);