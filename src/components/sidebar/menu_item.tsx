import styles from "@/styles/menu_item.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface MenuItemProps {
  icon: IconType;
  href: string;
  title: string;
}
export default function MenuItem({ icon, href, title }: MenuItemProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (router.pathname === href) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [router]);
  const Icon = icon;

  return (
    <div className={styles.outer_container}>
      <div
        className={
          isActive
            ? styles.active_item_container
            : styles.regular_item_container
        }
      >
        {isActive && <div className={styles.active_item_bar}></div>}
        <div style={{ display: "flex" }}>
          <Icon className={styles.iconStyle} />
          <span
            className={
              isActive ? styles.active_item_title : styles.regular_item_title
            }
          >
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}
