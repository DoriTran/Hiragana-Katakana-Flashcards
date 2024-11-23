import { faBook } from "@fortawesome/free-solid-svg-icons";
import HomeCard from "./HomeCard/HomeCard";
import styles from "./styles.module.scss";

const History = () => {
  return (
    <HomeCard icon={faBook} to="/history" className={styles.body}>
      <div className={styles.info}>
        <div className={styles.label}>Total learn times:</div>
        <div className={styles.value}>15</div>
      </div>
      <div className={styles.info}>
        <div className={styles.label}>Best record:</div>
        <div className={styles.value}>14m22s</div>
      </div>
    </HomeCard>
  );
};

export default History;
