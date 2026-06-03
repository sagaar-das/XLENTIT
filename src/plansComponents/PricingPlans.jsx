import { Check } from "lucide-react";

const PricingPlans = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block border border-yellow-500/30 rounded-full px-5 py-2 text-yellow-400 text-sm">
            PRICING PLANS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-yellow-400">
            New Enrollment Plans
          </h2>

          <p className="mt-4 text-gray-400">
            Choose the plan that best fits your career goals and job search journey.
          </p>
        </div>

        {/* Single Card */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-black via-[#0d0d0d] to-[#151515] shadow-[0_0_40px_rgba(245,197,24,0.08)] overflow-hidden">

          <div className="p-10 md:p-14 text-center">

            <span className="inline-block px-4 py-2 rounded-full border border-yellow-500/30 text-yellow-400 text-sm font-medium">
              CAREER ACCELERATION PROGRAM
            </span>

            <h3 className="mt-6 text-3xl md:text-4xl font-bold text-white">
              Choose Any Plan Starting From
            </h3>

            <div className="mt-6 text-6xl md:text-7xl font-bold text-yellow-400">
              $599
            </div>

            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Comprehensive career support designed to help you secure
              interviews faster, improve your profile, and maximize your
              chances of landing your next opportunity.
            </p>

            <div className="mt-10 border-t border-yellow-500/10 pt-8">
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">

                <div className="flex items-center gap-3 text-gray-300">
                  <Check className="text-yellow-400 flex-shrink-0" size={18} />
                  Resume Optimization
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Check className="text-yellow-400 flex-shrink-0" size={18} />
                  Mock Interview Support
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Check className="text-yellow-400 flex-shrink-0" size={18} />
                  Recruiter Assistance
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Check className="text-yellow-400 flex-shrink-0" size={18} />
                  Technical Training Access
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Check className="text-yellow-400 flex-shrink-0" size={18} />
                  Job Application Support
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Check className="text-yellow-400 flex-shrink-0" size={18} />
                  Dedicated Career Guidance
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingPlans;