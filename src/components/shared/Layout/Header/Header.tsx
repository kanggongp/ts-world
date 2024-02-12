import React from 'react';
import styles from './Header.module.scss'
import {useRouter} from "next/router";

const Header = () => {

  const router = useRouter()

  const pushHomePage = async () => {
    await router.push({
      pathname: '/'
    })
  }

  const pushCertificate = async () => {
    await router.push({
      pathname: '/certification'
    })
  }

  return (
    <div className={styles.container}>
      <span className={styles.title} onClick={pushHomePage}>ainjob</span>
      <span className={styles.subTitle}>기업 회원가입</span>
      <span className={styles.rightSpan} onClick={pushCertificate}>자격증</span>
    </div>
  )

    // 예전 헤더
    // return (
    //     <div className={styles.container}>
    //         <div className={styles.content}>
    //             <h1>Stattoo</h1>
    //             <div className={styles.list}>
    //                 <h2>HOME</h2>
    //                 <h2>PROFILE</h2>
    //                 <h2>BLOG</h2>
    //                 <h2>ABOUT</h2>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Header;