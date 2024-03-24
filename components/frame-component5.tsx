import type { NextPage } from "next";
import styles from "./frame-component5.module.css";

const FrameComponent5: NextPage = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/group-201.svg"
        />
      </div>
      <h3 className={styles.nextjs}>NextJs</h3>
      <div className={styles.wrapperBlurParent}>
        <div className={styles.wrapperBlur}>
          <img className={styles.blurIcon} alt="" src="/blur.svg" />
        </div>
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/group-18625@2x.png"
        />
      </div>
      <img className={styles.groupIcon} alt="" src="/group-1000014869@2x.png" />
    </div>
  );
};

export default FrameComponent5;
