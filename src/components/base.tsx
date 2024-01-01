import styles from "@/styles/base.module.css";
import Head from "next/head";

import SideBar from "./sidebar/sidebar";
import { Col, Container, Row } from "react-bootstrap";

interface BaseProps {
  children: JSX.Element;
}
export default function Base({ children }: BaseProps) {
  return (
    <div id="base-wrapper">
      <Head>
        <title>Manish Reddy Nandineni</title>
        <meta name="description" content="Portfolio website of Manish Reddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container fluid>
        <Row>
          <SideBar />
          <Col className={styles.mainContent} s={12}>
            <main id="page-wrapper">{children}</main>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
