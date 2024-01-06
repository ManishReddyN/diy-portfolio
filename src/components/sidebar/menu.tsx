import Link from "next/link";
import {
  MdInfoOutline,
  MdMailOutline,
  MdOutlineAppRegistration,
  MdOutlineBookmarkAdd,
  MdOutlineDesignServices,
  MdOutlineFeed,
  MdOutlineHome,
} from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import MenuItem from "./menu_item";

export default function MenuItemList() {
  return (
    <div className="sidebar__menu">
      <Link href="/home" style={{ textDecoration: "none" }}>
        <MenuItem href="/home" title="Home" icon={MdOutlineHome}></MenuItem>
      </Link>
      <Link href="/profile" style={{ textDecoration: "none" }}>
        <MenuItem
          href="/profile"
          title="Profile"
          icon={MdInfoOutline}
        ></MenuItem>
      </Link>
      <Link href="/bio" style={{ textDecoration: "none" }}>
        <MenuItem
          href="/bio"
          title="Biography"
          icon={FaRegAddressCard}
        ></MenuItem>
      </Link>
      <Link href="/expertise" style={{ textDecoration: "none" }}>
        <MenuItem
          href="/expertise"
          title="Expertise"
          icon={MdOutlineDesignServices}
        ></MenuItem>
      </Link>
      <Link href="/portfolio" style={{ textDecoration: "none" }}>
        <MenuItem
          href="/portfolio"
          title="Portfolio"
          icon={MdOutlineAppRegistration}
        ></MenuItem>
      </Link>
      <Link href="/archive" style={{ textDecoration: "none" }}>
        <MenuItem
          href="/archive"
          title="Archive"
          icon={MdOutlineFeed}
        ></MenuItem>
      </Link>
      <Link href="/contact" style={{ textDecoration: "none" }}>
        <MenuItem
          href="/contact"
          title="Contact"
          icon={MdMailOutline}
        ></MenuItem>
      </Link>
    </div>
  );
}
