const inputData = [3, 6, 12, 5, 100, 1];
console.log("Datos desordenados:");
console.log(inputData);

function bubble(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

const outputData = bubble(inputData);
console.log("Datos ordenados:");
console.log(outputData);