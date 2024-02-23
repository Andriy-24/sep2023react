import {todoService} from "../../services/todoService";
import {useEffect, useState} from "react";
import {Todo} from "./Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.getAll().then(({data})=> setTodos(data))
    }, []);

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};