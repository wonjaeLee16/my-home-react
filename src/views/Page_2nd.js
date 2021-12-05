import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Page() {
  gsap.registerPlugin(ScrollTrigger);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const lastRef = useRef();

  const commonOption = {
    x: -30,
    opacity: 0,
    duration: 2
  }

  function* option() {
    yield commonOption;
    yield commonOption;
    yield commonOption;
    yield commonOption;
    yield commonOption;
    yield commonOption;
    yield commonOption;
    yield commonOption;
    yield commonOption;
    yield commonOption;
    yield commonOption;
  }

  useEffect(() => {
    gsap.timeline()
      .from(ref1.current, option().next().value)
      .from(ref2.current, option().next().value)
      .from(ref3.current, option().next().value)
      .from(ref4.current, option().next().value)
      .from(ref5.current, option().next().value)
      .from(ref6.current, option().next().value)
      .from(ref7.current, option().next().value)
      .to(lastRef.current, {
        x: -30,
        opacity: 0,
        duration: 2
      });
  }, [])
  return (
    <div className="page" ref={lastRef}>
      <h2 ref={ref1}>안녕하세요.</h2>
      <h2 ref={ref2}>개발자 이원재입니다.</h2>
      <h2 ref={ref3}>뭐 쓰지...</h2>
      <h2 ref={ref4}>쓸게 없어요 ㅠㅠ</h2>
      <h2 ref={ref5}>잉잉잉</h2>
      <h2 ref={ref6}>무무무</h2>
      <h2 ref={ref7}>그럼, 안녕~</h2>
    </div>
  )
}