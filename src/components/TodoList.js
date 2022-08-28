import TodoItem from "./TodoItem";
import '../Assets/styles/TodoList.css'

export default function TodoList(props) {
    const todos = props.todos;

    return (
        <div className="TodoList">
            <TodoItem />
        </div>
    );
}