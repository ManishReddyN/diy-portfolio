import { avatarBlur } from "@/constants/constants";
import styles from "@/styles/archive_item.module.css";
import Image from "next/image";
import Link from "next/link";
import { Col } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";

interface ArchiveItemProps {
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
}
export default function ArchiveItem({
  title,
  date,
  imageSrc,
  imageAlt,
  link,
}: ArchiveItemProps) {
  return (
    <Col lg={4} md={6} sm={12}>
      <Link href={link} target="_blank" className={styles.archiveItemLink}>
        <div className={styles.archiveItem}>
          <div className={styles.archiveItemImageContainer}>
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
          </div>
          <h5 className={styles.archiveItemHeading}>{title}</h5>
          <div className={styles.archiveItemDate}>
            <span className={styles.archiveItemDateIcon}>
              <FaRegCalendarAlt />
            </span>
            <span className={styles.archiveItemDateText}>{date}</span>
          </div>
        </div>
      </Link>
    </Col>
  );
}
