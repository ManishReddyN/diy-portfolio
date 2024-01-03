import styles from "@/styles/bio_item.module.css";
import { Col, Row } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
interface RoleAndYearProps {
  title: string;
  year: string;
  description?: string;
}
interface BioItemProps {
  organization: string;
  hyperlink: string;
  roleAndYearArray?: Array<RoleAndYearProps>;
}
export default function BioItem({
  organization,
  hyperlink,
  roleAndYearArray,
}: BioItemProps) {
  return (
    <div className={styles.bioItem}>
      <h5>
        {organization}
        <span>
          <FaLink onClick={() => window.open(hyperlink, "_blank")} />
        </span>
      </h5>
      <div>
        {roleAndYearArray &&
          roleAndYearArray.map((roleAndYear, index) => {
            return (
              <Row key={index}>
                <Col md={3} sm={12} className={styles.bioItemDate}>
                  {roleAndYear.year}
                </Col>
                <Col md={9} sm={12} className={styles.bioItemContent}>
                  {roleAndYear.title}
                  <p>{roleAndYear.description}</p>
                </Col>
              </Row>
            );
          })}
      </div>
    </div>
  );
}
