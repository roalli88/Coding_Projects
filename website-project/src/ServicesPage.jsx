const ServicesPage = () => {
  return (
    <>
      <div className="h-[2em]" id="services"></div>
      <div className="flex flex-col">
        <h2 className="text-center text-3xl sm:text-4xl mb-3">
          How can I help?{" "}
        </h2>
        <p className="text-center text-xl lg:text-2xl mb-3">
          By offering you a bespoke service that focuses on your needs.
        </p>
        <div className="sm:flex text-center flex flex-col p-4 rounded-sm gap-1 md:flex-row">
          <div className="bg-slate-400 w-full p-6">
            <h3 className="text-2xl font-bold">Dating Strategy Sessions</h3>
            We will work together to define your dating goals, identify any
            roadblocks, and create a personalized plan to help you meet
            compatible people. Gain clarity and confidence as we build a
            strategy that aligns with your unique relationship aspirations.
          </div>
          <div className="bg-cyan-200 text-center w-full p-6">
            <h3 className="text-2xl font-bold">Mock Dates & Feedback</h3>
            <p>
              Practice your dating skills in a safe, supportive setting with
              mock dates and constructive feedback. Gain confidence, refine your
              conversation flow, and build the skills you need for successful,
              real-life dating experiences.
            </p>
          </div>
          <div className="bg-sky-300 text-center w-full p-6">
            <h3 className="text-2xl font-bold">
              Profile Building & Communication Coaching
            </h3>
            <p>
              Get expert help creating an authentic, engaging dating profile and
              learn techniques for starting and sustaining meaningful
              conversations. Make a lasting first impression with profiles and
              messages that truly reflect who you are.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
