import styles from "@/styles/skills.module.css";
import { Row } from "react-bootstrap";
import Title from "../core/title";
import SkillItem from "./skillItem";
import data from "@/config/data.json";

export default function Skills() {
  const interests = data.skills;
  return (
    <div className={styles.skillsContainer}>
      <Title title="Skills" />
      <div className={styles.skillsHolder}>
        {interests &&
          interests.map((item) => {
            const { icon: iconName, title } = item;
            return <SkillItem key={title} iconName={iconName} title={title} />;
          })}
      </div>
    </div>
  );
}
