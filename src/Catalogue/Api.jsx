import React,{ useEffect, useState} from 'react'
import styles from "./Catalogue.module.css"
import Hart from "../Header/ImgLight/hearticon.png"

export default function Api() {
    const [ catalog,setCatalog]=useState([])
    useEffect(()=>{
        fetch("https://retoolapi.dev/f6lLtW/data")
        .then(response=>response.json())
        .then(clotes=>setCatalog(clotes))},[])
        return(
            <div className={styles.grid_container}>
                {catalog.length && catalog.map((item)=>(
                    <div key={item.id}>
                        <div className={styles.bg_div}>
                        <img src={Hart} alt="" className={styles.api_hart}/> 
                        </div>
                        <img src={item.img}alt="" className={styles.api_img} />
                        

                        
                        <h4 className={styles.api_title} >{item.product}</h4>
                        <h4 className={styles.api_price}>{item.price} грн</h4>
                        <h4 className={styles.api_size}>XXS XS S M L XL XXL</h4>
                        <div className={styles.color}>
                            <div className={styles.white}></div>
                            <div className={styles.blue}></div>
                            <div className={styles.bej}></div>
                        </div>
                        </div>
                ))}
            </div>
        )
}
