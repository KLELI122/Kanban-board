import scss from './List.module.scss'
import Button from '../button/Button';
import Task from '../task/Task';
import shortid from "shortid";
import { useState, useEffect, useRef} from 'react'




function List(props) {
    
    const {id, name, state, prevState, tasks, setTasks} = props;

    const [isInputShown, setIsInputShown] = useState(false);
    const [isSelectShown, setIsSelectShown] = useState(false);
    const [isDisabledBtn, setIsDisabledBtn] = useState(false);

    const selectRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        if (state !== 'backlog') {
            tasks.filter((task) => task.state === prevState).length ? setIsDisabledBtn(false) : setIsDisabledBtn(true)
        }
      }, [id, tasks, state, prevState]);

    const submitBtnClick = () => {
        if (state === 'backlog') {
            setIsInputShown(false)
            if (inputRef.current.value) {
                const task = {
                id: shortid.generate(),
                name: inputRef.current.value,
                state: "backlog",
                description: 'This task has no description'
                };
                setTasks([...tasks, task]);
            }
        } else {
            setIsSelectShown(false);
            tasks.find((task) => task.id === selectRef.current.value).state = state;
            setTasks([...tasks]);
        }         
    }

    return (
       <div className={scss.list}>
        <div className={scss.title}>{name}</div>
        <div className={scss.scroll}>
           <div className={scss.tasks}>
            
            {tasks.filter((task) => task.state === state).map(task => 
                <Task key={task.id} id={task.id} name={task.name}/>
            )}
        
            {isInputShown && 
            <div className={scss.inputWrapper}>
                <input 
                    className={scss.input} 
                    ref={inputRef}>
                </input>
            </div>}

            {isSelectShown  && 
            <select className={scss.select}
                ref={selectRef}>
                {tasks.filter((task) => task.state === (prevState)).map((task) =>
                <option className={scss.option} key={task.id} value={task.id}>{task.name}</option>)}
            </select>}

            {(!isInputShown && !isSelectShown) && <Button type = {'add'} disabled = {isDisabledBtn} onClick = {() => {
                state === 'backlog' ? setIsInputShown(true) : setIsSelectShown(true) }}/>}
            {(isInputShown || isSelectShown) && <Button type = {'submit'} onClick = {submitBtnClick}/>}
            
            </div>
        </div>   
      </div>
    )
}

export default List;