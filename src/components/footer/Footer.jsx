import scss from './Footer.module.scss'

function Footer(props) {

    const {tasks} = props
    return (
        <footer className={scss.footer}>
            <div className={scss.counts}>
                <div>Active tasks: {tasks.filter(task => task.state === 'backlog').length}</div>
                <div>Finished tasks: {tasks.filter(task => task.state === 'finished').length}</div>
            </div>
            <div>{'Kanban board by <NAME>, <YEAR>'}</div>
        </footer>
    )
}

export default Footer;