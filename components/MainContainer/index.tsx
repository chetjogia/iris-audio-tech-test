import { useState } from "react";
 import styles from '../../styles/MainContainer.module.scss'

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
      <button onClick={getNewCatFact}>New Cat Fact</button>
      <h1 className={styles.primaryColor}>{fact}</h1>
    </div>
  );
}

export default MainContainer;
