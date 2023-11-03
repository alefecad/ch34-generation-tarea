let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1. Imprime a todas las personas en la lista.
console.log(people);

// 2. Elimina a "Dani" del arreglo.
people.splice(people.indexOf("Dani"), 1);
console.log(people);

// 3. Elimina a "Juan" del arreglo.
people.splice(people.indexOf("Juan"), 1);
console.log(people);

// 4. Mueve a "Luis" al principio del arreglo.
people.splice(0, 0, people.splice(people.indexOf("Luis"), 1)[0]);
console.log(people);

// 5. Agrega tu nombre al final del arreglo.
people.push("Alex");
console.log(people);

// 6. Itera a través del arreglo y después de imprimir "Maria", sal del bucle (usa "break").
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  }
}

// 7. Devuelve el índice en el que se encuentra "Maria" en el arreglo.
const mariaIndex = people.indexOf("Maria");
console.log(`El índice de "Maria" es ${mariaIndex}.`);

// Al final del ejercicio, debería haber 4 personas en el arreglo.
console.log(`Número de personas en el arreglo: ${people.length}`);
console.log(people);