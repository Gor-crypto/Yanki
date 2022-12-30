import React from "react";
import '../App.css'
import { NavLink,Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css"


function Navbar() {
    const  {pathname}=useLocation()
    return (
        <div className={styles.navbar}>
            <ul className={`${styles.menu_item_} ${pathname!="/" && styles.menu_item_colors}`}>
                <li>
                    <NavLink className={styles.li} to='/new'>
                        New
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.li} to='/catalogue'>
                        КАТАЛОГ
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.li} to='/blog'>
                        О НАС   
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;