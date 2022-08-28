import { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../Assets/styles/Form.css'

export default function Form() {

    const dispatch = useDispatch();

    const [todoName, setTodoName] = useState('');
    
    return (
        <div className="Form">
            <form onSubmit={(e) => {
                e.preventDefault();
                {
                    todoName ? dispatch({
                        type: 'add-todo',
                        payload: {
                            id: Math.random(),
                            name: todoName,
                            completed: false,
                        }
                    }) : e.preventDefault();
                }
                setTodoName('')
            }}>
                <input type="text" placeholder="Todo Name" value={todoName} onChange={(e) => {
                    setTodoName(e.target.value)
                }}/>
                <button className="btn addTodo" onClick={() => {
                }}>Add</button>
            </form>
        </div>
    );
}