import React from 'react'
import styles from './Contacts.module.css'

export default function Office() {
  return (
    <div>
         <p className={styles.icon_p}>Наш офис</p>
         <div /*  className={styles.icons}> */>
           <a target="_blank" className={styles.li_a} href="https://www.google.com/maps/place/Batumska+St,+18,+Kyiv,+%D5%88%D6%82%D5%AF%D6%80%D5%A1%D5%AB%D5%B6%D5%A1,+02000/@50.4035158,30.5019724,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf32a789c767:0x7448138212916e4a!8m2!3d50.4035158!4d30.5019724"><p>г. Киев, улица Батумская, 18</p></a>          
         </div>
    </div>
  )
}
