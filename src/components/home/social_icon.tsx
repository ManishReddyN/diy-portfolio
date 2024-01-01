import Link from "next/link";
import { DynamicIconType } from "../core/dynamicIconHelper";

interface SocialIconProps {
  icon: DynamicIconType;
  link: string;
}
export default function SocialIcon({ icon, link }: SocialIconProps) {
  const Icon = icon;
  return (
    <div>
      <Link target="_blank" href={link} rel="noopener noreferrer">
        <Icon style={{ marginTop: "0px" }} />
      </Link>
    </div>
  );
}
