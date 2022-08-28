import { useDispatch } from 'react-redux';
import '../Assets/styles/Footer.css'

export default function Footer(props) {

    const dispatch = useDispatch()

    return (
        <div className="Footer">
            <div className="completedInfo">
                <p className="completedCount">{props.completedLength} /</p> 
                <p className="todosCount"> {props.todosLength}</p>
            </div>
            <button className=" btn deleteAll" onClick={(e) => {
                dispatch({
                    type: 'delete-all',
                    payload: [
                        
                    ]
                })
            }}>Delete All</button>
            <button className=" btn deleteCompleted" onClick={(e) => {
                dispatch({
                    type: 'delete-completed',
                    payload: [
                        
                    ]
                })
            }}>Delete Completed</button>
        </div>
    );
}