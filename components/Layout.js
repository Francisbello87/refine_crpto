import Nav from "@/components/Nav";
import { Children } from "react";

export default function Layout({children}) {
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
      className=" bg-black text-white flex items-center flex-col justify-center   w-full min-h-screen"
    >
      <Nav />
      {children}
    </div>
  );
}
