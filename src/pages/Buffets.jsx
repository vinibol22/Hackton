import { ShoppingBag } from "phosphor-react";

import { Header } from "../components/Header";
import styles from "./Buffets.module.scss";
import { Aside } from "../components/Aside.jsx";
import image3 from "../assets/imgs/image3.jpg";
export function Buffets() {
  return (
    <>
      <Header />
      <div className={styles.buffetsImage}>
        <Aside />
      
        <div className={styles.card}>
          <img src={image3} alt="" />
          <button>
            <ShoppingBag /> Contratar
          </button>
        </div>

        <div className={styles.card}>
          <img src={image3} alt="" />
          <button>Contratar</button>
        </div>

        <div className={styles.card}>
          <img src={image3} alt="" />
          <button>Contratar</button>
        </div>
        <br />
      </div>
    </>
  );
}
