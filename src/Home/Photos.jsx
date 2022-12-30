import React from 'react'
import Background from "../Images/Fon.png"
import styles from "./Homepage.module.css"

export default function Photos() {
  return (
    <div ><img  className={styles.photos} src={Background} alt="" /></div>
  )
}
