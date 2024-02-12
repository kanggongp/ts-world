import React, {ChangeEvent, useRef, useState} from 'react';
import styles from './BusinessFile.module.scss'
import CheckBox from "@/components/shared/CheckBox/CheckBox";


interface Props {
  companyFile: File | null| undefined
  handleFile: (data: File | null) => void
}

const BusinessFile = ({ companyFile, handleFile }: Props) => {

  const fileInputRef = useRef(null)

  const [noFile, setNoFile] = useState(false)

  const inputId = 'jobFileId'

  const selectFile = () => {
    document.getElementById(inputId)!.click()
  }

  const handleNoFile = () => {
    if(companyFile){
      handleFile(null)
    }

    setNoFile((prev) => !prev )
  }

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const file = e.target.files[0]

    handleFile(file)
  }

  const headData = () => {
    if(!companyFile){
      return (
        <h1><span>사업자등록증명원</span>을 첨부해주세요</h1>
      )
    }else {
      return (
        <h1>{companyFile.name}</h1>
      )
    }
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>기업 인증</span>
      <div className={styles.fileDiv}>
        {!noFile && (
          <div className={styles.fileValueDiv}>
            {headData()}
            <span className="material-symbols-outlined">file_present</span>
            <input id={inputId} ref={fileInputRef} type={"file"} onChange={handleFileInput}/>
            <button onClick={selectFile}>파일 선택</button>
          </div>
        )}
        <div className={styles.fileBtnDiv}>
          <div className={styles.checkDiv}>
            <CheckBox
              checked={noFile}
              onCheckedChange={() => {handleNoFile()}}
            />
            <span>다음에 인증께요</span>
          </div>
          {noFile && (
            <div className={styles.noFileDiv}>
              <span className={styles.alert1}>가입 후 서비스 이용에 제한이 있을 수 있으니</span>
              <span className={styles.alert2}>이용 전 반드시 기업 인증을 신청해 주세요.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BusinessFile;