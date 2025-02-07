const Item = ({todo}) => {

    return (
        <li key={todo.id}>{todo.text}</li>
    );

};

export default Item;