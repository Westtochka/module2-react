export const ToDoItem = ({ id, text, complited, handleDeleteTodo }) => {
  return (
    <>
      <li>
        <input type="checkbox" />
        <span>{text}</span>
        <button onClick={() => handleDeleteTodo(id)}>Delete</button>
      </li>
    </>
  );
};

// export default ToDoItem;
