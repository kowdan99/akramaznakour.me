import { memo } from "react";
import Link from "next/link";

import styles from "./header.module.css";
import { Home, GitHub, Linkedin, Mail } from "@components/icons";

const Header = ({ title, content }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>
            <Home />
          </a>
        </Link>
        <Link href="https://github.com/kowdan99">
          <a target="_blank" className={styles.logo}>
            <GitHub />
          </a>
        </Link>
        <p className={styles.hint}>I'm active here : </p>
        <Link href="https://www.linkedin.com/in/youssof-kowdan/">
          <a target="_blank" className={styles.logo}>
            <Linkedin />
          </a>
        </Link>

        <Link href="mailto:kowday@uw.edu">
          <a target="_blank" className={styles.logo}>
            <Mail />
          </a>
        </Link>
        {title && <div className={styles.content}>{title}</div>}
      </div>
    </nav>
  );
};

Header.displayName = "Header";
export default memo(Header);
