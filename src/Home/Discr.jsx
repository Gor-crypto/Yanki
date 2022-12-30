import React from 'react'
import styles from "./Homepage.module.css"


export default function Discr() {
  return (
    <div className={styles.center}>
        <div className={styles.center_dis}>
            <p className={styles.center_p}>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих <br />
                персональных данных и ознакомлен(а) с условиями конфиденциальности.</p>
        </div>
    </div>
  )
}
