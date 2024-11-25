const ContactPage = () => {
  return (
    <div id="contact-us" className="w-full mx-auto">
      {/**Placeholder container for sell button scroll */}
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="md:flex w-full justify-around p-4 mx-auto  md:flex-row gap-2 ">
        <div
          id="right-div"
          className="md:flex md:sticky top-44 flex-wrap md:h-[100%] md:w-96 text-sm order-2 flex-col gap-4 mb-8 flex p-4  overflow-hidden mr-12 md:px-6 md:py-4"
        >
          <p className="font-extrabold text-2xl sm:text-4xl">Alexa.</p>
          <p className=" font-bold sm:text-2xl">Online dating coach.</p>
          <p>456 Newbury Lane, Ashford, Kent, AB12 3XY, United Kingdom.</p>
        </div>

        <div className="rounded-lg md:w-[21rem] lg:w-[36rem] order-1 dark:bg-gray-900 mt-1 p-4 bg-white border-slate-500 shadow sm:p-6 md:p-8">
          <h5 className="text-2xl pb-6 from-neutral-400 text-gray-900 dark:text-white">
            Free Sessions and General enquiry
          </h5>
          <form
            id="msg-form"
            className="space-y-6 "
            noValidate
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
              const formValid = document.forms["msg-form"].reportValidity();
              if (formValid) {
                let msgDiv = document.getElementById("msg-div");
                let msgForm = document.getElementById("msg-form");
                msgDiv.classList.toggle("hidden");
                msgForm.reset();
                setTimeout(() => {
                  msgDiv.style.display = "none";
                }, 5000);
              }
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-bold text-sm  text-gray-900 dark:text-white"
              >
                Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className=" bg-gray-50 border  valid:outline-green-500 invalid:outline-red-700 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
              >
                Your email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className=" bg-gray-50 border valid:outline-green-500 invalid:outline-red-700 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="telephone"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
              >
                Telephone *
              </label>
              <input
                type="tel"
                name="telephone"
                id="telephone-number"
                placeholder=""
                className=" bg-gray-50 border  valid:outline-green-500 invalid:outline-red-700 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              <small id="phone-validate" className="mt-2  text-sm"></small>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-bold text-sm  text-gray-900 dark:text-white"
              >
                Message *
              </label>
              <textarea
                className=" w-full placeholder:text-sm text-sm bg-gray-50 border p-2 border-gray-300 text-gray-900 rounded-lg"
                name="message"
                id="textarea"
                cols="30"
                rows="10"
                required
                placeholder="Please include all useful information"
              ></textarea>{" "}
              <small id="msg-validate" className="mt-2 text-sm "></small>
            </div>
            <button
              type="submit"
              id="submit-btn"
              className="w-full text-white bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:outline-none focus:ring-teal-200 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-blue-600"
            >
              Send message
            </button>
          </form>
          <div
            id="msg-div"
            className="rounded w-full hidden  mx-auto items-center justify-center  border-green-500 text-green-700 p-6"
            role="alert"
          >
            <p
              id="submit-msg"
              className="text-center  flex items-center justify-center bg-green-100 border-l-4 text-black mt-2 p-2"
            >
              Your message was sent successfully.
              <svg
                id="submit-check"
                className="w-20 h-10 fill-green-500 dark:fill-white "
                fill=""
                viewBox="-14 -14 84.00 84.00"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                strokeWidth="0.00056"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 25.0468 39.7188 C 25.8202 39.7188 26.4530 39.3437 26.9452 38.6172 L 38.5234 20.4063 C 38.8046 19.9375 39.0858 19.3984 39.0858 18.8828 C 39.0858 17.8047 38.1483 17.1484 37.1640 17.1484 C 36.5312 17.1484 35.9452 17.5 35.5234 18.2031 L 24.9296 35.1484 L 19.4921 28.1172 C 18.9765 27.4141 18.4140 27.1563 17.7812 27.1563 C 16.7499 27.1563 15.9296 28 15.9296 29.0547 C 15.9296 29.5703 16.1405 30.0625 16.4687 30.5078 L 23.0312 38.6172 C 23.6640 39.3906 24.2733 39.7188 25.0468 39.7188 Z"></path>
                </g>
              </svg>
            </p>
          </div>
        </div>
      </div>

      <section id="buy-page" className="">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </section>
    </div>
  );
};

export default ContactPage;
