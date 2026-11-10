function greet(name:string):string{
    return `Hola ${name}`
}

const menssage = greet('Goku');

const greet2 = (name: string):string => `Hola ${name}`

const menssage2 = greet2('Vegueta');

console.log(menssage, menssage2);

interface User {
    uid: string;
    username: string;
}

function getUser():User{
    return {
        uid: 'ABC-123',
        username: 'El_Papi23'
    };
}

const getUser2 = ():User => ({
        uid: 'ABC-123',
        username: 'El_Papi23'
    });

const user = getUser();
const user2 = getUser2();
console.log(user, user2);

const myNumbers: number[] = [1,2,3,4,5];

//Funcion callback
myNumbers.forEach(function(value){
    console.log({value});
});


//Funcion de flecha
myNumbers.forEach((value) => {
    console.log(value);
})

myNumbers.forEach(console.log);