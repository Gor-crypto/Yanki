import React from 'react'
import styles from './Footer.module.css'
import '../App.css'
import { NavLink,Link } from "react-router-dom";


export default function Company() {
  return (
    <div>
        <h2 className={styles.footer_h2}>КОМПАНИЯ</h2>
        <ul className={styles.footer_item}>
                <li>
                    <NavLink className={styles.li_a} to='/blog'>
                       О нас
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.li_a} to='/contacts'>
                       Контакты
                    </NavLink>
                </li>
            </ul>
    </div>
  )
}
