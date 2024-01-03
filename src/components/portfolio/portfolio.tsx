import { Row } from "react-bootstrap";
import Title from "../core/title";
import PortfolioItem from "./portfolioItem";
import data from "@/config/data.json";

export default function Portfolio() {
  const portfolioItems = data.portfolio.portfolioItems;
  return (
    <div className="containerMain">
      <Title title="Portfolio" />
      <Row>
        {portfolioItems.map((item) => (
          <PortfolioItem
            key={item.title}
            title={item.title}
            imageSrc={"/assets/portfolio/" + item.imageName.trim()}
            imageAlt={item.imageAlt}
            link={item.link}
            description={item.description}
            technologies={item.technologies}
          />
        ))}{" "}
      </Row>
    </div>
  );
}
