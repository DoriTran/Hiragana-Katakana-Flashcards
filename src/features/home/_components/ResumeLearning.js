import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import HomeCard from "./HomeCard/HomeCard";

const ResumeLearning = () => {
  return (
    <HomeCard icon={faClockRotateLeft} to="/learning" className={styles.body}>
      <div className={styles.info}>
        <div className={styles.label}>Progress:</div>
        <div className={styles.value}>15/200</div>
      </div>
      <div className={styles.info}>
        <div className={styles.label}>Learnt at:</div>
        <div className={styles.value}>15:30 - Friday, 12/08/2025</div>
      </div>
    </HomeCard>
  );
};

export default ResumeLearning;
