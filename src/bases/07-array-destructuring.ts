const characterNames = ['Goku','Vegeta','Trunks'];

const [p1, p2, p3] = characterNames;

const [, vegeta] = characterNames; //Cuando se quiere sacar solo el segundo elemento

const [, , trunks] = characterNames;//Cuando se quiere sacar solo el tercero elemento

console.log({p1, p2, p3, vegeta, trunks});


const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();

console.log(numbers, letters);

//Tarea
/*
La función debe llamarse useState.
Debe retornar un arreglo con dos elementos:
#1 - Un string (el valor inicial).
#2 - Una función anónima de flecha que:
Recibe un string.
Imprime ese string en consola.
---------------------------------------------
const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"
 */
const useState = (names: string) => {
    return [
        names, 
        (name: string) => {
            console.log(name);
        },
    ] as const
}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');