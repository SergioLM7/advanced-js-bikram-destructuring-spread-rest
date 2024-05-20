//RESUELVE LOS EJERCICIOS AQUÍ

// 1.- Dado el objeto empleados, extrae la empleada Ana completa.
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const [,obj2,] = empleados;
let ana = obj2;
//2.- Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com
const [obj1] = empleados;
let emailLuis = obj1.email;

//3.- Usa destructuración para cambiar los valores de a y b;
// Inicialmente
let a = 5;
let b = 3;

[a, b] = [b, a];

// 4.- Dado el objeto HIGH_TEMPERATURES
//Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas 
//en las variables maximaHoy y maximaManana
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

const {yesterday, today, tomorrow} = HIGH_TEMPERATURES;
let maximaHoy = today;
let maximaManana = tomorrow;

//SPREAD - REST
//5.- Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y 
//devuelva la suma de todos los demás argumentos.
const sumEveryOther = (...numeros) => {
    let total = 0;
    numeros.forEach ((numero) => total += numero);
    return total;
  };

// 6.- Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números 
//y strings y retorne la suma solo de los números).

const addOnlyNums = (...numeros) => {
    let total = 0;
    numeros.forEach((element)=> {
        if (!isNaN(element) && element !== true && element !== false) {
            total += element;
        }
    });
    return total;
};

// 7.- Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva 
//un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...arg) => {
    let counter = 0;
    arg.forEach(argumento => counter++);
    return counter;
};

// 8.- Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo 
//un array que combine los dos (usando spread operator).
const combineTwoArrays = (arr1, arr2) => {
    let arrayFinal = [...arr1, ...arr2];
    return arrayFinal;
};

// 9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array 
//de elementos únicos, sin repetidos.
const onlyUniques = (...arg) => {
    let arrayFinal = [];
    arg.forEach((element) => {
        if(!arrayFinal.includes(element)) {
            arrayFinal.push(element);
        }
    });
    return arrayFinal;
};

// 10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos 
//y los combine todos en un solo array.
 const combineAllArrays = (...arr) => {
    let arrayFinal = [].concat(...arr);
    return arrayFinal;
 };

//11.- Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado 
//y devuelva la suma de todos los valores cuadrados.
const sumAndSquare = (...arg) => {
    let suma = 0;
    arg.forEach((argumento) => suma += argumento**2);
    return suma;
};