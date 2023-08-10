import Nav from "@/components/Nav";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Layout({ children, header, heading, paragraph }) {
  const background = useRef(null);
  const navRef = useRef(null)

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { opacity: 0 } });

    timeline
      .fromTo(background.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(
        header.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        heading.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        paragraph.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        navRef.current,{ y:-100, opacity:0},
        {y: 0, opacity:1, delay: 3},"+=1"
      )
      .call(() => {
        header.current.classList.add("gradient-text");
        heading.current.classList.add("gradient-text");
      });
  }, [header, heading, paragraph, navRef]);

  const backgroundStyle = {
    backgroundImage: 'url("/background.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    margin: "auto",
  };

  return (
    <div
      ref={background}
      style={backgroundStyle}
      className="bg-black text-white flex items-center flex-col justify-center w-full h-full"
    >
      <Nav />
      {children}
    </div>
  );
}
