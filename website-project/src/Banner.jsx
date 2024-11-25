import clsx from "clsx";

const Banner = () => {
  return (
    <>
      <div className="text-center p-6">
        <p className="text-2xl mb-6 sm:text-5xl">
          Let's get you back on track.
        </p>
        <p className="sm:text-2xl mb-6">
          Take charge of your dating life. Book a free session now.
        </p>
        {/**free session button */}
        <button
          className="py-2 px-4 rounded hover:bg-teal-600 bg-teal-500 text-white"
          type="button"
          onClick={() => {
            const elem = document.getElementById("testimonials");
            elem.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <span>FREE SESSION</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
