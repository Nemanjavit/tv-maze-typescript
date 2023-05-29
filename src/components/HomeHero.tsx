import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Container, Row } from "react-bootstrap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Card from "./Card";
import { useAppSelector } from "../store/typedStoreHooks";
import { getTopRatedShows } from "../store/shows/selectors";

const HomeHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const allShows = useAppSelector((state) => getTopRatedShows(state));
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!rowRef.current) return;

    const scrollWidth = rowRef.current.scrollWidth || 0;
    const containerWidth = containerRef.current?.clientWidth || 0;
    const scrollDistance = scrollWidth - containerWidth;
    console.log(scrollDistance);
    let ctx = gsap.context(() => {
      gsap.fromTo(
        rowRef.current,
        { x: 0 },
        {
          x: -scrollDistance,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=4000",
            pin: true,
            scrub: 0.8,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [isLoaded]);

  if (!allShows) return null;

  return (
    <Container ref={containerRef}>
      <div className="container-padding homeHero">
        <Row ref={rowRef} className="flex-nowrap">
          {allShows.map((show) => (
            <Card key={show.id} show={show} />
          ))}
        </Row>
      </div>
    </Container>
  );
};
export default HomeHero;
