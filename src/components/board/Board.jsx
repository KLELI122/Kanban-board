import scss from './Board.module.scss'
import List from '../list/List';

function Board(props) {
    
    const {tasks, setTasks} = props

    const listTypes = [
        { id: 1, name: "backlog", state: "backlog" },
        { id: 2, name: "ready", state: "ready" },
        { id: 3, name: "in progress", state: "inProgress" },
        { id: 4, name: "finished", state: "finished" },
    ];
    
    return (
        <div className={scss.board}>
            {listTypes.map((list) =>
                    <List 
                        key={list.id} 
                        id={list.id} 
                        name={list.name} 
                        state={list.state}
                        prevState={list.state !== 'backlog' && listTypes.find(item => item.id === list.id - 1).state} 
                        tasks={tasks} 
                        setTasks={setTasks}
                    />
            )}
       </div>
       
    )
}

export default Board;