import React from 'react';
// import SearchLight from './ImgLight/searchicon.png';
// import ManLight from './ImgLight/mensicon.png';
// import HartLight from './ImgLight/hearticon.png';
// import BasketLight from './ImgLight/basketicon.png';
// import SearchDark from './ImgDark/Search2.png';
// import ManDark from './ImgDark/Men2.png';
// import HartDark from './ImgDark/Heart2.png';
// import BasketDark from './ImgDark/Basket2.png';
import styles from  "./Header.module.css" ;
import { useLocation } from "react-router-dom";


export default function Icons() {
  const  {pathname}=useLocation()
  return (
    <div className={styles.icon_div}>
      <div className={`${styles.light_item_1} ${pathname!="/" && styles.dark_item_1}`}>
      &nbsp;
      </div>
      <div className={`${styles.light_item_2} ${pathname!="/" && styles.dark_item_2}`}>
      &nbsp;
      </div>
      <div className={`${styles.light_item_3} ${pathname!="/" && styles.dark_item_3}`}>
      &nbsp;
      </div>
      <div className={`${styles.light_item_4} ${pathname!="/" && styles.dark_item_4}`}>
      &nbsp;
      </div>
      
    </div>
  )
}

