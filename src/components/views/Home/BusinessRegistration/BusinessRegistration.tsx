import React, {createContext, useContext, useEffect, useState} from 'react';
import styles from './BusinessRegistration.module.scss'
import BusinessTerms from "@/components/views/Home/BusinessTerms/BusinessTerms";
import {useBusinessRegistration} from "@/components/views/Home/BusinessRegistration/BusinessRegistration.hooks";
import cn from "classnames";
import BusinessInformation from "@/components/views/Home/BusinessInformation/BusinessInformation";
import BusinessFile from "@/components/views/Home/BusinessFile/BusinessFile";

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
    setCheckNumber,
    setCompanyAddress,
    handleState,
  } = useBusinessRegistration()


  // 필수 약관 체크 여부
  const [essentialCheck, setEssentialCheck] = useState(false)

  // 첨부 파일
  const [companyFile, setCompanyFile] = useState<File | null>()


  const clickFunc = () => {
    console.log(businessNumber, companyName, companyOwner, companyAddress, detailedAddress)
    // console.log(checkNumber)
    // console.log(businessNumber)
    // console.log(essentialCheck)
  }

  // 약관 체크 확인
  const handleEssentialCheck = () => {
    setEssentialCheck((prev) => !prev)
  }

  // 사업자 번호 확인
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
              onChange={(event) => {handleState(event, 'businessNumber')}}
              placeholder={'사업자 등록번호 직접입력'}
            />
            <span className={cn(styles.alertSpan, {[styles.yes]: checkNumber})}>올바른</span>
          </div>
          {/* 사업자 등록 파일 */}
          <BusinessFile
            companyFile={companyFile}
            handleFile={setCompanyFile}
          />
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
              handleAddress={setCompanyAddress}
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