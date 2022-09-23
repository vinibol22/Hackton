import styles from "../components/ArticleOne.module.scss";
import interrogacao from "../assets/imgs/iconOne.png";
import tela from "../assets/imgs/iconTwo.png";
import carrinho from "../assets/imgs/iconThree.png";
import elipseOne from "../assets/imgs/Ellipse1.png";
import elipseTwo from "../assets/imgs/Ellipse2.png";
import eliseThree from "../assets/imgs/Ellipse3.png";
export function ArticleOne() {
  return (
    <>
      <div className={styles.espacamento}></div>
      <p className={styles.text}>Como Funciona</p>
      <div className={styles.espacamento}></div>

      <article className={styles.iconsArea}>
        <div>
          <img src={interrogacao} className={styles.interrogacao} alt="" />
          <p className={styles.ellipse}>
            <img src={elipseOne} alt="" />
          </p>
          <p className={styles.textIcon}>Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Dignissimos, temporibus quibusdam. Eveniet blanditiis fugiat perferendis assumenda quo est perspiciatis explicabo, pariatur tempore? Recusandae reprehenderit quae officia
            soluta? Voluptatum, porro molestiae!</p>
        </div>

        <div>
          <img src={tela} alt="" />
          <p className={styles.ellipse2}>
            <img src={elipseTwo} alt="" />
          </p>
          <p className={styles.textIcon}>
            Lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
            Culpa ex nam distinctio assumenda
            eaque illo cum. Qui tempora harum
            modi placeat, mollitia nulla
            quas est, commodi quam minima,
            ea ipsam.
          </p>
        </div>
        <div>
          <img src={carrinho} alt="" />
          <p className={styles.ellipse3}>
            <img src={eliseThree} alt="" />
          </p>
          <p className={styles.textIcon}>
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            Nihil adipisci tenetur ipsa sunt
            at blanditiis incidunt esse minus
            maxime ullam? Beatae deleniti tempora
            ullam enim maxime iure eaque fugit modi!
          </p>
        </div>
      </article>
    </>
  );
}
