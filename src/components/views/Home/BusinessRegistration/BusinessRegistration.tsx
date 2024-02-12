import React, {ChangeEvent, createContext, useContext, useEffect, useState} from 'react';
import styles from './BusinessRegistration.module.scss'
import BusinessTerms from "@/components/views/Home/BusinessTerms/BusinessTerms";
import {useBusinessRegistration} from "@/components/views/Home/BusinessRegistration/BusinessRegistration.hooks";
import cn from "classnames";
import BusinessInformation from "@/components/views/Home/BusinessInformation/BusinessInformation";
import BusinessFile from "@/components/views/Home/BusinessFile/BusinessFile";
import axios from "axios";
import {useRouter} from "next/router";
import {numberRegex} from "@/constants/regex";

export const TermsContext = createContext({
  essentialCheck: false,
  handleEssentialCheck: (state: boolean) => {},
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
    noFile,
    userId,
    userPw,
    setCheckNumber,
    setCompanyAddress,
    setCompanyType,
    setNoFile,
    handleState,
  } = useBusinessRegistration()

  const router = useRouter()

  // 필수 약관 체크 여부
  const [essentialCheck, setEssentialCheck] = useState(false)

  // 첨부 파일
  const [companyFile, setCompanyFile] = useState<File | null>()


  const registerFunc = async () => {

    if (businessNumber === ''){
      alert('사업자등록번호 입력을 확인해주세요!')
      return
    }

    if(checkNumber !== 'yes'){
      alert('사업자등록번호를 확인해 주세요!')
      return
    }

    if(!noFile){
      if(companyFile === undefined){
        alert('file check!')
        return
      }
    }

    if(!essentialCheck){
      alert('약관을 확인해주세요!')
      return
    }

    try {
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

      // 보낼 데이터
      const postData = {
        businessNumber,
        companyName,
        companyOwner,
        companyAddress,
        detailedAddress,
        openingDay,
        companyType,
        userId,
        userPw,
      };

      const response = await axios.post(apiUrl, postData);

      // API 응답 데이터
      console.log(response.data)
      alert('회원 가입 완료!! 자격증 등록 화면으로 이동합니다.')

      await router.push({
        pathname: '/certification'
      })


    } catch (error) {
      console.error('POST 요청 중 에러 발생:', error);
    }
  }

  // 약관 체크 확인
  const handleEssentialCheck = (state: boolean) => {
    setEssentialCheck(state)
  }

  const numberCheck = (event: ChangeEvent<HTMLInputElement>, type: string) => {
    const data = event.target.value
    if(data.length > 0 && !numberRegex.test(data)){
      return
    }


    handleState(event, type)
  }

  // 사업자 번호 확인
  useEffect(() => {
    if(businessNumber !== ''){
      if(businessNumber === '6628601266'){
        setCheckNumber('yes')
      }else{
        setCheckNumber('no')
      }
    }

  }, [businessNumber])

  const alertSpanValue = checkNumber === 'yes' ? '사업자등록번호 확인완료' : '올바른 사업자 번호가 아닙니다'

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
              onChange={(event) => {numberCheck(event, 'businessNumber')}}
              placeholder={'사업자 등록번호 직접입력'}
            />
            <span className={cn(styles.alertSpan, {
              [styles.default]: checkNumber === '',
              [styles.yes]: checkNumber === 'yes',
              [styles.no]: checkNumber === 'no'
            })}>{alertSpanValue}</span>
          </div>
          {/* 사업자 등록 파일 */}
          <BusinessFile
            companyFile={companyFile}
            noFile={noFile}
            setNoFile={setNoFile}
            handleFile={setCompanyFile}
          />
          {checkNumber === 'yes' && (
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
              handleCompanyType={setCompanyType}
              handleState={handleState}
            />
          )}
          {/* 약관 */}
          <BusinessTerms/>
          <button className={styles.btn} onClick={registerFunc}>회원가입 완료</button>
        </div>
      </div>
    </TermsContext.Provider>
  )
}

export default BusinessRegistration;