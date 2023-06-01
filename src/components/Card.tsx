import { FunctionComponent } from "react";
import { Col } from "react-bootstrap";
import { ShowsT } from "../types/common";

type CardT = {
  show: ShowsT;
};

const Card: FunctionComponent<CardT> = ({ show }) => {
  return (
    <Col xs={11} md={6} lg={4}>
      <div className="showCard">
        <div className="showCard-body">
          <div className="image-wrapper">
            <img className="showCard-image" src={show.image.original} alt="" />
          </div>
        </div>
      </div>
    </Col>
  );
};
export default Card;
