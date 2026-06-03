import { Send } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <span className="mb-6 rounded-full border border-yellow-500/30 bg-yellow-500/5 px-5 py-2 text-sm font-medium uppercase tracking-wider text-yellow-400">
            Pricing Plans
          </span>

          {/* Title */}
          <h1 className="text-5xl font-bold text-white md:text-7xl">
            Choose The Perfect
            <span className="block text-yellow-400">
              Growth Plan
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Flexible plans designed for startups, businesses, and enterprises.
            Get the right technology solutions with transparent pricing and
            expert support.
          </p>

          {/* Decorative Divider */}
          <div className="mt-10 flex items-center gap-5">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-yellow-500" />

            <div className="rounded-full border border-yellow-500/30 p-3">
              <Send className="h-5 w-5 text-yellow-400" />
            </div>

            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-yellow-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;