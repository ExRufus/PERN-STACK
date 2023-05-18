import React,  {Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodos = () => {

  //delete todo function

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }

  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    try {
      const respone = await fetch("http://localhost:5000/todos");
      const jsonData = await respone.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message)
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos)
  return (
  <Fragment>
    {" "}
    <table className="table mt-5 text-center">
      <thead>
        <tr>
          <th>description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td><EditTodo todo={todo} /></td>
            <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </Fragment>
)};

export default ListTodos;