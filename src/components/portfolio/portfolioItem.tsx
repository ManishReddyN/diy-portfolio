import { avatarBlur } from "@/constants/constants";
import styles from "@/styles/portfolio_item.module.css";
import Image from "next/image";
import Link from "next/link";
import { Col } from "react-bootstrap";
import { FiExternalLink, FiLink } from "react-icons/fi";
import { MdLink } from "react-icons/md";

interface PortfolioItemProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
  description: string;
  technologies: string[];
}
export default function PortfolioItem({
  title,
  imageSrc,
  imageAlt,
  link,
  description,

  technologies,
}: PortfolioItemProps) {
  return (
    <Col lg={4} md={6} sm={12}>
      <Link href={link} target="_blank" className={styles.portfolioItemLink}>
        <div className={styles.portfolioItem}>
          <div className={styles.portfolioItemImageContainer}>
            <div className={styles.portfolioItemImage}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={100}
                height={100}
                placeholder="blur"
                priority={false}
                blurDataURL={avatarBlur}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <ul>
                <MdLink />
              </ul>
            </div>
          </div>
          <div>
            <h5 className={styles.portfolioItemHeading}>{title}</h5>
            <p className={styles.portfolioItemDescription}>{description}</p>
            <div className={styles.portfolioItemTechnologies}>
              {technologies.map((technology, index) => {
                return <span key={index}>{technology}</span>;
              })}
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}
