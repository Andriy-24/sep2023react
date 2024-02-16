import {Character} from "./components/Character";

const App = () => {
    const Simpsons = [
        {
            id: 1,
            name: 'Homer',
            image: 'https://media.npr.org/assets/img/2014/05/08/simp2006_homerarmscrossed_f_custom-ec94cc7a10463aa8260b2c5a9a3ebea29c7ecbfe-s1100-c50.jpg'
        },
        {
            id: 2,
            name: 'Marge',
            image: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            id: 3,
            name: 'Bart',
            image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
        },
        {
            id: 4,
            name: 'Lisa',
            image: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'
        },
        {
            id: 5,
            name: 'Meggie',
            image: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
        }
    ]
    const Characters = [
        {
            id:1,
            name:"Rick Sanchez",
            status:"Alive",
            species:"Human",
            gender:"Male",
            image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        },
        {
            id:2,
            name:"Morty Smith",
            status:"Alive",
            species:"Human",
            gender:"Male",
            image:"https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        },
        {
            id:3,
            name:"Summer Smith",
            status:"Alive",
            species:"Human",
            gender:"Female",
            image:"https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        },
        {
            id:4,
            name:"Beth Smith",
            status:"Alive",
            species:"Human",
            gender:"Female",
            image:"https://rickandmortyapi.com/api/character/avatar/4.jpeg"
        },
        {
            id:5,
            name:"Jerry Smith",
            status:"Alive",
            species:"Human",
            gender:"Male",
            image:"https://rickandmortyapi.com/api/character/avatar/5.jpeg"
        }
    ]
    return (
        <div>
            <h1>Simpsons</h1>
            {Simpsons.map(character=><Character character={character} key={character.id}/>)}
            <h1>Rick and Morty</h1>
            {Characters.map(character=><Character character={character} key={character.id}/>)}
        </div>
    );
};

export {App};