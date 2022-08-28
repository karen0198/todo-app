import { useDispatch, useSelector } from 'react-redux';
import '../Assets/styles/TodoItem.css'

export default function TodoItem(props) {
    const dispatch = useDispatch();

    const todos = useSelector(function(state) {
        return state.todos
    }) 

    const copyName = todos.filter((todo) => todo.name === props.todo.name)

    return (
        <div className={copyName.length > 1 ? "TodoItem copy" : "TodoItem"}>
            <input className='chechboxInput' type="checkbox"  onChange={(e) => {
                e.target.parentElement.classList.contains('checked') ? 
                e.target.parentElement.classList.remove('checked') :
                e.target.parentElement.classList.add('checked')
                dispatch({
                    type: 'update-todo',
                    payload: {
                        id: props.todo.id,
                        name: props.todo.name,
                        completed: e.target.checked,
                    }
                })

                
            }}/>
            <p className="todo-item__name" >{props.todo.name}</p>
            <button className="deleteTodo" onClick={(e) => {
                dispatch({
                    type: 'delete-todo',
                    payload: {
                        id: props.todo.id,
                        name: props.todo.name,
                        completed: e.target.checked,
                    }
                })
            }}>X</button>
        </div>
    );
}