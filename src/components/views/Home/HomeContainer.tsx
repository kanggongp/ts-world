import styles from './HomeContainer.module.scss'
import BusinessRegistration from "@/components/views/Home/BusinessRegistration/BusinessRegistration";
const HomeContainer = () => {

  /*
  gray 700 #6c6c6f
  gray 800 #424242
  gray 900: #212121
   */

  return (
    <div className={styles.container}>
      <BusinessRegistration/>
    </div>
  );
};

export default HomeContainer;
