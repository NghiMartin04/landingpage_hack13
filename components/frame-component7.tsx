import type { NextPage } from "next";
import styles from "./frame-component7.module.css";

const FrameComponent7: NextPage = () => {
  return (
    <header className={styles.inputConnectorWrapper}>
      <div className={styles.inputConnector}>
        <nav className={styles.outputConnector}>
          <nav className={styles.faqParent}>
            <h3 className={styles.faq}>FAQ</h3>
            <div className={styles.aboutUsWrapper}>
              <h3 className={styles.aboutUs}>About Us</h3>
            </div>
            <h3 className={styles.applyNow}>Apply Now</h3>
          </nav>
        </nav>
        <div className={styles.loansParent}>
          <h3 className={styles.loans}>Loans</h3>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent7;
