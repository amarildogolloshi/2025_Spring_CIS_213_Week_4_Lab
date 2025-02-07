import { useRef, useState } from "react";
import List from "./List";
import Form from "./Form";


const Todo = () => {    
    const [todos, setTodos] = useState([
        {id:1, text:"sleep", isCompleted:false},
        {id:2, text:"study", isCompleted:false},
        {id:3, text:"eat dinner", isCompleted:false},
        {id:4, text:"go to gym", isCompleted:false},
        {id:5, text:"shopping", isCompleted:false},
    ])
    
    const addTodo = (text) => {
        const todoItem = {
            id: todos.length + 1,
            text: text,
            isCompleted: false
        }
        setTodos([...todos, todoItem ])
    }

    return (
        <div className="todo">
            <Form addTodo={addTodo} />
            <List todos={todos} />
        </div>

    );

};

export default Todo;