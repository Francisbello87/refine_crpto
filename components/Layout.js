import Nav from "@/components/Nav";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Layout({
  children,
  header,
  heading,
  paragraph,
  button,
  formRef,
  formDiv,
  earlyAccess,
}) {
  const background = useRef(null);
  const navRef = useRef(null);

  const animate = () => {
    gsap
      .timeline({ defaults: { opacity: 0, ease: "back" } })
      .set('.background', {autoAlpha:1})
      .fromTo(
        background.current,
        { opacity: 0 },
        { opacity: 1, ease: "linear" }
      )
      .fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
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
      .fromTo(formDiv.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(formRef.current, { opacity: 0 }, { opacity: 1 })
      .fromTo(
        button.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        earlyAccess.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.5"
      )
      .call(() => {
        header.current.classList.add("shimmer");
        heading.current.classList.add("shimmer");
      });
  };

  useEffect(() => {
    animate();
   gsap.set('.bg', {autoAlpha: 1})
  }, []);

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
      className="bg-black bg text-white  flex items-center flex-col justify-center w-full h-full"
    >
      <div ref={navRef} className=" justify-end flex items-center self-end">
        <Nav />
      </div>
      {children}
    </div>
  );
}
