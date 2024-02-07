import styles from './HomeContainer.module.scss'
import Image from "next/image";
const HomeContainer = () => {

  const imgSrc = 'https://gongpark-toyproject.s3.ap-northeast-2.amazonaws.com/stattoo/home/stattoo1.png'

  return (
    <div className={styles.container}>
      <div className={styles.mainBanner}>
        <Image
          fill
          src={imgSrc}
          alt={'img'}
        />
      </div>
      <div className={styles.midContainer}>
        deploy test
      </div>
    </div>
  );
};

export default HomeContainer;
