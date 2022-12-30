import React from 'react'
import styles from './Footer.module.css'
import '../App.css'
import { NavLink,Link } from "react-router-dom";


export default function Buyer() {
  return (
    <div>
         <h2 className={styles.footer_h2}>ПОКУПАТЕЛЮ</h2>
         <ul className={styles.footer_item}>
                <li>
                    <NavLink className={styles.li_a} to='/favorites'>
                       Избранное
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.li_a} to='/publicoffer'>
                       Публичная оферта
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.li_a} to='/privacypolicy'>
                       Политика конфиденциальности  
                    </NavLink>
                </li>
            </ul>
    </div>
  )
}
