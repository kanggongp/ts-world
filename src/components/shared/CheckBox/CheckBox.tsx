import React from 'react';
import styles from './CheckBox.module.scss'

interface CheckBoxProps {
  checked?: boolean
  onCheckedChange?: () => void
  disabled?: boolean
}

const CheckBox = (props: CheckBoxProps) => {

  return (
    <input
      className={styles.checkBoxRoot}
      type={"checkbox"}
      checked={props.checked}
      onChange={props.onCheckedChange}
    />
  )
}

export default CheckBox;