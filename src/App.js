import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css'

const App = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div>
        <h1
          style={{
            color: '#333',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Список задач
        </h1>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
 