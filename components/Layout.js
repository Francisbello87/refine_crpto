import Nav from "@/components/Nav";
// import { Children } from "react";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function Layout({ children }) {
  useEffect(() => {
    gsap.fromTo(".background", { opacity: 0 }, { opacity: 1 });
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
      style={backgroundStyle}
      className=" bg-black background text-white flex items-center flex-col justify-center   w-full min-h-screen"
    >
      <Nav />
      {children}
    </div>
  );
}
