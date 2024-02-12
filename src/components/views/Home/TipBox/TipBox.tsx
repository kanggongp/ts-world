import React from 'react';
import styles from './TipBox.module.scss'

const TipBox = () => {

  return (
    <div className={styles.container}>
      <span className={styles.tipSpan}>TIP.</span>
      <span className={styles.title}>1. 사업자등록 증명원이 뭐예요?</span>
      <div className={styles.blueBox}>
        <span>사업자등록증과 달리 위조 방지용</span>
        <span>번호와 발급 일자가 기재되어 있어요!</span>
      </div>
      <div className={styles.btnDiv}>사업자등록증명원 발급</div>
      <div className={styles.btnDiv}>발급 및 다운 방법 안내</div>
      <span className={styles.title}>2. 기업인증은 왜 하나요?</span>
      <div className={styles.blueBox}>
        <span>안전한 채용문화를 위해 기업 서비스</span>
        <span>이용 전 기업인증이 완료되어야합니다.</span>
      </div>
      <span className={styles.title}>3. 제출서류</span>
      <div className={styles.blueBox}>
        <h1>일반 기업, 개인, 비영리 단체</h1>
        <span>사업자등록증명원(발급 3개월 이내)</span>
      </div>
      <div className={styles.blueBox}>
        <h1>헤드헌터 파견</h1>
        <span>사업자등록증명원+</span>
        <span>직업소개사업증 or 파견허가증</span>
      </div>
    </div>
  )
}

export default TipBox;