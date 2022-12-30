import React from 'react'
import styles from './Homepage.module.css'

export default function Collection() {
  return (
    <div>
        <div className={styles.collection_div}>
          <p className={styles.new_collection}>Новая коллекция</p>
          <hr className={styles.underline} />
          <div className={styles.btn_div}><button className={styles.new_btn}>Смотреть Новинки <span>&nbsp; &#8667;</span></button></div>
          
        </div>
    </div>
  )
}
