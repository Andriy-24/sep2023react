import {Characters} from "./components/RickAndMorty/Characters";
import {Simpsons} from "./components/Simpsons/Simpsons";

const App = () => {
    return (
        <div>
            <h1><center>Simpsons</center></h1>
            <Simpsons/>
            <h1><center>Rick and Morty</center></h1>
            <Characters/>
        </div>
    );
};

export {App};