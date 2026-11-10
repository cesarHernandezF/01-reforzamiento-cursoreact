const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

/*
const name = person.name;
const age = person.age;
const key = person.key;
*/

//Se puede renombrar la propiedad despues de obtenerla ironmanName
const { name:ironmanName, age, key } = person;
console.log({ironmanName, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({name, age, key, rank}: Hero) => {
    return {
        keyName: key,
        user: {
            name: name,
            age: age,
        },
        rank: rank
    }
}

const context = useContext(person);

console.log(context);

const {rank, keyName, user} = useContext(person);
const {name} = user;

console.log({rank, keyName, name});