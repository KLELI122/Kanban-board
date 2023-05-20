import scss from './Description.module.scss'
import {useParams, useNavigate} from 'react-router-dom'
import {useRef} from 'react'



function Description(props) {
    const navigate = useNavigate();
    const {tasks, setTasks} = props
    const {id} = useParams();
    
    const task = tasks.find(task => task.id === id)
    

    const nameRef = useRef();
    const descRef = useRef();
   

    const changeTask = () => {
        
		const updatedTasks = tasks.map(task => {
			if (task.id === id) {
				return {...task, name: nameRef.current.value, description: descRef.current.value}
			}
			return task
		})
		setTasks(updatedTasks)
    }

 

    return (
        <div className={scss.wrapper}>
            <textarea 
                className={scss.title} 
                value={task.name}
                ref={nameRef}
                onChange={changeTask}>
                
            </textarea>
            <textarea 
            className={scss.desc} 
            value={task.description}
            ref={descRef}
            onChange={changeTask}>
            </textarea>
            <button className={scss.close} onClick={() => navigate(-1)}></button>
        </div>
    )
}

export default Description;