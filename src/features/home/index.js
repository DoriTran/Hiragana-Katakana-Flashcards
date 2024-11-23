import History from "./_components/History";
import ResumeLearning from "./_components/ResumeLearning";
import StartLearning from "./_components/StartLearning";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.home}>
        <img src="/logo128.png" alt="Higarana Katakana Alphabet" className={styles.logo} />
        <div className={styles.text}>
          <div className={styles.label}>Higarana (ひらがな)</div>
          <div className={styles.label}>Katakana (カタカナ)</div>
        </div>
      </div>
      <StartLearning />
      <ResumeLearning />
      {/* <History /> */}
    </div>
  );
};

export default Home;
