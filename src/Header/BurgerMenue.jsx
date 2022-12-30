import React from 'react'
import BgMenuLight from "./ImgLight/burgermenuicon.png";
import BgMenuDark  from "./ImgDark/Bg2.png";
import styles from  "./Header.module.css" ;
import { useLocation } from 'react-router-dom';

export default function BurgerMenue() {
  const  {pathname}=useLocation();
  return (
    <div className={styles.bgmenu}>
         {pathname==="/" ? <img src={BgMenuLight} alt="bg_menu" />: <img src={BgMenuDark} alt="bg_menu" />}
    </div>
  )
}
