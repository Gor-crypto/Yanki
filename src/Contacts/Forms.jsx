import React from 'react'
import styles from './Contacts.module.css'

export default function Forms() {
  return (
    <div>
        <div className={styles.forms_div}>
            <form action="">
            <input class="info_input_changes" type="text" placeholder="&ensp;Ваш e-mail* " name="type"/>
            </form>
            <div className={styles.center_btn}>
              <button class={styles.btn_form}>ПОДПИСАТЬСЯ</button>
            </div>
        </div>
    </div>
  )
}
