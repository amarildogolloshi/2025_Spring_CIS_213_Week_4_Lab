import { useState } from "react";


const Form = (props) => {
    const [inputTodoItem, setInputTodoItem] = useState('');

    const handleInputTodoChange = (event) => {
        setInputTodoItem(event.target.value);
    }

    let handelSubmit = (event) => {
        event.preventDefault();
        console.log(inputTodoItem)
        props.addTodo(inputTodoItem);
        setInputTodoItem("");
    }

    return (
        <form onSubmit={handelSubmit}>
            <label>Todo:</label>
            <input 
                type="text" 
                value={inputTodoItem}
                onChange = {handleInputTodoChange}
            />
            <button type="submit">Add</button>
        </form>
    );

};

export default Form;