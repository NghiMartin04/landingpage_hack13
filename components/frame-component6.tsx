import type { NextPage } from "next";
import styles from "./frame-component6.module.css";

const FrameComponent6: NextPage = () => {
  return (
    <section className={styles.educationOrOnlineEducationInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.dndLearningWrapper}>
            <h1 className={styles.dndLearning}>DND Learning</h1>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.homeParent}>
              <h3 className={styles.home}>Home</h3>
              <h3 className={styles.about}>About</h3>
              <h3 className={styles.course}>Course</h3>
              <h3 className={styles.blog}>Blog</h3>
              <h3 className={styles.contact}>Contact</h3>
            </div>
          </div>
          <button className={styles.buttonBase}>
            <div className={styles.text}>Connect Wallet</div>
          </button>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.findMostExcitingOnlineCourParent}>
                <h1 className={styles.findMostExcitingContainer}>
                  <p
                    className={styles.findMostExciting}
                  >{`Find Most Exciting `}</p>
                  <p className={styles.onlineCourses}>Online Courses</p>
                </h1>
                <div className={styles.anchorPoint} />
              </div>
              <div className={styles.loremIpsumDolorSitAmetCoParent}>
                <h3 className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore et dolore.
                </h3>
                <div className={styles.frameParent2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.buttonBaseParent}>
                      <button className={styles.buttonBase1}>
                        <div className={styles.text1}>Explore Courses</div>
                      </button>
                      <div className={styles.frameWrapper1}>
                        <button className={styles.startLearningParent}>
                          <div className={styles.startLearning}>
                            Start Learning
                          </div>
                          <div className={styles.frameChild} />
                        </button>
                      </div>
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.frameParent5}>
                        <div className={styles.mWrapper}>
                          <b className={styles.m}>3M+</b>
                        </div>
                        <div className={styles.students}>Students</div>
                      </div>
                      <div className={styles.frameParent6}>
                        <div className={styles.kWrapper}>
                          <b className={styles.k}>19K+</b>
                        </div>
                        <div className={styles.courses}>Courses</div>
                      </div>
                      <div className={styles.frameParent7}>
                        <div className={styles.kContainer}>
                          <b className={styles.k1}>10K+</b>
                        </div>
                        <div className={styles.instructors}>Instructors</div>
                      </div>
                      <img
                        className={styles.unionIcon}
                        loading="lazy"
                        alt=""
                        src="/union@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.starWrapper}>
                    <img
                      className={styles.frameItem}
                      loading="lazy"
                      alt=""
                      src="/star-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/star-6.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
