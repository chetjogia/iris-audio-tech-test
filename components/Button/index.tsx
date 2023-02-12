import styles from '../../styles/MainContainer.module.scss'
import { MouseEventHandler } from 'react';

interface buttonProps{
    getNewCatFact: MouseEventHandler<HTMLButtonElement>
}

function Button({getNewCatFact}:buttonProps) {
    return (     <div className={styles.catButton}>
        <button className={styles.button} onClick={getNewCatFact}>
          New Cat Fact
        </button>
      </div>);
}

export default Button;