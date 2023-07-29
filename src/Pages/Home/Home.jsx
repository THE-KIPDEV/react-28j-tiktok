import React, { useState, useEffect } from "react";
import { getTodos } from "../../Api/Todo";

import { convertDate } from "../../Helper/convertDate";
import TodoCard from "../../Components/TodoCard/TodoCard";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const todos = await getTodos();
        console.log(todos)
        setTodos(todos);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des todos :", error);
      }
    }
  
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Bonjour </h1>

      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default Home;
