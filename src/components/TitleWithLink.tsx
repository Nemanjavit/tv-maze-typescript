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
    <Row className="titleWithLink">
      <Col xs={12} md={7}>
        <h2 className="h2 mb-5">{title}</h2>
      </Col>
      <Col md={{ span: 4, offset: 1 }}>
        <Row>
          {!!link && (
            <Link
              className="d-flex justify-content-end align-items-center subheading-medium text-decoration-none text-dark"
              to={link.to}
            >
              <span className="titleWithLink-text">{link?.text}</span>
              <ImArrowRight2 />
            </Link>
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default TitleWithLink;
