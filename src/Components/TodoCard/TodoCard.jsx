




import { Link } from "react-router-dom";
import { convertDate } from "../../Helper/convertDate";
import styles from "./TodoCard.module.scss";

function TodoCard({ todo }) {
  return (
    <div className={styles.card}>
      <Link to={'todo/' + todo.id } className={styles.title}>{todo.title}</Link><br/>
    </div>
  );
}

export default TodoCard;
