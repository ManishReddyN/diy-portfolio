import styles from "@/styles/skill_item.module.css";
import ReactIcon from "../core/reactIcon";

interface SkillItemProps {
  iconName: string;
  title: string;
}
export default function SkillItem({ iconName, title }: SkillItemProps) {
  return (
    <span className={styles.skillItem}>
      <span className={styles.skillItemIcon}>
        <ReactIcon iconName={iconName.trim()} />
      </span>
      {title}
    </span>
  );
}
