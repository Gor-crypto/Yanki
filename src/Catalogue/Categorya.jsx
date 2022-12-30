import React,{ useEffect, useState} from 'react'
import styles from "./Catalogue.module.css"
import { Link } from 'react-router-dom'

export default function Categorya() {
    const [ categorya,setCategories]=useState([])
    useEffect(()=>{
        fetch("https://retoolapi.dev/5wtipM/categories")
        .then(response=>response.json())
        .then(categorya=>setCategories(categorya))},[])
        return(
            <div>
       {categorya.length && categorya.map((item)=>(
         <div key={item.id}>
          <Link to = {`${item.name}`}>{item.categories}</Link>
           </div>
                ))}
            </div>
        )
}