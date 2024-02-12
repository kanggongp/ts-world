import React, {ChangeEvent} from 'react';
import styles from "@/components/views/Certification/CertificationContainer.module.scss";
import {Certification} from "@/types/certification";
import {setConfig} from "next/config";

interface Props {
  langTitle: string
  langScore: string
  setScore: (data: string) => void
  handleLangTitle: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  handleLangScore : (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  pushResultArr: (first: string, second: string) => void
  currentLangArr: Certification[]
}

const CertificateSelection = ({ langTitle, langScore, setScore, handleLangTitle, handleLangScore, pushResultArr, currentLangArr }: Props) => {

  const scoreArr = currentLangArr.find(item => item.name === langTitle)?.score

  const handleScore = () => {

    if(langTitle === ''){
      alert('자격증 선택이 필요합니다')
      return
    }

    if(langScore === ''){
      alert('중복 혹은 빈값은 등록이 불가능합니다')
      return;
    }

    pushResultArr(langTitle, langScore)
    setScore('')
  }

  return (
    <>
      <div className={styles.selectValueDiv}>
        <select className={styles.langSelect} onChange={(e) => {handleLangTitle(e)}}>
          {currentLangArr.map((value, key) => {
            return (
              <option key={key} value={value.name} disabled={key === 0} selected={key === 0}>{value.name}</option>
            )
          })}
        </select>
      </div>
      <div className={styles.selectBotDiv}>
        {scoreArr?.length > 0
          ?
          <select className={styles.botSelect} onChange={(e) => {handleLangScore(e)}}>
            {scoreArr?.map((value, key) => {
              return (
                <option key={key} value={value}>{value}</option>
              )
            })}
          </select>
          :
          <div className={styles.botInputDiv}>
            <input
              type={"text"}
              value={langScore}
              onChange={(e) => {handleLangScore(e)}}
            />
            <span>점(급) 이상</span>
          </div>
        }
        <button onClick={handleScore}>추가</button>
      </div>
    </>
  )
}

export default CertificateSelection;