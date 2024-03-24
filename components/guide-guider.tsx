import type { NextPage } from "next";
import styles from "./guide-guider.module.css";

const GuideGuider: NextPage = () => {
  return (
    <section className={styles.guideGuider}>
      <div className={styles.next} />
      <footer className={styles.paddingPadder}>
        <div className={styles.marginManager}>
          <div className={styles.bg} />
          <div className={styles.fillFinder}>
            <div className={styles.strokeStyler}>
              <img
                className={styles.fontFamilyFarm}
                loading="lazy"
                alt=""
                src="/star-10.svg"
              />
            </div>
            <img className={styles.fillFinderChild} alt="" src="/star-11.svg" />
          </div>
          <div className={styles.paragraphPacker}>
            <div className={styles.paragraphPackerChild} />
          </div>
        </div>
        <img
          className={styles.paddingPadderChild}
          alt=""
          src="/group-18626.svg"
        />
      </footer>
      <img
        className={styles.phoneIcon1}
        alt=""
        src="/8666632-phone-icon-1.svg"
      />
      <img
        className={styles.addressLocationMapNavigatioIcon}
        alt=""
        src="/4200473-address-location-map-navigation-icon-1.svg"
      />
      <img className={styles.guideGuiderChild} alt="" src="/group-13186.svg" />
      <img
        className={styles.symbolSaverIcon}
        loading="lazy"
        alt=""
        src="/star-8.svg"
      />
      <img
        className={styles.masterMastermindIcon}
        loading="lazy"
        alt=""
        src="/vector-2052.svg"
      />
    </section>
  );
};

export default GuideGuider;
