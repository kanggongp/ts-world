import styles from './Layout.module.scss'
import {PropsWithChildren} from "react";
import Header from "@/components/shared/Layout/Header/Header";

const Layout = ({ children }: PropsWithChildren ) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
          <Header/>
          {children}
      </div>
    </div>
  );
};

export default Layout
