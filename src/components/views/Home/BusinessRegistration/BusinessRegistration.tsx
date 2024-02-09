import React, {createContext, useContext, useEffect, useState} from 'react';
import styles from './BusinessRegistration.module.scss'
import BusinessTerms from "@/components/views/Home/BusinessTerms/BusinessTerms";
import {useTermsCheckBox} from "@/components/views/Home/BusinessTerms/BusinessTerms.hooks";
import {createAsyncLocalStorage} from "next/dist/client/components/async-local-storage";

export const TermsContext = createContext({
  essentialCheck: false,
  handleEssentialCheck: () => {},
})

const BusinessRegistration = () => {

  /*
  gray 800 #424242
  gray 900: #212121
   */

  const [essentialCheck, setEssentialCheck] = useState(false)


  const clickFunc = () => {
    console.log(essentialCheck)
  }

  const handleEssentialCheck = () => {
    setEssentialCheck((prev) => !prev)
  }

  return (
    <TermsContext.Provider value={{essentialCheck, handleEssentialCheck}}>
      <div className={styles.container}>
        <span className={styles.title}>아인잡에서 채용을 시작하세요!</span>
        <div className={styles.registrationDiv}>
          {/* 사업자등록 번호 */}
          <div className={styles.registrationNumDiv}>
            <div className={styles.numTop}>
              <span className={styles.numTitle}>사업자등록번호</span>
              <span className={styles.noNum}>사업자번호가없어요</span>
            </div>
            <input
              className={styles.numInput}
              type={'text'}
              placeholder={'사업자 등록번호 직접입력'}
            />
          </div>
          {/* 약관 */}
          <BusinessTerms/>
          <button onClick={clickFunc}>완료</button>
        </div>
      </div>
    </TermsContext.Provider>
  )
}

export default BusinessRegistration;