function Todolist({ task, index, toggleTask, deleteTask }) {
  return (
    <li>
      <span style={{ textDecoration: task.checked ? "line-through" : "none" }}>
        {task.text}
      </span>

      <input 
        type="checkbox" 
        checked={task.checked}
        onChange={() => toggleTask(index)}
      />

      <button onClick={() => deleteTask(index)}> Delete</button>
    </li>
  );
}

export default Todolist;
