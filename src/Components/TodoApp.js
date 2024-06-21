// src/components/TodoApp.js
import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTodos = [...todos, { task, completed: false }];
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => (
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoApp;
