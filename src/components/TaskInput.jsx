import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../pages/tasks/tasksSlice';

const TaskInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите задачу"
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginBottom: '10px',
          fontSize: '16px',
        }}
      />
      <button
        onClick={handleAddTask}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 15px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s',
        }}
      >
        Добавить
      </button>
    </div>
  );
};

export default TaskInput;
