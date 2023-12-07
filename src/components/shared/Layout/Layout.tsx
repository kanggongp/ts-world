import styles from './Layout.module.scss'
import {PropsWithChildren} from "react";

const Layout = ({ children }: PropsWithChildren ) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default Layout
