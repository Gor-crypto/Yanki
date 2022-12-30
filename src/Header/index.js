import React  from "react";
import BurgerMenue from "./BurgerMenue";
import Logo from "./Logo";  
import styles from  "./Header.module.css" ;
import Icons from "./Icons";
import Navbar from "./Navbar"

export default function Header() {
    return (
      <header>
          <section className={styles.header}>
             <div className={styles.header__parent}>
              <div className={styles.menu_item}>
                
                  <BurgerMenue/>
                  <Navbar/>
                
                <Logo/>
                <Icons/>
                </div>
                </div>
          </section>
      </header>
    )
  }
  