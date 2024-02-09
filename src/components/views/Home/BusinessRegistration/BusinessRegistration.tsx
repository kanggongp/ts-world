import React, {createContext, useContext, useEffect, useState} from 'react';
import styles from './BusinessRegistration.module.scss'
import BusinessTerms from "@/components/views/Home/BusinessTerms/BusinessTerms";
import {useBusinessRegistration} from "@/components/views/Home/BusinessRegistration/BusinessRegistration.hooks";
import cn from "classnames";
import BusinessInformation from "@/components/views/Home/BusinessInformation/BusinessInformation";

export const TermsContext = createContext({
  essentialCheck: false,
  handleEssentialCheck: () => {},
})

const BusinessRegistration = () => {

  const {
    businessNumber,
    checkNumber,
    companyName,
    companyOwner,
    companyAddress,
    detailedAddress,
    openingDay,
    companyType,
    userId,
    userPw,
    handleBusinessNumber,
    setCheckNumber,
    handleState,
  } = useBusinessRegistration()


  // 필수 약관 체크 여부
  const [essentialCheck, setEssentialCheck] = useState(false)


  const clickFunc = () => {
    console.log(companyName, companyOwner, companyAddress, detailedAddress)
    // console.log(checkNumber)
    // console.log(businessNumber)
    // console.log(essentialCheck)
  }

  const handleEssentialCheck = () => {
    setEssentialCheck((prev) => !prev)
  }

  useEffect(() => {
    if(businessNumber === '111'){
      setCheckNumber(true)
    }else{
      setCheckNumber(false)
    }

  }, [businessNumber])

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
              value={businessNumber}
              onChange={(event) => {handleBusinessNumber(event)}}
              placeholder={'사업자 등록번호 직접입력'}
            />
            <span className={cn(styles.alertSpan, {[styles.yes]: checkNumber})}>올바른</span>
          </div>
          {checkNumber && (
            <BusinessInformation
              companyName={companyName}
              companyOwner={companyOwner}
              companyAddress={companyAddress}
              detailedAddress={detailedAddress}
              openingDay={openingDay}
              companyType={companyType}
              userId={userId}
              userPw={userPw}
              handleState={handleState}
            />
          )}
          {/* 약관 */}
          <BusinessTerms/>
          <button className={styles.btn} onClick={clickFunc}>회원가입 완료</button>
        </div>
      </div>
    </TermsContext.Provider>
  )
}

export default BusinessRegistration;