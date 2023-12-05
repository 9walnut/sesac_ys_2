import styles from "../styles/origis.module.css";

function CssModule() {
  // ['a', 'b'].join(" ") >>> 'a b'
  return (
    <>
      <div className={styles.origin}>
        <div className={`${styles.box} ${styles.red}`}></div>
        <div className={`${styles.box} ${styles.orange}`}></div>
        <div className={[styles.box, styles.yellow].join(" ")}></div>
        <div className={`${styles.box} ${styles.green}`}></div>
        <div className={`${styles.box} ${styles.blue}`}></div>
        <div className={`${styles.box} ${styles.purple}`}></div>
      </div>
    </>
  );
}

export default CssModule;
