import scss from './Main.module.scss'
import Board from '../board/Board';
import Description from '../description/Description';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function Main(props) {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Board {...props}/>
        },
        {
            path: "/tasks/:id",
            element: <Description {...props}/>
        }
        ])
        
    return (
            <main className={scss.main}>
                 <RouterProvider router={router}/>
            </main>
    )
}

export default Main;