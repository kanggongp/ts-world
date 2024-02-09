import {ChangeEvent, useState} from "react";
import {set} from "immutable";

export const useBusinessRegistration = () => {

  const [businessNumber, setBusinessNumber] = useState<string>('')
  const [checkNumber, setCheckNumber] = useState(false)
  const [companyName, setCompanyName] = useState('')
  const [companyOwner, setCompanyOwner] = useState('')
  const [companyAddress, setCompanyAddress] = useState('')
  const [detailedAddress, setDetailedAddress] = useState('')
  const [openingDay, setOpeningDay] = useState('')
  const [companyType, setCompanyType] = useState('')
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')

  const handleBusinessNumber = (event: ChangeEvent<HTMLInputElement>) => {

    const prevData = event.target.value

    setBusinessNumber(prevData)
  }

  const handleState = (event: ChangeEvent<HTMLInputElement>, type: string) => {
    const prevData = event.target.value

    switch (type) {
      case 'companyName':
        setCompanyName(prevData)
        break;
      case 'companyOwner':
        setCompanyOwner(prevData)
        break;
      case 'companyAddress':
        setCompanyAddress(prevData)
        break
      case 'detailedAddress':
        setDetailedAddress(prevData)
        break
      case 'openingDay':
        setOpeningDay(prevData)
        break
      case 'companyType':
        setCompanyType(prevData)
        break
      case 'userId':
        setUserId(prevData)
        break
      case 'userPw':
        setUserPw(prevData)
        break
      default:
        alert('오류 발생')
        break
    }
  }

  return {
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
    handleBusinessNumber,
    setCheckNumber,
    handleState,
  };
}