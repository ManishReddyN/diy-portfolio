import { useMediaQuery } from "@/utilities/mediaQuery";
import styles from "@/styles/title.module.css";
export default function Title({ title = "Title" }) {
  const isMobile = useMediaQuery(1080);
  return (
    <div
      className={[
        styles.sectionTitle,
        isMobile ? styles.sectionTitleMobile : styles.sectionTitlePC,
      ].join(" ")}
    >
      <h1>{title}</h1>
      <span>{title}</span>
    </div>
  );
}
