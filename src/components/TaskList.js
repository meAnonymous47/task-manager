import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
