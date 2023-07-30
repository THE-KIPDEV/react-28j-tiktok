import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodoById } from "../../Api/Todo";

function Todo() {
  const { id } = useParams();
  const [todo, setTodo] = useState({});

  useEffect(() => {
    async function fetchTodoById(id) {
      try {
        setTodo(await getTodoById(id));
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des todos :",
          error
        );
      }
    }
    fetchTodoById(id);
  }, [id]);
  return (
    <div>
      <h1>{todo.title}</h1>
      <div class="todo">{todo.description}</div>
    </div>
  );
}

export default Todo;
