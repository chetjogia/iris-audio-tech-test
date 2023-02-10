import { useState } from "react";
import styles from "../../styles/MainContainer.module.scss";
import CheshireCat from "../CheshireCat";

function MainContainer() {
  const [fact, setFact] = useState<string | undefined>();

  async function getNewCatFact() {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    let catFact: string = data.fact;
    setFact(catFact);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.bubbleContainer}>
        <div className={styles.bubble}>
          <div className={styles.catFact}>
            <p>{fact}</p>
          </div>
        </div>
      </div>

      <div>
        <CheshireCat />
        <div className={styles.catButton}>
          <button className={styles.button} onClick={getNewCatFact}>
            New Cat Fact
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
