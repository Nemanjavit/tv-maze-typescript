import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Container, Row, Col } from "react-bootstrap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Card from "./Card";
import TitleWithLink from "./TitleWithLink";
import useIsMobile from "../hooks/useIsMobile";
import { useAppSelector } from "../store/typedStoreHooks";
import { getTopRatedShows } from "../store/shows/selectors";

const HomeHero = () => {
  const { isMobile } = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollDistance, setScrollDistance] = useState<number>(0);
  const allShows = useAppSelector((state) => getTopRatedShows(state));
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setIsLoaded(true);
    return () => {
      setIsLoaded(false);
    };
  }, []);

  useEffect(() => {
    const scrollWidth =
      document.querySelector(".card-slider")?.scrollWidth || 0;

    const containerWidth =
      document.querySelector(".homeHero")?.getBoundingClientRect().width || 0;

    setScrollDistance(scrollWidth - containerWidth);
  }, [allShows]);

  useEffect(() => {
    if (!rowRef.current && !containerRef.current) return;

    let ctx = gsap.context(() => {
      gsap.fromTo(
        rowRef.current,
        { x: 0 },
        {
          x: -scrollDistance,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top ${isMobile ? "-80px" : "-80px"}`,
            end: "+=4000",
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [allShows, isLoaded, scrollDistance]);

  return (
    <Container ref={containerRef}>
      <div className="container-padding homeHero">
        <TitleWithLink
          title={"Top rated shows at the moment:"}
          link={{
            to: "/toprated",
            text: "Top Rated Shows",
          }}
        />
        <Row ref={rowRef} className="flex-nowrap card-slider">
          {allShows.slice(0, 10).map((show) => (
            <Col key={show.id} xs={11} md={6} lg={4}>
              <Card show={show} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};
export default HomeHero;
