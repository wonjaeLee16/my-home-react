import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Page_1st from 'views/Page_1st';
import Page_2nd from 'views/Page_2nd';

export default function App() {
  // gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".first-page",
  //       // pin: true,
  //       markers: true,
  //       start: "top top",
  //       scrub: true,
  //     },
  //   });
  // }, []);
  return (
    <div className="content">
      <Page_1st/>
      <Page_2nd/>
      <div></div>
    </div>
  );
}