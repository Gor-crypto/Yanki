import React from "react";
import styles from './Catalogue.module.css'

export default function CatalogFilter() {
  return (
    <div >
      <div className={styles.nav}>
        <p>
          Главная <span> &#8250; </span> Контакты
        </p>
      </div>
      <div className={styles.parent_filter}>
      <h3>Каталог</h3>
        <div className={styles.select}>
        <select name="" id={styles.membership}>
          <option value="">Размер</option>
          <option value="">XXS</option>
          <option value="">XS</option>
          <option value="">S</option>
          <option value="">M</option>
          <option value="">L</option>
          <option value="">XL</option>
          <option value="">XXL</option>
        </select>
        <select name="" id={styles.membership}>
          <option value="">Цвет</option>
          <option value="" className={styles.black}></option>
          <option value=""></option>
          <option value="" className={styles.bej}></option>
        </select>
        <select name="" id={styles.mem}>
          <option value="">Цена</option>
          <option value="">100-3000 грн</option>
          <option value="">3100-7000 грн</option>
          <option value="">7000-15000 грн</option>
          <option value="">15000-30000 грн</option>
          <option value="">30000-6000 грн</option>
        </select>
        <select name="" id={styles.membership}>
          <option value="">Сортировать по</option>
          <option value="">Размер</option>
          <option value="">Цвет</option>
          <option value="">Цена</option>
        </select>
        </div>
      </div>
    </div>
  );
}
