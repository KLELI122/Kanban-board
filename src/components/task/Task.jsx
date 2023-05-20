import scss from './Task.module.scss'
import {useNavigate} from "react-router-dom";


function Task(props) {
    const navigate = useNavigate();
    return (
       <div className={scss.task}
            onClick={() => navigate(`/tasks/${props.id}`)}>
            {props.name}
       </div>
    )
}

export default Task;