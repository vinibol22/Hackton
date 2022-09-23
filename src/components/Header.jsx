import styles from "../components/Header.module.scss";
export function Header() {
  return (
    <header>
      <nav className={styles.navigation}>
        <p href="" className={styles.logo}>
          Air Food
        </p>
        <a href="/">Home</a>
        <a href="/buffets">Buffets</a>
        <a href="">Contatos</a>
      </nav>
    </header>
  );
}
