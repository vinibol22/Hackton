import styles from "../components/ArticleTwo.module.scss";
import imageTwo from "../assets/imgs/image2.png";
import aviao from "../assets/imgs/aviao.png";
export function ArticleTwo() {
  return (
    <article>
      <div className={styles.secao}>
        <img src={imageTwo} className={styles.secaoOne} alt="" />
        <div className={styles.secaoTwo}>
          <p>Benefícios</p>
          <div className={styles.textSecaoTwo}>
            <img src={aviao} alt="" />
            <p className={styles.texAviao}>
              Facilidades No encontro de buffets em locais desconhecidos
            </p>
          </div>
          <p></p>
          <div className={styles.textSecaoTwo}>
            <img src={aviao} alt="" />
            <p className={styles.texAviao}>
              Facilidades No encontro de buffets em locais desconhecidos
            </p>
          </div>

          <p></p>
          <div className={styles.textSecaoTwo}>
            <img src={aviao} alt="" />
            <p className={styles.texAviao}>
              Facilidades No encontro de buffets em locais desconhecidos
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
