import React from 'react'
import styles from './Contacts.module.css'

export default function Telefoon() {
  return (
    <div>
         <p className={styles.icon_p}>По телефону</p>
         <div /*  className={styles.icons}> */>
           <a target="_blank" className={styles.li_a} href="https://www.instagram.com/yankifashion/"><p>+38(067) 158 82 66</p></a>      
           <a target="_blank" className={styles.li_a} href="https://telegram.org/"><p>+38(073) 226 39 81</p></a>    
         </div>
    </div>
  )
}
