import React from 'react'
import styles from './Footer.module.css'
import Insta from '../Icons/Vector.png'
import Telegram from '../Icons/Vector (8).png'


export default function Contacts() {
  return (
    <div>
         <h2 className={styles.footer_h2}>КОНТАКТЫ</h2>
         <div className={styles.icons}>
           <a target="_blank" className={styles.li_a} href="https://www.instagram.com/yankifashion/"><img src={Insta} alt="" /></a>      
           <a target="_blank" className={styles.li_a} href="https://telegram.org/"><img src={Telegram} alt="" /></a>    
         </div>
         <ul className={styles.footer_item}>
            <li > <a className={styles.li_a} target="_blank" href="https://www.didww.com/phone-systems/">+38(073) 096 36 44</a> </li>
            <li > <a className={styles.li_a} target="_blank" href="https://accounts.google.com/v3/signin/identifier?dsh=S-217426690%3A1671199267574237&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AeAAQh5hDdaNsSG3sJ9H3GGq0QVhHpxsvmnKKBGgPZ-KL8qXNHiKgNHrDeb0mqA9FNHUgrUSCvPi1g">info@yanki.com</a> </li>
         </ul>
    </div>
  )
}
