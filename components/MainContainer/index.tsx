import { useState } from "react";
import styles from "../../styles/MainContainer.module.scss";
import CheshireCat from "@/components/CheshireCat";
import Button from "../Button";

function MainContainer() {
  const [fact, setFact] = useState<string | undefined>(
    "Click the button to learn about Cats"
  );

  type CatObject = {
    fact: string
    length: number
  }

  //fetch calling from api
  async function getNewCatFact():Promise<void> {
    const response: Response = await fetch("https://catfact.ninja/fact");
    const data: CatObject = await response.json();
    const catFact: string = data.fact;
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
