import styles from "@/styles/sidebar.module.css";
import { Sidebar, useProSidebar } from "react-pro-sidebar";
import Avatar from "./avatar";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { useMediaQuery } from "../../utilities/mediaQuery";
import MenuItemList from "./menu";
import { Col } from "react-bootstrap";

export default function SideBar() {
  const isSmallScreen = useMediaQuery(1080);
  const { toggleSidebar, toggled } = useProSidebar();

  return (
    <Col
      md={"auto"}
      style={{
        padding: 0,
        backgroundColor: "var(--secondary-background-color)",
        top: 0,
        left: 0,
        position: "fixed",
        zIndex: 99,
      }}
    >
      {isSmallScreen && !toggled && (
        <MdOutlineMenu
          size={25}
          className={styles.menu_icon}
          onClick={() => {
            toggleSidebar();
          }}
          color="var(--primary-text-color)"
        ></MdOutlineMenu>
      )}
      <Sidebar
        className="sticky-top"
        backgroundColor="var(--secondary-background-color)"
        customBreakPoint="1080px"
        width="300px"
        style={{ zIndex: 99, height: "100vh", border: "none" }}
        transitionDuration={500}
      >
        {isSmallScreen && toggled && (
          <MdOutlineClose
            size={25}
            className={styles.close_icon}
            onClick={() => {
              toggleSidebar();
            }}
            color="var(--primary-text-color)"
          ></MdOutlineClose>
        )}
        <Avatar />
        <div className={styles.sidebar_separator}></div>
        <MenuItemList />
      </Sidebar>
    </Col>
  );
}
