import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./data-aggregator.module.css";

export type DataAggregatorType = {
  logicBranch?: string;
  malisa?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const DataAggregator: NextPage<DataAggregatorType> = ({
  logicBranch,
  malisa,
  propPadding,
  propAlignSelf,
  propWidth,
  propAlignSelf1,
}) => {
  const controlStructureStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const algorithmStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const malisaStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div className={styles.dataAggregator}>
      <div className={styles.base} />
      <img
        className={styles.logicBranchIcon}
        loading="lazy"
        alt=""
        src={logicBranch}
      />
      <div className={styles.controlStructure} style={controlStructureStyle}>
        <div className={styles.algorithm} style={algorithmStyle}>
          <h3 className={styles.malisa} style={malisaStyle}>
            {malisa}
          </h3>
          <div className={styles.formulaEvaluator}>
            <div className={styles.programmer}>Programmer</div>
          </div>
        </div>
      </div>
      <div className={styles.userInterface}>
        <img
          className={styles.userInterfaceChild}
          loading="lazy"
          alt=""
          src="/group-1000014872.svg"
        />
      </div>
    </div>
  );
};

export default DataAggregator;
