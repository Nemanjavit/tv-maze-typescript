import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";
import ReactPaginate from "react-paginate";

import Card from "../components/Card";
import TitleWithLink from "../components/TitleWithLink";
import { useAppSelector } from "../store/typedStoreHooks";
import { getTopRatedShows } from "../store/shows/selectors";
import useIsMobile from "../hooks/useIsMobile";

const PER_PAGE = 12;
const TopRated = () => {
  const allShows = useAppSelector((state) => getTopRatedShows(state));
  const { isTablet, isMobile } = useIsMobile();
  const [currentPage, setCurrentPage] = useState(0);
  const alreadyShown = PER_PAGE * currentPage;
  const currentPageData = allShows.slice(alreadyShown, alreadyShown + PER_PAGE);
  const pageCount = Math.ceil(allShows.length / PER_PAGE);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };
  const getPageDisplayed = () => {
    if (isMobile) {
      return { pageRangeDisplayed: 1, marginPagesDisplayed: 1 };
    } else if (isTablet) {
      return { pageRangeDisplayed: 3, marginPagesDisplayed: 3 };
    } else {
      return { pageRangeDisplayed: 5, marginPagesDisplayed: 5 };
    }
  };

  return (
    <Container className="container-padding">
      <div className="topRatedPage">
        <TitleWithLink title={"all top rated shows at the moment"} />

        <Row className="gy-4">
          {currentPageData.map((show) => {
            return (
              <Col md={6} lg={4} key={show.id}>
                <Card key={show.id} show={show} />
              </Col>
            );
          })}
        </Row>
        <ReactPaginate
          pageCount={pageCount}
          nextLabel={<ImArrowRight2 />}
          onPageChange={handlePageChange}
          previousLabel={<ImArrowLeft2 />}
          activeLinkClassName={"active-link"}
          disabledLinkClassName={"disabled-link"}
          containerClassName="top-rated-pagination  mt-5 p-0"
          pageRangeDisplayed={getPageDisplayed().pageRangeDisplayed}
          marginPagesDisplayed={getPageDisplayed().marginPagesDisplayed}
        />
      </div>
    </Container>
  );
};

export default TopRated;
