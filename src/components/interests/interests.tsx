import { Row } from "react-bootstrap";
import Title from "../core/title";
import InterestItem from "./interestItem";
import data from "@/config/data.json";
import { getDynamicIcon } from "../core/dynamicIconHelper";

export default function Interests() {
  const interests = data.interests;
  return (
    <div className="containerMain">
      <Title title="Interests" />
      <Row>
        {interests &&
          interests.map((item) => {
            const { icon, title, description } = item;
            return (
              <InterestItem
                key={title}
                icon={getDynamicIcon(icon)}
                title={title}
                description={description}
              />
            );
          })}
      </Row>
    </div>
  );
}
