import React from 'react'
import styles from './Footer.module.css'
import '../App.css'
import { NavLink,Link } from "react-router-dom";


export default function Usefull() {
  return (
    <div>
         <h2 className={styles.footer_h2}>ПОЛЕЗНОЕ</h2>
         <ul className={styles.footer_item}>
                <li>
                    <NavLink className={styles.li_a} to='/delivery'>
                       Оплата и доставка
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.li_a} to='/returnconditions'>
                       Условия возврата
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.li_a} to='/bonussystem'>
                      Бонусная система  
                    </NavLink>
                </li>
            </ul>
    </div>
  )
}
