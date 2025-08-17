import { useState } from 'react';
import Todolist from './Todolist';

function App() {
  const [task, setTask] = useState('');
  const [add, setAdd] = useState([]);


  const addTask = () => {
    setAdd([...add, { text: task, checked: false }]);
    setTask("");
  };

 
  const toggleTask = (index) => {
    const newTasks = [...add];
    newTasks[index].checked = !newTasks[index].checked;
    setAdd(newTasks);
  };

 
  const deleteTask = (index) => {
    setAdd(add.filter((task, i) => i !== index));
  };

  return (
    <div>
      <input 
        onChange={(event) => setTask(event.target.value)} 
        type="text" 
        placeholder="Enter your task" 
        value={task}
      />

      <button onClick={addTask}>Add Task</button>
      <button onClick={() => setAdd([])}>Clear</button>

      <h4>Tasks:</h4>
      <ul>
        {add.map((task, index) => (
          <Todolist 
            key={index} 
            task={task} 
            index={index}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
