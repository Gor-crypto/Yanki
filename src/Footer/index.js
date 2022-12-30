import React from "react";
import Buyer from "./Buyer";
import Company from "./Company";
import Contacts from "./Contacts";
import Usefull from "./Usefull";
import styles from "./Footer.module.css"
import Copywriting from "./Copywriting";


export default function Footer() {
  return (
    <div>
    <div className={styles.footer}>
        <Company/>
        <Usefull/>
        <Buyer/>
        <Contacts/>
       
    </div>
    <div>
          <Copywriting/>
    </div>
    </div>
  )
}
