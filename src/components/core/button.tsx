import styles from "@/styles/core.module.css";

export default function Button({ text = "Text", onClick = () => {} }) {
  {
    return (
      <button className={styles.formButton} type="submit" onClick={onClick}>
        {text}
      </button>
    );
  }
}
