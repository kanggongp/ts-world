import React from 'react';
import styles from './RadioInput.module.scss'
import {CompanyType} from "@/types/registration";

interface Props {
  checked: boolean
  value: CompanyType
  onCheckedChange: () => void
}

const RadioInput = ({ checked, value, onCheckedChange }: Props) => {

  return (
    <input
      className={styles.radioInput}
      type={'radio'}
      checked={checked}
      value={value}
      onChange={onCheckedChange}
    />
  )
}

export default RadioInput;