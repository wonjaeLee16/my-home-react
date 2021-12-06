import gsap, { TextPlugin } from "gsap/all";
import { useEffect, useRef } from "react";

export default function Page({index}) {
  const ref = useRef();
  const cursorRef = useRef();
  const scrollRef = useRef();
  const pageRef = useRef();

  const words = [
    "안녕하세요.", 
    "개발자 이원재입니다.", 
    "이 사이트는 저의 개인 사이트이며",
    "React로 작성되었습니다.",
    "현재는 FRONT END만으로 구성되어 있으며",
    "React, SCSS, GSAP 등의 공부용으로 작성하였습니다.",
    "잘 부탁드립니다."
  ];

  gsap.registerPlugin(TextPlugin);
  useEffect(() => {
    // 커서 이벤트
    gsap.to(cursorRef.current, {
      opacity: 0, 
      ease: "power2.inOut", 
      repeat: -1
    });
    console.log(index, index * pageRef.current.offsetHeight, (index + 1) * pageRef.current.offsetHeight);
    // 텍스트 이벤트
    let masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        toggleActions: "restart reset restart reset",
        markers: true,
        
        // start: index * pageRef.current.offsetHeight,
        // end: (index + 1) * pageRef.current.offsetHeight,
      },
    });
    words.forEach((word, i) => {
      let tl = gsap.timeline({
        repeat: 1, 
        yoyo: true, 
        repeatDelay: .5
      });
      
      tl.to(ref.current, {
        duration: 0.5 + word.length * .05, 
        text: word,
      });

      masterTl.add(tl);
      if(words.length === i + 1) {
        // 스크롤 이벤트
        masterTl.add(
          gsap.timeline()
          .to(scrollRef.current, {
            delay: .5,
            opacity: 1,
            duration: 1,
            repeat: -1
          })
        );
      }


      
    })
  }, [])
  return (
    <div ref={pageRef} style={{backgroundColor: "#aaa"}}>
      <h1>
        <span ref={ref}></span>
        <span ref={cursorRef}>_</span>
      </h1>
      <div className="scroll-down" ref={scrollRef}>Scroll down</div>
    </div>
  )
}