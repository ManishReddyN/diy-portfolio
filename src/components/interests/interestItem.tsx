import styles from "@/styles/interest_item.module.css";
import { Col } from "react-bootstrap";
import ReactIcon from "../core/reactIcon";

interface InterestItemProps {
  iconName: string;
  title: string;
  description: string;
}
export default function InterestItem({
  iconName,
  title,
  description,
}: InterestItemProps) {
  return (
    <Col lg={4} md={6} sm={12}>
      <div className={styles.interestItem}>
        <div className={styles.interestItemIcon}>
          <ReactIcon iconName={iconName} />
        </div>
        <h3 className={styles.interestItemHeading}>{title}</h3>
        <p className={styles.interestItemDescription}>{description}</p>
      </div>
    </Col>
  );
}
