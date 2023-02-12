import { useState } from "react";
import styles from "../../styles/MainContainer.module.scss";
import CheshireCat from "@/components/CheshireCat";
import Button from "../Button";

function MainContainer() {
  const [fact, setFact] = useState<string | undefined>(
    "Click the button to learn about Cats"
  );

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

      <div className={styles.mainContainerBottom}>
        <CheshireCat />
        <Button getNewCatFact={getNewCatFact} />
      </div>
    </div>
  );
}

export default MainContainer;
