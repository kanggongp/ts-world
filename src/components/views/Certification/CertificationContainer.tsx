import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './CertificationContainer.module.scss'
import {LANGUAGE} from "@/constants/language";
import cn from "classnames";
import {EN_CERTIFICATE} from "@/constants/en_certificate";
import {JA_CERTIFICATE} from "@/constants/ja_certificate";
import {CH_CERTIFICATE} from "@/constants/ch_certificate";
import {GE_CERTIFICATE} from "@/constants/ge_certificate";
import {Certification} from "@/types/certification";
import CertificateSelection from "@/components/views/Certification/CertificateSelection/CertificateSelection";
import {FR_CERTIFICATE} from "@/constants/fr_certificate";
import {SP_CERTIFICATE} from "@/constants/sp_certificate";
import {RU_CERTIFICATE} from "@/constants/ru_certificate";
import {IT_CERTIFICATE} from "@/constants/it_certificate";
import {KR_CERTIFICATE} from "@/constants/kr_certificate";
import {ETC_CERTIFICATE} from "@/constants/etc_certificate";


const CertificationContainer = () => {

  const [langSelected, setLangSelected] = useState(false)
  const [currentLang, setCurrentLang] = useState('')

  // 기타 이후 언어 선택시 자격증 select 박스 안보이게 설정하는 상태값
  const [certificatedCheck, setCertificatedCheck] = useState(true)

  const [currentLangArr, setCurrentLangArr] = useState<Certification[]>([])

  const [langTitle, setLangTitle] = useState('')
  const [langScore, setLangScore] = useState('')

  const [resultArr, setResultArr] = useState([])

  const [level, setLevel] = useState('')


  const handleCurrentLang = (lang: string, state: boolean) => {
    setCurrentLang(lang)

    if(!state) setCertificatedCheck(false)
    else setCertificatedCheck(true)
  }

  const handleLangTitle = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const data = e.target.value;

    setLangTitle(data)
  }

  const handleLangScore = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const data = e.target.value;

    setLangScore(data)
  }

  const handleSetLangArr = () => {
    switch (currentLang) {
      case '영어':
        setCurrentLangArr(EN_CERTIFICATE)
        break;
      case '일본어':
        setCurrentLangArr(JA_CERTIFICATE)
        break;
      case '중국어':
        setCurrentLangArr(CH_CERTIFICATE)
        break;
      case '독일어':
        setCurrentLangArr(GE_CERTIFICATE)
        break;
      case '불어':
        setCurrentLangArr(FR_CERTIFICATE)
        break;
      case '스페인어':
        setCurrentLangArr(SP_CERTIFICATE)
        break;
      case '러시아어':
        setCurrentLangArr(RU_CERTIFICATE)
        break;
      case '이탈리아어':
        setCurrentLangArr(IT_CERTIFICATE)
        break;
      case '한국어':
        setCurrentLangArr(KR_CERTIFICATE)
        break;
      case '기타':
        setCurrentLangArr(ETC_CERTIFICATE)
        break;
      default:
        setCurrentLangArr(EN_CERTIFICATE)
    }
  }


  useEffect(() => {

    if(currentLang !== ''){
      const div = document.getElementById('selectId')
      div!.style.width = '600px'

      setTimeout(function () {
        setLangSelected(true)
      }, 500)
    }

    if(certificatedCheck){
      handleSetLangArr()
    }

  }, [currentLang])

  return (
    <div className={styles.container}>
      <span className={styles.title}>자격증 등록</span>
      <div id={'selectId'} className={styles.boxDiv}>
        {/* 언어 선택 영역 */}
        <div className={styles.langDiv}>
          {LANGUAGE.map((value, key) => {
            return (
              <div
                key={key}
                className={styles.langUnit}
                onClick={() => {handleCurrentLang(value.title, value.certificate)}}
              >
                <span
                  className={cn({[styles.selected]: currentLang === value.title})}
                >
                  {value.title}
                </span>
              </div>
            )
          })}
        </div>
        <div className={styles.selectDiv}>
          {!langSelected
            ?
            <div className={styles.titleDiv}>
              <span className="material-symbols-outlined" style={{fontSize: '22px', color: '#414145'}}>
                arrow_back
              </span>
              <span className={styles.topSpan}>외국어를 선택해주세요</span>
            </div>
            :
            <div className={styles.selectDiv}>
              <div className={styles.topDiv}>
                <div
                  className={cn(styles.topSection, {[styles.selected]: level === 'hard'})}
                  onClick={() =>{setLevel('hard')}}
                >
                  <span>상</span>
                  <span>(원어민 수준)</span>
                </div>
                <div
                  className={cn(styles.topSection, {[styles.selected]: level === 'middle'})}
                  onClick={() =>{setLevel('middle')}}
                >
                  <span>중</span>
                  <span>(비지니스 회화)</span>
                </div>
                <div
                  className={cn(styles.topSection, {[styles.selected]: level === 'low'})}
                  onClick={() =>{setLevel('low')}}
                >
                  <span>하</span>
                  <span>(일상 회화)</span>
                </div>
              </div>
              {certificatedCheck
                &&
                <CertificateSelection
                  langTitle={langTitle}
                  handleLangTitle={handleLangTitle}
                  currentLangArr={currentLangArr}
                />
              }
            </div>
          }
        </div>
      </div>
      <div className={styles.resultDiv}>

      </div>
    </div>
  )
}

export default CertificationContainer;