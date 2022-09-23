import styles from "../components/Aside.module.scss";
import { Funnel } from "phosphor-react";
export function Aside() {
  return (
    <aside>
      <div className={styles.aside}>
        <div className={styles.funnel}>
          <Funnel />
        </div>{" "}
        <p className={styles.TextFunnel}>Filtros</p>
      </div>
      <p className={styles.textTwo}>Preços </p>
      <form className={styles.form}>
        <input type="checkbox" />
        <label for="vehicle1"> 1.000 R$</label>
        <br />
        <input type="checkbox" />
        <label for="vehicle2"> 2.000 R$</label>
        <br />
        <input type="checkbox" />
        <label for="vehicle3"> 3.000 R$</label>
        <br />
        <input type="checkbox" />
        <label for="vehicle3"> 5.000 R$</label>
        <br />
      </form>

      <p className={styles.textTwo}>Cúlinaria</p>
      <form className={styles.form}>
        <input type="checkbox" />
        <label for="vehicle1">Americana</label>
        <br />
        <input type="checkbox" />
        <label for="vehicle2"> Brasileira</label>
        <br />
        <input type="checkbox" />
        <label for="vehicle3"> Francesa</label>
        <br />
        <input type="checkbox" />
        <label for="vehicle3"> Italiana</label>
        <br />
      </form>
    </aside>
  );
}
