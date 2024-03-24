import type { NextPage } from "next";
import styles from "./data-aggregator1.module.css";

const DataAggregator1: NextPage = () => {
  return (
    <div className={styles.dataAggregator}>
      <div className={styles.dataAggregatorChild} />
      <div className={styles.logicTree}>
        <img className={styles.sol1Icon} alt="" src="/sol-1.svg" />
        <div className={styles.outputDispatcher}>
          <h1 className={styles.solana}>Solana</h1>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.image736Parent}>
            <img
              className={styles.image736Icon}
              loading="lazy"
              alt=""
              src="/image-736@2x.png"
            />
            <h1 className={styles.superteamvn}> SuperteamVN</h1>
          </div>
        </div>
        <div className={styles.expressionTree}>
          <div className={styles.variableHolder}>
            <img className={styles.sol1Icon1} alt="" src="/sol-1.svg" />
            <div className={styles.logicalOperator}>
              <h1 className={styles.renaissance}>Renaissance</h1>
            </div>
          </div>
          <div className={styles.variableHolder1}>
            <img className={styles.sol1Icon2} alt="" src="/sol-1.svg" />
            <div className={styles.solanaWrapper}>
              <h1 className={styles.solana1}>Solana</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAggregator1;
