import { heroes, Owner, type Hero } from "../data/heroes.data"

const getHeroById = (id: number): Hero | undefined =>{
    const hero = heroes.find( (hero) => {
        return hero.id === id;
    })

    /*if( !hero ){
        throw new Error(`No existe el héroe con el id ${ id }`);
    }*/

    return hero;
}

console.log(getHeroById(1));


//YO LO HICE DE ESTA MANERA
let array:Hero[] = [];

export const getHeroesByOwner = (owner: Owner): Hero[]=> {
    heroes.forEach(function(value){
        if(value.owner === owner){        
            array.push(value);
        }
    });
    return array;
}

//Solución del profesor
export const getHeroesByOwner2 = (owner: Owner) => {
    const heroesByOwner = heroes.filter( 
        hero => hero.owner === owner
    )

    return heroesByOwner;
}