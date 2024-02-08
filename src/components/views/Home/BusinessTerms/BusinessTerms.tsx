import React, {useState} from 'react';
import styles from './BusinessTerms.module.scss'
import CheckBox from "@/components/shared/CheckBox/CheckBox";

const BusinessTerms = () => {

  const [allTerms, setAllTerms] = useState(false)
  const [essential1,setEssential1] = useState(false)

  return (
    <div className={styles.container}>
      <span className={styles.termTitle}>약관</span>
      <div className={styles.boxDiv}>
        <div className={styles.topCheckDiv}>
          <CheckBox/>
          <div className={styles.textDiv}>
            <span className={styles.textTitle}>전체 동의</span>
            <span className={styles.textContent}>마케팅 정보 수신 동의(이메일,SMS/MMS)(선택) 동의를 포함합니다.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessTerms;