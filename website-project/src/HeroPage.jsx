import clsx from "clsx";
import heroImage from "./assets/pexels-josh-willink-11499-853406.jpg";
const HeroPage = () => {
  return (
    <>
      <div
        id="home"
        className="top-6 relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="absolute z-10 max-w-96 right-0 p-8 flex flex-col mr-6 justify-center items-center h-full text-center">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
            Unlock the confidence to attract the love you deserve
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover amazing features and services that await you.
          </p>
          <a
            onClick={(e) => {
              //Prevents reloading the page and appears to keep the url unchanged.
              //Also overrides defaults that prevents smooth scrolling.
              e.preventDefault();
              const val = document.getElementById("about");
              val.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            href="#"
            className="py-2 px-4 rounded hover:bg-teal-600 bg-teal-500 text-white"
          >
            <span>Get Started</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
