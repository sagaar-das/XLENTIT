import { Check, X } from "lucide-react";

const deliveryPlans = [
  {
    service: "Resume Marketing",
    premium: true,
    basic: true,
  },
  {
    service: "Associate Recruiter",
    premium: true,
    basic: true,
  },
  {
    service: "Personal Recruiter",
    premium: true,
    basic: false,
  },
  {
    service: "Up to 200 Applications (Depends on Daily Market Requirements)",
    premium: true,
    basic: true,
  },
  {
    service: "Email / LinkedIn Chat Support",
    premium: true,
    basic: false,
  },
  {
    service: "Automation Tools",
    premium: false,
    basic: false,
  },
  {
    service: "Full Time / W2",
    premium: true,
    basic: true,
  },
];

const DeliveryDepartment = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-10">
          

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-yellow-400">
            Delivery Department
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            End-to-end job delivery services designed to maximize
            interview opportunities and streamline your job search.
          </p>
        </div>

        {/* Comparison Card */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-black via-[#0d0d0d] to-[#151515] shadow-[0_0_40px_rgba(245,197,24,0.08)]">

          {/* Header */}
          <div className="grid grid-cols-3 border-b border-yellow-500/20">
            <div className="p-5 text-left font-bold text-white text-lg">
              Services
            </div>

            <div className="p-5 text-center">
              <span className="inline-block rounded-full bg-yellow-500 text-black px-5 py-2 font-semibold">
                Premium
              </span>
            </div>

            <div className="p-5 text-center">
              <span className="inline-block rounded-full border border-yellow-500/40 text-yellow-400 px-5 py-2 font-semibold">
                Basic
              </span>
            </div>
          </div>

          {/* Rows */}
          {deliveryPlans.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 border-b border-yellow-500/10 last:border-0 hover:bg-yellow-500/5 transition-all duration-300"
            >
              <div className="p-4 text-gray-300 text-sm md:text-base">
                {item.service}
              </div>

              <div className="flex items-center justify-center">
                {item.premium ? (
                  <Check className="h-5 w-5 text-yellow-400" />
                ) : (
                  <X className="h-5 w-5 text-red-400" />
                )}
              </div>

              <div className="flex items-center justify-center">
                {item.basic ? (
                  <Check className="h-5 w-5 text-yellow-400" />
                ) : (
                  <X className="h-5 w-5 text-red-400" />
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DeliveryDepartment;