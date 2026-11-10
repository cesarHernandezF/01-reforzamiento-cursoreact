interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'César',
    lastName: 'Hernández',
    age: 36,
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    },
};

//const spiderman = ironman; Esto solamente hace que se apunte al mismo espacio en memoria, no se actualizaria la informacion
//const spiderman = {...ironman}; Operador spread pasa las properties (las rompe) de ironman a spiderman pero solo a primer nivel - Lo esparce

/*
const spiderman = structuredClone(ironman); //Para clonar completo "deepClone"

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.city = 'San José'

console.log(ironman, spiderman)
*/

console.log(ironman)