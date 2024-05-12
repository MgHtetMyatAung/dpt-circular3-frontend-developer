import { NavLink } from "react-router-dom";
import { navItems } from "./navItems";
import styles from "./header.module.css";
import { Bell } from "lucide-react";
import { ProfileImg } from "../../../assets/images";

export default function HeaderLayout() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav_bar}>
        <div>
          <ul className={styles.nav_items}>
            {navItems.map(({ label, link }) => (
              <NavLink key={label} to={link} className={styles.nav_item}>
                {label}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className={styles.info_box}>
          <div>
            <Bell size={24} color="#b0b0b0" />
          </div>
          <div>
            <img src={ProfileImg} alt="" className={styles.profile_img} />
          </div>
        </div>
      </nav>
    </header>
  );
}
