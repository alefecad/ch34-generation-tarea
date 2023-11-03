// Ejercicio 3 - Usando reduce()

const arr = [1, 2, 3, 4];

function additionMultiplication(arr) {

    let addition = arr.reduce((result, data) => {
        return result + data;
    }, 0);

    let product = arr.reduce((result, data) => { 
        return result * data;
    }, 1);

    console.log(`La suma es ${addition}.`);
    console.log(`El producto es ${product}.`);
}

additionMultiplication(arr);