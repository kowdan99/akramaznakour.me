import { memo } from "react";
import Link from "next/link";

import styles from "./header.module.css";
import {
  Home,
  GitHub,
  Logo as LogoIcon,
  Twitter,
  Linkedin,
  Mail,
} from "@components/icons";

const Header = ({ title, content }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>
            <Home />
          </a>
        </Link>
        <Link href="https://github.com/akramaznakour">
          <a target="_blank" className={styles.logo}>
            <GitHub />
          </a>
        </Link>
        <p className={styles.hint}>I'm active here : </p>
        <Link href="https://twitter.com/akramaznakour">
          <a target="_blank" className={styles.logo}>
            <Twitter />
          </a>
        </Link>
        <Link href="http://linkedin.com/in/akramaznakour">
          <a target="_blank" className={styles.logo}>
            <Linkedin />
          </a>
        </Link>

        <Link href="mailto:akram.aznakour@gmail.com">
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
