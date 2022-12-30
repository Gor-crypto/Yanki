import React from 'react';
import ContactMenu from './ContactMenu';
import Email from './Email';
import HeaderContact from './HeaderContact';
import Navigation from './Navigation';
import Office from './Office';
import Telefoon from './Telefoon';
import styles from './Contacts.module.css'
import FormsTitel from './FormsTitel';
import Forms from './Forms';
import FormDis from './FormDis';



export default function Contacts() {
  return (
    <div>
      <div>
          <Navigation/>
          <HeaderContact/>
          <div className={styles.contact_main}>
          <ContactMenu/>
          <Telefoon/>
          <Email/>
          <Office/>
          </div>
          <div>
            <FormsTitel/>
            <Forms/>
            <FormDis/>
          </div>
      </div>
    </div>
  )
}