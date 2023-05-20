import userAvatar from '../../assets/user-avatar.svg'
import arrowDown from '../../assets/arrow-down.svg'
import arrowTop from '../../assets/arrow-top.svg'
import scss from './Header.module.scss'
import { useState } from 'react'

function Header() {

    const [isOpenMenu, SetIsOpenMenu] = useState(false)

    return (
        <header className={scss.header}>
            <a className={scss.logo} href='/'>Awesome Kanban Board</a>
            <div className={scss.userMenu}>
                <img src={userAvatar} alt='User avatar'/>
                <img 
                className={scss.arrow}
                src={isOpenMenu ? arrowDown : arrowTop} 
                alt='User menu'
                onClick={() => {isOpenMenu ? SetIsOpenMenu(false) : SetIsOpenMenu(true)}}>
                </img>
               
                {isOpenMenu && 
                    <div className={scss.menu}>
                        <ul className={scss.list}>
                            <li><a href='##'>Profile</a></li>
                            <li><a href='##'>Log Out</a></li>
                        </ul>
                        <div className={scss.tail}></div>
                    </div> 
                }
            </div>
        </header>
    )
}

export default Header; 