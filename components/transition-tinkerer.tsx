import type { NextPage } from "next";
import DataAggregator from "./data-aggregator";
import styles from "./transition-tinkerer.module.css";

const TransitionTinkerer: NextPage = () => {
  return (
    <div className={styles.transitionTinkerer}>
      <DataAggregator logicBranch="/ellipse-1208@2x.png" malisa="Malisa" />
      <div className={styles.dataAggregator}>
        <div className={styles.base} />
        <div className={styles.ellipseParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/ellipse-1210@2x.png"
          />
          <div className={styles.functionCall}>
            <div className={styles.inputOutput}>
              <h3 className={styles.kathrynMurphy}>Kathryn Murphy</h3>
              <div className={styles.dataFlow}>
                <div className={styles.programmer}>Programmer</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dataAggregatorInner}>
          <img
            className={styles.frameItem}
            alt=""
            src="/group-1000014872.svg"
          />
        </div>
      </div>
      <DataAggregator
        logicBranch="/ellipse-1212@2x.png"
        malisa="Floyd Miles"
        propPadding="var(--padding-0) var(--padding-0) var(--padding-lgi)"
        propAlignSelf="unset"
        propWidth="171px"
        propAlignSelf1="stretch"
      />
      <div className={styles.dataAggregator1}>
        <div className={styles.base1} />
        <img
          className={styles.dataAggregatorChild}
          loading="lazy"
          alt=""
          src="/ellipse-1209@2x.png"
        />
        <div className={styles.frameDiv}>
          <div className={styles.darleneRobertsonParent}>
            <h3 className={styles.darleneRobertson}>Darlene Robertson</h3>
            <div className={styles.programmerWrapper}>
              <div className={styles.programmer1}>Programmer</div>
            </div>
          </div>
        </div>
        <div className={styles.dataAggregatorInner1}>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/group-1000014872.svg"
          />
        </div>
      </div>
      <div className={styles.dataAggregator2}>
        <div className={styles.base2} />
        <div className={styles.ellipseGroup}>
          <img
            className={styles.ellipseIcon}
            loading="lazy"
            alt=""
            src="/ellipse-1211@2x.png"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.wadeWarrenParent}>
              <h3 className={styles.wadeWarren}>Wade Warren</h3>
              <div className={styles.programmerContainer}>
                <div className={styles.programmer2}>Programmer</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dataAggregatorInner2}>
          <img
            className={styles.groupIcon}
            alt=""
            src="/group-1000014872.svg"
          />
        </div>
      </div>
      <DataAggregator
        logicBranch="/ellipse-1213@2x.png"
        malisa="Courtney Henry"
        propPadding="var(--padding-0) var(--padding-0) var(--padding-lgi)"
        propAlignSelf="unset"
        propWidth="unset"
        propAlignSelf1="unset"
      />
      <div className={styles.dataAggregator3}>
        <div className={styles.base3} />
        <img
          className={styles.dataAggregatorItem}
          loading="lazy"
          alt=""
          src="/ellipse-750@2x.png"
        />
        <div className={styles.dataAggregatorInner3}>
          <div className={styles.frameParent}>
            <div className={styles.camWilliamsonParent}>
              <h3 className={styles.camWilliamson}>Cam Williamson</h3>
              <div className={styles.matrixManipulation}>
                <div className={styles.programmer3}>Programmer</div>
              </div>
            </div>
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/group-1000014872.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.dataAggregator4}>
        <div className={styles.base4} />
        <div className={styles.ellipseContainer}>
          <img
            className={styles.frameChild2}
            loading="lazy"
            alt=""
            src="/ellipse-1206@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.eleanorPenaParent}>
              <h3 className={styles.eleanorPena}>Eleanor Pena</h3>
              <div className={styles.programmerFrame}>
                <div className={styles.programmer4}>Programmer</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dataAggregatorInner4}>
          <img
            className={styles.frameChild3}
            alt=""
            src="/group-1000014872.svg"
          />
        </div>
      </div>
      <DataAggregator
        logicBranch="/ellipse-1207@2x.png"
        malisa="Arlene McCoy"
        propPadding="var(--padding-0) var(--padding-0) var(--padding-lgi)"
        propAlignSelf="unset"
        propWidth="unset"
        propAlignSelf1="unset"
      />
    </div>
  );
};

export default TransitionTinkerer;
