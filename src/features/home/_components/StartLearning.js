import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { ApCheckbox } from "components";
import { useState } from "react";
import styles from "./styles.module.scss";
import HomeCard from "./HomeCard/HomeCard";

const StartLearning = () => {
  const [packs, setPacks] = useState(["hiragana", "katakana"]);
  const [modes, setModes] = useState(["shuffle"]);

  const handleChangePacks = (value) => {
    if (value === "star") {
      if (packs.includes("star")) setPacks(["hiragana", "katakana"]);
      else setPacks(["star"]);
    } else if (packs.includes("star")) setPacks([value]);
    else if (packs.includes(value) && packs.length > 1) {
      setPacks(packs.filter((item) => item !== value));
    } else {
      setPacks([...packs, value]);
    }
  };

  return (
    <HomeCard icon={faPlay} to="/learning" className={styles.body}>
      <div className={styles.info}>
        <div className={styles.label}>Select packs:</div>
        <ApCheckbox
          checked={packs}
          setChecked={() => handleChangePacks("hiragana")}
          value="hiragana"
          label="Hiragana (ひらがな)"
        />
        <ApCheckbox
          checked={packs}
          setChecked={() => handleChangePacks("katakana")}
          value="katakana"
          label="Katakana (カタカナ)"
        />
        <ApCheckbox checked={packs} setChecked={() => handleChangePacks("star")} value="star" label="Marked Star (★)" />
      </div>
      <div className={styles.info}>
        <div className={styles.label}>Select modes:</div>
        <ApCheckbox checked={modes} setChecked={setModes} value="shuffle" label="Shuffle" />
        <ApCheckbox checked={modes} setChecked={setModes} value="flipped" label="Flipped" />
      </div>
    </HomeCard>
  );
};

export default StartLearning;
