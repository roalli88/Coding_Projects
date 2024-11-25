import clsx from "clsx";
import coachImg from "./assets/pexels-mizunokozuki-12903296.jpg";

const AboutPage = () => {
  return (
    <>
      <div id="about" className="h-[2em]"></div>
      <div className="sm:columns-2 h-2/3 p-6  sm:gap-2">
        <img
          className="rounded-lg sm:h-5/6 md:h-[80%] max-w-full shadow-md"
          src={coachImg}
          alt="Image of woman smiling at a desk"
        />
        <div className="h-[100%]">
          <div className="flex md:flex justify-center flex-col p-4 md:sticky top-48">
            <h2 className="font-bold sm:text-4xl pb-6">Hi. I am Alexa.</h2>
            <p className=" sm:text-2xl font-normal leading-tight tracking-wide  ">
              I am dedicated to helping you transform your dating life into
              something meaningful and fulfilling. My coaching approach empowers
              you to step into each interaction with confidence, authenticity,
              and clarity on what you truly want.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutPage;
