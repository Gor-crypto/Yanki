import React from 'react'
import styles from './Contacts.module.css'

export default function Navigation() {
  return (
    <div>
        <div className={styles.nav}>
            <p>Главная <span> &#8250; </span> Контакты</p>
        </div>
    </div>
  )
}
