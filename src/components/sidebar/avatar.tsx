import { avatarBlur } from "@/constants/constants";
import styles from "@/styles/avatar.module.css";
import Image from "next/image";
import Link from "next/link";
import data from "@/config/data.json";

export default function Avatar() {
  return (
    <div>
      <div className={styles.avatar_box}>
        <Link href="/">
          <div className={styles.avatar}>
            <Image
              className={styles.avatar_image}
              src={"/assets/" + data.displayPicture.fileName.trim()}
              alt={data.displayPicture.alt}
              width={120}
              height={120}
              placeholder="blur"
              priority={true}
              blurDataURL={avatarBlur}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
