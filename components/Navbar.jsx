import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
};
