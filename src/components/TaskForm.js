import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ id: Date.now(), text: task, completed: false });
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter a new task" 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
