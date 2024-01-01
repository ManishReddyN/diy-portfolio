import { IconType } from "react-icons";
import styles from "@/styles/section_title.module.css";
interface SectionTitleProps {
  icon: IconType;
  title: string;
}
export default function SectionTitle({ icon, title }: SectionTitleProps) {
  const Icon = icon;
  return (
    <div className={styles.sectionTitle}>
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}
