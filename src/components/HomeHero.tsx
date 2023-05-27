import { Container, Row } from "react-bootstrap";
import { useAppSelector } from "../store/typedStoreHooks";
import { getAllShows, getTopRatedShows } from "../store/shows/selectors";
import Card from "./Card";

const HomeHero = () => {
  const allShows = useAppSelector((state) => getTopRatedShows(state));

  if (!allShows) return null;

  return (
    <Container>
      <div className="container-padding homeHero">
        <Row className="flex-nowrap">
          {allShows.map((show) => (
            <Card key={show.id} show={show} />
          ))}
        </Row>
      </div>
    </Container>
  );
};
export default HomeHero;
