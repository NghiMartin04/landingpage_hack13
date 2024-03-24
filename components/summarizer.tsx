import type { NextPage } from "next";
import styles from "./summarizer.module.css";

export type SummarizerType = {
  prop?: string;
};

const Summarizer: NextPage<SummarizerType> = ({ prop }) => {
  return (
    <div className={styles.summarizer}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h1 className={styles.solanaBootcamp01Container}>
          <p className={styles.solana}>SOLANA</p>
          <p className={styles.bootcamp}>BOOTCAMP</p>
          <p className={styles.p}>{prop}</p>
        </h1>
      </div>
    </div>
  );
};

export default Summarizer;
