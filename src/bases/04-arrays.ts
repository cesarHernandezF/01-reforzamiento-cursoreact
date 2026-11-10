const myArray:number[] = [1,2,3,4,5,6];

myArray.push(10);
myArray.push(11);

const myArray2 = [...myArray]; //Operador Spread - Esparcir los valores de los arreglos

myArray2.push(7);

console.log({myArray, myArray2});

/*for(const myNumber of myArray){
    console.log(myNumber + 10);
}*/