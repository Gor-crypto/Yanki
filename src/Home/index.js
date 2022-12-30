import styles from './Homepage.module.css';
import Category from './Category';
import Slider from './Slider';
import BeTheFirst from './BeTheFirst';
import Forms from './Forms';
import FormBtn from './FormBtn';
import Discr from './Discr';
import Collection from './Collection';
import Photos from './Photos';




function Home() {
  return (
        <div>
          <Photos/>
          <Collection/>
             <div className={styles.idk}>
               <Category/>
               <Slider/>
               <BeTheFirst/>
               <Forms/>
               <FormBtn/>
               <Discr/>
             </div>
        </div>
        
        
  );

}

export default Home;