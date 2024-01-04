import Link from "next/link";
import styles from "../styles/404.module.css";
export default function Custom404() {
  return (
    <div className={styles.scene}>
      <div className={styles.planet}>
        <div className={styles.crater}></div>
        <div className={styles.crater}></div>
        <div className={styles.crater}></div>
        <div className={styles.crater}></div>
        <div className={styles.crater}></div>
        <div className={styles.rover}>
          <div className={styles.body}></div>
          <div className={styles.wheels}></div>
          <div className={styles.trace}></div>
        </div>
        <div className={styles.flag}>404</div>
      </div>
      <div className={styles.message}>
        <p>
          There is no life here, try to find{" "}
          <Link href={"/home"}>something else</Link>
        </p>
      </div>
    </div>
  );
}
