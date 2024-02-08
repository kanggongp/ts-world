import React from 'react';
import styles from './TestContainer.module.scss'
import Image from "next/image";

const TestContainer = () => {

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
        deploy test23232
      </div>
    </div>
  );
}

export default TestContainer;