import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './BusinessInformation.module.scss'
import RadioInput from "@/components/shared/RadioInput/RadioInput";
import {CompanyType} from "@/types/registration";

interface Props {
  companyName: string
  companyOwner: string
  companyAddress: string
  detailedAddress: string
  openingDay: string
  companyType: string
  userId: string
  userPw: string
  handleState: (event: ChangeEvent<HTMLInputElement>, type: string) => void
}

const BusinessInformation
  = ({
       companyName,
       companyOwner,
       companyAddress,
       detailedAddress,
       openingDay,
       companyType,
       userId,
       userPw,
       handleState,
     }: Props) => {


  const [type, setType] = useState<CompanyType>('일반')


  return (
    <div className={styles.container}>
      {/* 기업명 */}
      <div className={styles.companyInfoDiv}>
        <span className={styles.title}>기업명</span>
        <input
          type={"text"}
          className={styles.infoInput}
          value={companyName}
          onChange={(e) => {
            handleState(e, 'companyName')
          }}
          placeholder={'기업명 입력'}
        />
      </div>
      {/* 대표자 */}
      <div className={styles.companyInfoDiv}>
        <span className={styles.title}>대표자</span>
        <input
          type={"text"}
          className={styles.infoInput}
          value={companyOwner}
          onChange={(e) => {
            handleState(e, 'companyOwner')
          }}
          placeholder={'대표자 입력'}
        />
      </div>
      {/* 회사주소 */}
      <div className={styles.companyInfoDiv}>
        <span className={styles.title}>회사 주소</span>
        <input
          type={"text"}
          className={styles.infoInput}
          value={companyAddress}
          onChange={(e) => {
            handleState(e, 'companyAddress')
          }}
          placeholder={'주소 찾기'}
        />
        <input
          type={"text"}
          className={styles.infoInput}
          value={detailedAddress}
          onChange={(e) => {
            handleState(e, 'detailedAddress')
          }}
          placeholder={'상세 주소'}
        />
      </div>
      {/* 개업일 */}
      <div className={styles.companyInfoDiv}>
        <span className={styles.title}>개업일</span>
        <input
          type={"text"}
          className={styles.infoInput}
          value={openingDay}
          onChange={(e) => {
            handleState(e, 'openingDay')
          }}
          placeholder={'개업일 입력'}
        />
      </div>
      {/* 기업 구분 */}
      <div className={styles.companyTypeDiv}>
        <span className={styles.title}>기업 구분</span>
        <div className={styles.radioDiv}>
          <div className={styles.radioUnitDiv}>
            <RadioInput checked={type === '일반'} value={'일반'} onCheckedChange={() => {setType('일반')}}/>
            <span className={styles.radioSpan}>일반</span>
          </div>
          <div className={styles.radioUnitDiv}>
            <RadioInput checked={type === '헤드헌터'} value={'헤드헌터'} onCheckedChange={() => {setType('헤드헌터')}}/>
            <span className={styles.radioSpan}>헤드헌터</span>
          </div>
          <div className={styles.radioUnitDiv}>
            <RadioInput checked={type === '파견/도급/채용대행'} value={'파견/도급/채용대행'} onCheckedChange={() => {setType('파견/도급/채용대행')}}/>
            <span className={styles.radioSpan}>파견/도급/채용대행</span>
          </div>
        </div>
      </div>
      {/* 아이디 */}
      <div className={styles.companyInfoDiv}>
        <span className={styles.title}>아이디</span>
        <input
          type={"text"}
          className={styles.infoInput}
          value={userId}
          onChange={(e) => {
            handleState(e, 'userId')
          }}
          placeholder={'아이디 입력'}
        />
      </div>
      {/* 패스워드 */}
      <div className={styles.companyInfoDiv}>
        <span className={styles.title}>패스워드</span>
        <input
          type={"text"}
          className={styles.infoInput}
          value={userPw}
          onChange={(e) => {
            handleState(e, 'userPw')
          }}
          placeholder={'비밀번호 입력'}
        />
      </div>
    </div>
  )
}

export default BusinessInformation;