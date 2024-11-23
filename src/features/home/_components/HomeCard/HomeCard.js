import { Paper } from "@mui/material";
import { ApIcon } from "components";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import styles from "./HomeCard.module.scss";

const HomeCard = ({ icon, to, action, className, children }) => {
  const navigate = useNavigate();

  return (
    <Paper elevation={4} className={styles.card}>
      <div className={styles.icon}>
        <ApIcon
          icon={icon}
          color="var(--primary-dark)"
          size="60px"
          onClick={() => {
            action?.();
            if (to) navigate(to);
          }}
        />
      </div>
      <div className={clsx(styles.content, className)}>{children}</div>
    </Paper>
  );
};

export default HomeCard;
