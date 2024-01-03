import styles from "@/styles/home.module.css";
import SocialIcon from "./social_icon";
import data from "@/config/data.json";
import { getDynamicIcon } from "../core/dynamicIconHelper";

export default function Home() {
  const homeData = data.home;
  const socialLinks = homeData.socialLinks;
  const circlesBackgroundAnimation = (
    <ul className={styles.circles}>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
  return (
    <div className={styles.homeContainer}>
      {circlesBackgroundAnimation}
      <div className={styles.introContainer}>
        <div className={styles.homeIntro}>
          <h1>
            Hi, I am{" "}
            <span className={styles.highlightName}>{homeData.name}</span>
          </h1>
          <p className={styles.intro}>{homeData.intro}</p>
          <ul className={styles.socialIconsBordered + " " + styles.socialIcons}>
            {socialLinks.map((socialLink) => {
              const socialIcon = getDynamicIcon(socialLink.icon);
              return (
                socialIcon && (
                  <li key={socialLink.name}>
                    <SocialIcon icon={socialIcon} link={socialLink.link} />
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
