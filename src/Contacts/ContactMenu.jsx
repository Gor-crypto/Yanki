import React from 'react'
import styles from './Contacts.module.css' 
import Telegram from '../Icons/Vector.png'
import Insta from '../Icons/Vector (8).png'

export default function ContactMenu() {
  return (
    <div>
         <p className={styles.icon_p}>В социальных сетях</p>
         <div className={styles.icons}>
           <a target="_blank" className={styles.li_a} href="https://www.instagram.com/yankifashion/"><img src={Insta} alt="" /></a>      
           <a target="_blank" className={styles.li_a} href="https://telegram.org/"><img src={Telegram} alt="" /></a>    
         </div>
    </div>
  )
}
