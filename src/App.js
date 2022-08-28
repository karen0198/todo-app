import './App.css';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TodoList from './components/TodoList';


function App() {

  const todos = useSelector(function(state) {
    return state.todos
  }) 
  
  const todosLength = todos.length;
  const completedLength = todos.filter((todo) => todo.completed).length

  return (
    <div className="App">
      <h1>Todo <span>App</span></h1>
      <Form />
      <div className="TodoList">
        {
          todos.map((todo) => {
            return(<TodoItem todo={todo} key={todo.id}/>)
          })
        }
      </div>
      <Footer  todos={todos} completedLength={completedLength} todosLength={todosLength} />
    </div>
  );
}

export default App;
