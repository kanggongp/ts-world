import styles from './HomeContainer.module.scss'
import BusinessRegistration from "@/components/views/Home/BusinessRegistration/BusinessRegistration";
import TipBox from "@/components/views/Home/TipBox/TipBox";
const HomeContainer = () => {

  /*
  gray 700 #6c6c6f
  gray 800 #424242
  gray 900: #212121
   */

  return (
    <div className={styles.container}>
      <TipBox/>
      {/* 추후 팝업 ui 추가 필요 */}
      <BusinessRegistration/>
    </div>
  );
};

export default HomeContainer;
