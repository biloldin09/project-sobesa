import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleImportant, editTask } from '../pages/tasks/tasksSlice';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(task.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editTask({ id: task.id, text: input }));
    setIsEditing(false);
  };

  return (
    <div
      style={{
        background: task.important ? 'lightyellow' : '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
    >
      {isEditing ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'stretch',
            width: '100%',
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введите текст задачи"
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '100%',
              boxSizing: 'border-box',
            }}
          />
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'space-between',
            }}
          >
            <button
              onClick={handleSave}
              style={{
                backgroundColor: '#4CAF50', 
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '10px 15px',
                cursor: 'pointer',
                fontSize: '14px',
                flex: '1',
                transition: 'background-color 0.3s',
              }}
            >
              Сохранить
            </button>
            <button
              onClick={() => setIsEditing(false)}
              style={{
                backgroundColor: '#FF5722', 
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '10px 15px',
                cursor: 'pointer',
                fontSize: '14px',
                flex: '1',
                transition: 'background-color 0.3s',
              }}
            >
              Отмена
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <span
            style={{
              flex: '1',
              fontSize: '16px',
            }}
          >
            {task.text}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            style={{
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '10px 15px',
              cursor: 'pointer',
              fontSize: '14px',
              flex: '1',
              transition: 'background-color 0.3s',
            }}
          >
            Изменить
          </button>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            style={{
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '10px 15px',
              cursor: 'pointer',
              fontSize: '14px',
              flex: '1',
              transition: 'background-color 0.3s',
            }}
          >
            Удалить
          </button>
          <button
            onClick={() => dispatch(toggleImportant(task.id))}
            style={{
              backgroundColor: task.important ? '#FFC107' : '#FFEB3B',
              color: task.important ? 'black' : '#000',
              border: 'none',
              borderRadius: '4px',
              padding: '10px 15px',
              cursor: 'pointer',
              fontSize: '14px',
              flex: '1',
              transition: 'background-color 0.3s',
            }}
          >
            {task.important ? 'Снять важность' : 'Сделать важным'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
