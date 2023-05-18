import React, { Fragment } from 'react';
import './App.css';

//components
import InputTodo from './components/inpotTodo';
import ListTodos from './components/ListTodo';

function App() {
  return (
    <Fragment>
      <div className="container"> 
        <InputTodo /> 
        <ListTodos />
      </div>
    </Fragment>
  );
};

export default App;