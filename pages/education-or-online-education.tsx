import type { NextPage } from "next";
import ConditionSet from "../components/condition-set";
import FrameComponent31 from "../components/frame-component3";
import FrameComponent21 from "../components/frame-component2";
import FrameComponent11 from "../components/frame-component1";
import FrameComponent8 from "../components/frame-component";
import LayoutLab from "../components/layout-lab";
import PathPatternerEngine from "../components/path-patterner-engine";
import AnchoringAnchor from "../components/anchoring-anchor";
import StrokeStylist from "../components/stroke-stylist";
import BlendingModeBinder from "../components/blending-mode-binder";
import DataTransfer1 from "../components/data-transfer1";
import styles from "./education-or-online-education.module.css";

const EducationOrOnlineEducation: NextPage = () => {
  return (
    <div className={styles.educationOrOnlineEducation}>
      <div className={styles.label}>Email</div>
      <ConditionSet />
      <section className={styles.educationOrOnlineEducationInner}>
        <div className={styles.frameParent}>
          <FrameComponent31 />
          <FrameComponent21 />
        </div>
      </section>
      <FrameComponent11 />
      <section className={styles.educationOrOnlineEducationChild}>
        <div className={styles.frameGroup}>
          <FrameComponent8 />
          <LayoutLab />
          <PathPatternerEngine />
        </div>
      </section>
      <AnchoringAnchor />
      <StrokeStylist />
      <footer className={styles.variableVariator}>
        <div className={styles.variableVariatorChild} />
        <BlendingModeBinder />
        <DataTransfer1 />
      </footer>
    </div>
  );
};

export default EducationOrOnlineEducation;
