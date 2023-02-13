import styles from "../../styles/Footer.module.scss";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className={`${styles.footer} `}>
      <div>
        <Link
          className={styles.footerName}
          href="https://portfolio-site-ob6h.vercel.app/"
        >
          Made by Chet Jogia
        </Link>
      </div>
      <div className={styles.icons}>
        <Link
          className={styles.footerIcon}
          href="https://github.com/chetjogia"
          target="_blank"
        >
          <FaGithub aria-label="github" />
        </Link>
        <Link
          className={styles.footerIcon}
          href="https://linkedin.com/in/chetanjogia"
          target="_blank"
        >
          <FaLinkedin aria-label="linkedin" />
        </Link>
        <Link className={styles.footerIcon} href="mailto: chetjogia@gmail.com">
          <FiMail aria-label="mail" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
