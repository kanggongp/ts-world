import React, {useContext, useEffect, useState} from 'react';
import styles from './BusinessTerms.module.scss'
import CheckBox from "@/components/shared/CheckBox/CheckBox";
import {useTermsCheckBox} from "@/components/views/Home/BusinessTerms/BusinessTerms.hooks";
import {TermsContext} from "@/components/views/Home/BusinessRegistration/BusinessRegistration";


type SetStateCallback = React.Dispatch<React.SetStateAction<boolean>>;
const BusinessTerms = () => {

  const { handleEssentialCheck } = useContext(TermsContext)

  const {
    allTerms,
    essential1,
    essential2,
    essential3,
    optional1,
    optional2,
    setAllTerms,
    setEssential1,
    setEssential2,
    setEssential3,
    setOptional1,
    setOptional2,
  } = useTermsCheckBox()

  const handleChecked = (callback: SetStateCallback) => {
    callback((prev) => !prev)
  }

  useEffect(() => {

    if(essential1 && essential2 && essential3){
      handleEssentialCheck()
    }else{
      handleEssentialCheck()
    }

  }, [essential1, essential2, essential3])


  return (
    <div className={styles.container}>
      <span className={styles.termTitle}>약관</span>
      <div className={styles.boxDiv}>
        {/* 상단 체크 박스 */}
        <div className={styles.topCheckDiv}>
          <CheckBox checked={allTerms} onCheckedChange={() => {handleChecked(setAllTerms)}}/>
          <div className={styles.textDiv}>
            <span className={styles.textTitle}>전체 동의</span>
            <span className={styles.textContent}>마케팅 정보 수신 동의(이메일,SMS/MMS)(선택) 동의를 포함합니다.</span>
          </div>
        </div>
        {/* 하단 체크 박스 */}
        <div className={styles.botCheckDiv}>
          <CheckBox checked={essential1} onCheckedChange={() => {handleChecked(setEssential1)}}/>
          <span className={styles.botTextTitle}>(필수) 기업회원 약관에 동의</span>
          <span className="material-symbols-outlined" style={{position: "absolute", top: '0', right: '0', color: 'lightgrey' }}>
            chevron_right
          </span>
        </div>
        <div className={styles.botCheckDiv}>
          <CheckBox checked={essential2} onCheckedChange={() => {handleChecked(setEssential2)}}/>
          <span className={styles.botTextTitle}>(필수) 개인정보 수집 및 이용에 동의</span>
          <span className="material-symbols-outlined" style={{position: "absolute", top: '0', right: '0', color: 'lightgrey' }}>
            chevron_right
          </span>
        </div>
        <div className={styles.botCheckDiv}>
          <CheckBox checked={essential3} onCheckedChange={() => {handleChecked(setEssential3)}}/>
          <span className={styles.botTextTitle}>(필수) SNS 발송 서비스 약간에 동의</span>
          <span className="material-symbols-outlined" style={{position: "absolute", top: '0', right: '0', color: 'lightgrey' }}>
            chevron_right
          </span>
        </div>
        <div className={styles.botCheckDiv}>
          <CheckBox checked={optional1} onCheckedChange={() => {handleChecked(setOptional1)}}/>
          <span className={styles.botTextTitle}>(선택) 마케팅정보 수신 동의 - 이메일</span>
          <span className="material-symbols-outlined" style={{position: "absolute", top: '0', right: '0', color: 'lightgrey' }}>
            chevron_right
          </span>
        </div>
        <div className={styles.botCheckDiv}>
          <CheckBox checked={optional2} onCheckedChange={() => {handleChecked(setOptional2)}}/>
          <span className={styles.botTextTitle}>(선택) 마케팅정보 수신 동의 - SNS/MMS</span>
          <span className="material-symbols-outlined" style={{position: "absolute", top: '0', right: '0', color: 'lightgrey' }}>
            chevron_right
          </span>
        </div>
      </div>
    </div>
  )
}

export default BusinessTerms;