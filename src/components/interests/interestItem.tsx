import styles from "@/styles/interest_item.module.css";
import { Col } from "react-bootstrap";
import { DynamicIconType } from "../core/dynamicIconHelper";

interface InterestItemProps {
  icon: DynamicIconType;
  title: string;
  description: string;
}
export default function InterestItem({
  icon,
  title,
  description,
}: InterestItemProps) {
  const Icon = icon;
  return (
    <Col lg={4} md={6} sm={12}>
      <div className={styles.interestItem}>
        <Icon className={styles.interestItemIcon} />
        <h3 className={styles.interestItemHeading}>{title}</h3>
        <p className={styles.interestItemDescription}>{description}</p>
      </div>
    </Col>
  );
}
