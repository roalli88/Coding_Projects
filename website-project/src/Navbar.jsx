import clsx from "clsx";

const Navbar = () => {
  //Menu is not open on mobile screens by default.
  let isOpen = false;
  return (
    <div>
      <header
        className={clsx(
          "fixed text-white top-0 z-50 w-full md:h-16 bg-[#7D4E57] p-2 md:items-center shadow-lg md:p-4 lg:p-6 md:flex md:justify-between "
        )}
      >
        <div className=" flex justify-between p-2 ">
          {/* Logo */}
          <a className="p-3 mt-2" href="#">
            <span id="logo"> Alexa</span>
          </a>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => {
                document.getElementById("menu").classList.toggle("hidden");
                document.getElementById("cross").classList.toggle("hidden");
                document.getElementById("hamburger").classList.toggle("hidden");
              }}
              type="button"
              className={" focus:text-red-50"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 "
              >
                <path
                  id="cross"
                  className="hidden"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                  fill="#000"
                />
                <path
                  id="hamburger"
                  className=""
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        {/*Navigation links*/}
        <div
          id="menu"
          className={clsx(
            "p-3 md:ml-0 md:flex md:justify-center md:mb-3 md:items-center md:mt-5 ",
            isOpen ? "block" : "hidden"
          )}
        >
          <a
            onClick={(e) => {
              //Prevents reloading the page and appears to keep the url unchanged.
              //Also overrides defaults that prevents smooth scrolling.
              e.preventDefault();
              const val = document.getElementById("home");
              val.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="block  rounded md:ml-4 px-4 py-1  font-medium hover:bg-teal-500"
            href="#"
          >
            HOME
          </a>

          <a
            onClick={(e) => {
              //Prevents reloading the page and appears to keep the url unchanged.
              //Also overrides defaults that prevents smooth scrolling.
              e.preventDefault();
              const val = document.getElementById("services");
              val.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="block rounded md:ml-4 px-4 py-1 font-medium hover:bg-teal-500"
            href="#services"
          >
            <span>SERVICES</span>
          </a>

          <a
            onClick={(e) => {
              e.preventDefault();
              const myElem = document.getElementById("about");
              myElem.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="block rounded md:ml-4 px-4 py-1  font-medium hover:bg-teal-500"
            href="/#gallery"
          >
            <span>ABOUT</span>
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              const myElem = document.getElementById("contact-us");
              myElem.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="block rounded md:ml-4 px-4 py-1 font-medium hover:bg-teal-500"
            href="/#contact-us"
          >
            <span>CONTACT</span>
          </a>
        </div>
        <div
          className={clsx(
            "p-2 lg:inline-flex md:justify-between md:w-40 items-center ",
            isOpen ? "block" : "hidden"
          )}
        >
          <div>
            {/**free session button */}
            <button
              className="py-2 px-4 rounded hover:bg-teal-600 bg-teal-500 text-white"
              type="button"
              onClick={() => {
                const elem = document.getElementById("contact-us");
                elem.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span>FREE SESSION</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
