import Link from "next/link";
import ReactIcon from "../core/reactIcon";

interface SocialIconProps {
  iconName: string;
  link: string;
}
export default function SocialIcon({ iconName, link }: SocialIconProps) {
  return (
    <div>
      <Link target="_blank" href={link} rel="noopener noreferrer">
        <ReactIcon iconName={iconName} />
      </Link>
    </div>
  );
}
