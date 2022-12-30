import React from 'react'
import styles from './Contacts.module.css'

export default function Email() {
  return (
    <div>
         <p className={styles.icon_p}>По почте</p>
         <div /*  className={styles.icons}> */>
           <a target="_blank" className={styles.li_a} href="#"><p>example@gmail.com</p></a>          
         </div>
    </div>
  )
}
