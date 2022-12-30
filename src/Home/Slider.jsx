import React from 'react'
import styles from './Homepage.module.css'
import one from "../img/Rectangle 7.jpg";
import two from "../img/Rectangle 9.jpg"
import tree from "../img/Rectangle 10.jpg"
import four from "../img/Rectangle 11.jpg"

export default function Slider() {
  return (
    <div className={styles.grid_container}>
        <div className={styles.grid_item}>
            <img src={one} alt="" />        
            <p className={styles.grid_item_p}>Шубы</p>
        </div>
        <div className={styles.grid_item}>
            <img src={two} alt="" />        
            <p className={styles.grid_item_p}>Парки</p>
        </div>
        <div className={styles.grid_item}>
            <img src={tree} alt="" />       
            <p className={styles.grid_item_p}>Пальто</p>
        </div>
        <div className={styles.grid_item}>
            <img src={four} alt="" />
            <p className={styles.grid_item_p}>Куртки</p>
        </div>
    </div>
  );
}
