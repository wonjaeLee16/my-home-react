import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "assets/css/app.scss"
import Page_1st from 'views/Page_1st';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      yPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetHeight
      }
    });
  }, []);

  return (
    <div className="container" ref={panelsContainer}>
      <section className="panel gray" ref={(e) => createPanelsRefs(e, 0)}>
        <Page_1st index={0}/>
      </section>
      <section className="panel red" ref={(e) => createPanelsRefs(e, 1)}>
        <Page_1st index={1}/>
      </section>
      <section className="panel orange" ref={(e) => createPanelsRefs(e, 2)}>
        TWO
      </section>
      <section className="panel purple" ref={(e) => createPanelsRefs(e, 3)}>
        THREE
      </section>
      <section className="panel green" ref={(e) => createPanelsRefs(e, 4)}>
        FOUR
      </section>
    </div>
  );
}
