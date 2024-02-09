import {useState} from "react";

export const useTermsCheckBox = () => {

  const [allTerms, setAllTerms] = useState(false)
  const [essential1,setEssential1] = useState(false)
  const [essential2, setEssential2] = useState(false)
  const [essential3, setEssential3] = useState(false)
  const [optional1, setOptional1] = useState(false)
  const [optional2, setOptional2] = useState(false)


  return {
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
  }
}