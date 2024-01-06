import styles from "@/styles/skill_item.module.css";
import { Col } from "react-bootstrap";
import { DynamicIconType } from "../core/dynamicIconHelper";

interface SkillItemProps {
  icon: DynamicIconType;
  title: string;
}
export default function SkillItem({ icon, title }: SkillItemProps) {
  const Icon = icon;
  return (
    <span className={styles.skillItem}>
      <Icon className={styles.skillItemIcon} />
      {title}
    </span>
  );
}
