import React from 'react'
import styles from "./Homepage.module.css"

export default function Forms() {
  return (
    <div className={styles.form}>
        <form action="">
            <label htmlFor="email">
           <input type="email" name="email" placeholder="Ваш e-mail*"/></label>
        </form>
    </div>
  )
}
