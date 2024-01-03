import { Row } from "react-bootstrap";
import Title from "../core/title";
import ArchiveItem from "./archiveItem";
import data from "@/config/data.json";

export default function Archive() {
  const archiveItems = data.archive.archiveItems;
  return (
    <div className="containerMain">
      <Title title="Archive" />

      <Row>
        {archiveItems.map((item) => (
          <ArchiveItem
            key={item.title}
            title={item.title}
            date={item.date}
            imageSrc={"/assets/archive/" + item.imageName.trim()}
            imageAlt={item.imageAlt}
            link={item.link}
          />
        ))}
      </Row>
    </div>
  );
}
