import Item from "./Item";

const List = ({todos}) => {

    return (
        <div className="todo-list">
            <ul>
                { 
                    todos.map( (todo) => (
                        <Item key={todo.id} todo={todo}/>
                    ))       
                }
            
            </ul>
        </div>
    );

};

export default List;