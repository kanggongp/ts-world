import React from 'react';
import styles from './CheckBox.module.scss'

interface CheckBoxProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}

const CheckBox = (props: CheckBoxProps) => {

  return (
    <input
      className={styles.checkBoxRoot}
      type={"checkbox"}
      disabled={props.disabled}
      checked={props.checked}
    />
  )
}

export default CheckBox;