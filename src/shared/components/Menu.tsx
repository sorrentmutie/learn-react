import { FC, useState } from "react"
import { MenuItem, MenuProps } from "../models/menuItem";
import { Link } from "react-router-dom";

export const Menu: FC<MenuProps> = ({menuItems, onMenuItemClicked}) => {
    const [menuState, menuStateChange] = useState(false)
    const toggle = ()=> menuStateChange(!menuState);
    const menuClass = 
       menuState ?
        "container-fluid bg-dark":
        "container-fluid bg-primary" ;

    return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div className={menuClass} onClick={() => toggle()}
      onMouseOver={() =>  menuStateChange(true)}
      onMouseOut={() => menuStateChange(false)}
    >
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">

            {
                menuItems.map( (menuItem: MenuItem) => {
                    return (
                        <li key={menuItem.key} className="nav-item">
                            <Link to={menuItem.url}>
                                <div className="nav-link"> {menuItem.text}</div>
                            </Link>
                        </li>            
                    )
                })
            }
        </ul>
        </div>
    </div>
    </nav>   
    )
}