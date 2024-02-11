import React, {ChangeEvent} from 'react';
import styles from "@/components/views/Certification/CertificationContainer.module.scss";
import {Certification} from "@/types/certification";

interface Props {
  langTitle: string
  handleLangTitle: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  currentLangArr: Certification[]
}

const CertificateSelection = ({langTitle, handleLangTitle, currentLangArr }: Props) => {

  const scoreArr = currentLangArr.find(item => item.name === langTitle)?.score

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
          <select className={styles.botSelect}>
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
            />
            <span>점(급) 이상</span>
          </div>
        }
        <button>추가</button>
      </div>
    </>
  )
}

export default CertificateSelection;