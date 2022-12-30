import styles from  "./Header.module.css" ;
import YankiLight from "./ImgLight/YANKI.png"
import YankiDark from "./ImgDark/Yankilogo2.png"
import { useLocation } from "react-router-dom";


export default function Logo() {
  const  {pathname}=useLocation()
  return (
    <div>
      {pathname==="/" ? <img src={YankiLight} alt="logo" />: <img src={YankiDark} alt="logo" />}
    </div>
  )
}
