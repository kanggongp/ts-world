import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './CertificationContainer.module.scss'
import {LANGUAGE} from "@/constants/language";
import cn from "classnames";
import {EN_CERTIFICATE} from "@/constants/en_certificate";
import {JA_CERTIFICATE} from "@/constants/ja_certificate";
import {CH_CERTIFICATE} from "@/constants/ch_certificate";
import {GE_CERTIFICATE} from "@/constants/ge_certificate";
import {Certification, ResultTag} from "@/types/certification";
import CertificateSelection from "@/components/views/Certification/CertificateSelection/CertificateSelection";
import {FR_CERTIFICATE} from "@/constants/fr_certificate";
import {SP_CERTIFICATE} from "@/constants/sp_certificate";
import {RU_CERTIFICATE} from "@/constants/ru_certificate";
import {IT_CERTIFICATE} from "@/constants/it_certificate";
import {KR_CERTIFICATE} from "@/constants/kr_certificate";
import {ETC_CERTIFICATE} from "@/constants/etc_certificate";
import {useRouter} from "next/router";


const CertificationContainer = () => {

  const router = useRouter()

  const [langSelected, setLangSelected] = useState(false)
  const [currentLang, setCurrentLang] = useState('')

  // 기타 이후 언어 선택시 자격증 select 박스 안보이게 설정하는 상태값
  const [certificatedCheck, setCertificatedCheck] = useState(true)

  const [currentLangArr, setCurrentLangArr] = useState<Certification[]>([])

  const [langTitle, setLangTitle] = useState('')
  const [langScore, setLangScore] = useState('')

  const [resultArr, setResultArr] = useState<ResultTag[]>([])

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

  // 점수 입력 input
  const handleLangScore = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const data = e.target.value;

    setLangScore(data)
  }

  // result Arr 에 데이터 추가하는 함수
  const pushResultArr = (lang:string, level: string) => {

    const data = {
      first: lang,
      second: level
    }

    setResultArr(prevResultArr => [...prevResultArr, data])

  }

  const removeResultTag = (indexToRemove: number) => {
    setResultArr(prevResultArr => {
      const newArray = [...prevResultArr];

      newArray.splice(indexToRemove, 1);

      return newArray;
    });
  };

  const refreshResultArr = () => {
    router.reload()
  }

  // 언어 중복 등록했는지 검사하는 함수
  const checkResultArr = (lang: string) => {
    // 배열에서 first 속성이 '영어'인 객체가 있는지 확인
    return resultArr.some(item => item.first === currentLang);
  };

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

    if(level !== ''){
      if(!checkResultArr(currentLang)){
        pushResultArr(currentLang, level)
      }else{
        alert('언어 수준은 중복 등록이 불가능합니다!')
        setLevel('')
      }
    }

  }, [level])


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

    setLevel('')

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
                  className={cn(styles.topSection, {[styles.selected]: level === '상'})}
                  onClick={() =>{setLevel('상')}}
                >
                  <span>상</span>
                  <span>(원어민 수준)</span>
                </div>
                <div
                  className={cn(styles.topSection, {[styles.selected]: level === '중'})}
                  onClick={() =>{setLevel('중')}}
                >
                  <span>중</span>
                  <span>(비지니스 회화)</span>
                </div>
                <div
                  className={cn(styles.topSection, {[styles.selected]: level === '하'})}
                  onClick={() =>{setLevel('하')}}
                >
                  <span>하</span>
                  <span>(일상 회화)</span>
                </div>
              </div>
              {certificatedCheck
                &&
                <CertificateSelection
                  langTitle={langTitle}
                  langScore={langScore}
                  setScore={setLangScore}
                  handleLangTitle={handleLangTitle}
                  handleLangScore={handleLangScore}
                  pushResultArr={pushResultArr}
                  currentLangArr={currentLangArr}
                />
              }
            </div>
          }
        </div>
      </div>
      {resultArr.length > 0 && (
        <div className={styles.resultDiv}>
          {resultArr.map((value, key) => {
            return (
              <div key={key} className={styles.tagDiv}>
                <h1 className={styles.firstSpan}>{value.first}</h1>
                <h1 className={styles.secondSpan}>{value.second}</h1>
                <span className="material-symbols-outlined" onClick={() => {removeResultTag(key)}}>
                close
              </span>
              </div>
            )
          })}
          <span className={styles.refreshSpan} onClick={refreshResultArr}>초기화</span>
        </div>
      )}
    </div>
  )
}

export default CertificationContainer;