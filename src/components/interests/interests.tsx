import { Row } from "react-bootstrap";
import Title from "../core/title";
import InterestItem from "./interestItem";
import data from "@/config/data.json";

export default function Interests() {
  const interests = data.interests;
  return (
    <div className="containerMain">
      <Title title="Interests" />
      <Row>
        {interests &&
          interests.map((item) => {
            const { icon: iconName, title, description } = item;
            return (
              <InterestItem
                key={title}
                iconName={iconName}
                title={title}
                description={description}
              />
            );
          })}
      </Row>
    </div>
  );
}
