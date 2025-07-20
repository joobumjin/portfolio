import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Bumjin Joo
        </p>
      </div>

      <div className={styles.center}>
        <div className={styles.mainSplit}>
          <div className={styles.intro}>
            <p>Hi, I'm Bumjin</p>
          </div>
          <div className={styles.desc}>
            <p>
              I'm a Machine Learning Engineer studying Computer Science @ Brown University. 
              I love learning from the world around me. 
              While I'm not engineering, you can usually find me in the dance studio with my team.
            </p>
          </div>
        </div>
      </div>

      <h1 className={styles.sectionHeader}>My Work</h1>

      <div className={styles.grid}>
        <a
          href="./dlta"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>TA for (Graduate) Deep Learning <span className={styles.toRight}>&gt;</span></h2>
        </a>

        <a
          href="./dlta"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>Research with the Singh Lab @ Brown <span className={styles.toRight}>&gt;</span></h2>
        </a>

        <a
          href="./mmhic"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>Multimodal Hi-C Reconstruction <span className={styles.toRight}>&gt;</span></h2>
        </a>


        <a
          href="./daebak"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>DAEBAK Dance Team <span className={styles.toRight}>&gt;</span></h2>
        </a>

      </div>
    </main>
  );
}
