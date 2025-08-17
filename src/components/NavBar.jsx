import { NavLink } from "react-router";
import logo from "../../public/VidWave.png";
import Button from "./Button";
import styles from "./NavBar.module.css"; // Assuming you have a CSS module for styles

function NavBar() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <img src={logo} alt="VidWave Logo" className={styles.logoImg} />
            <div className={styles.logoIcon}>
              {/* <div className={styles.logoShape}></div> */}
            </div>
          </div>

          <div className={styles.navLinks}>
            {/* <navLink to="/portfolio" className={styles.navLink}>
              Portfolio
            </navLink> */}
            <a href="#work" className={styles.navLink}>
              About Us
            </a>
            <a href="#Portfolio" className={styles.navLink}>
              Portfolio
            </a>
            <a href="#Call Us" className={styles.navLink}>
              Call Us
            </a>
            {/* <a href="#resource" className={styles.navLink}>
              Resource
            </a> */}
          </div>

          <div className={styles.contactEmail}>
            <a
              href="mailto:hello@vidwavestudios.com"
              className={styles.emailBtn}
            >
              hello@vidwavestudios.com
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
