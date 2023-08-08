import Layout from "@/components/Layout";
import Nav from "@/components/Nav";

export default function Home() {
  const backgroundStyle = {
    backgroundImage: 'url("/background.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    margin: 'auto',
  }
  return (
  <Layout>
        <main className=" text-center w-full m-auto ">
          <div className=" flex flex-col  w-full gradient-text  items-center bg-[#000] rounded-full justify-center  text-white px-4">
            <div className="font-bold text-[15vw] md:text-[7vw] mb-4  gradient-text">
              <h1>Your crypto.</h1>
              <h1>Family style.</h1>
            </div>
            <p className=" md:text-xlhidden text-sm bg-opacity-25 text-center text-[#484848] whitespace-nowrap">
              Explore Ethereum with the best wallet for iOS. <br />
              Interacting with crypto has never been so simple.
            </p>
            <div className=" bg-black gradient-border-mask self-stretch bg-opacity-20 my-8 rounded-[3.25rem] w-full max-w-[690px] mx-auto flex items-center justify-between">
              <input
                type="email"
                className=" bg-transparent placeholder:text-white w-full self-stretch  outline-none p-6"
                placeholder=" Enter your email"
              />
              <div className="  rounded-[30px]  px-1 gradient-border-mask btn  mr-2">
                <button className=" bg-white bg-opacity-0 sheen border text-sm whitespace-nowrap rounded-[30px] md:w-[152px] px-5 h-[58px] md:text-lg">
                  Join Waitlist
                </button>
              </div>
            </div>
            <p className="text-white text-base">
              <span className=" text-[#484848]">Want early access?</span> Learn
              how
            </p>
          </div>
        </main>
   </Layout>
  );
}
