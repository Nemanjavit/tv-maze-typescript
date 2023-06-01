import { FunctionComponent } from "react";
import { Col, Row } from "react-bootstrap";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-router-dom";

type TitleWithLinkT = {
  title: string;
  link?: {
    text: string;
    to: string;
  };
};

const TitleWithLink: FunctionComponent<TitleWithLinkT> = ({ title, link }) => {
  return (
    <Row>
      <Col xs={12} md={7}>
        <h2 className="h2 mb-5">{title}</h2>
      </Col>
      <Col className="d-flex justify-content-end" md={{ span: 4, offset: 1 }}>
        {!!link && (
          <Link to={link.to}>
            {link?.text}
            <ImArrowRight2 />
          </Link>
        )}
      </Col>
    </Row>
  );
};

export default TitleWithLink;
