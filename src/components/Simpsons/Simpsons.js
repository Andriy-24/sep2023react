import {Simpson} from "./Simpson";

const Simpsons = () => {
    let SimpsonsArray = [
        {
            name: 'Homer',
            image: 'https://media.npr.org/assets/img/2014/05/08/simp2006_homerarmscrossed_f_custom-ec94cc7a10463aa8260b2c5a9a3ebea29c7ecbfe-s1100-c50.jpg'
        },
        {
            name: 'Marge',
            image: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            name: 'Bart',
            image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
        },
        {
            name: 'Lisa',
            image: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'
        },
        {
            name: 'Meggie',
            image: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
        },
    ];
    return (
        <div>
            {SimpsonsArray.map((simpson, index) => <Simpson key={index} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};