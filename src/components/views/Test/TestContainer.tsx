import React from 'react';
import styles from './TestContainer.module.scss'

const TestContainer = () => {

  const testFunction = () => {

    const result = 1 > 0 && 'hi'

    console.log(result)
  }

  return (
    <div className={styles.container}>
      test
      <div>
        <button onClick={testFunction}>click</button>
      </div>
    </div>
  )
}

export default TestContainer;