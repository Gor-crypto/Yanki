import React from 'react';
import Api from './Api';
import CatalogFilter from './CatalogFilter';
import styles from "./Catalogue.module.css"
import Categorya from './Categorya';



export default function Catalouge() {
  return (
    <div>
      <CatalogFilter/>
      <div className={styles.row}>
         <Categorya/>
         <Api/>
      </div>
    </div>
  )
}
