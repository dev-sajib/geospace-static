import { FaUsers } from "react-icons/fa";

const ProcessCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HiringProcess = () => {
  const steps = [
    {
      icon: <FaUsers className="w-6 h-6 text-emerald-600" />,
      title: "Talk to One of Our Industry Experts",
      description:
        "An expert on our team will work with you to understand your goals, technical needs, and team dynamics.",
    },
    {
      icon: <FaUsers className="w-6 h-6 text-emerald-600" />,
      title: "Work with Hand-Selected Talent",
      description:
        "Within days, we'll introduce you to the right talent for your project. Average time to match is under 24 hours.",
    },
    {
      icon: <FaUsers className="w-6 h-6 text-emerald-600" />,
      title: "The Right Fit, Guaranteed",
      description:
        "Work with your new team member on a trial basis (pay only if satisfied), ensuring you hire the right people for the job.",
    },
  ];

  return (
    <section className="py-20 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Hiring Made Easy
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <ProcessCard key={index} {...step} />
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-emerald-600 font-bold text-2xl">
                        👍
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">Business Team Image</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-12 left-8 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-emerald-600 mb-1">
                    500+
                  </h3>
                  <p className="text-sm text-gray-600">Companies</p>
                </div>
              </div>

              <div className="absolute bottom-16 right-8 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-emerald-600 mb-1">
                    300+
                  </h3>
                  <p className="text-sm text-gray-600">Job Posted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
