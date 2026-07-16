import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is this a free service?",
    answer:
      "Yes, our service is free if you secure a job within a month with our support.",
  },
  {
    question: "Do you offer a free trial or demo services?",
    answer:
      "Yes, we offer both a free trial and demo services so you can experience our support firsthand.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No, we believe in transparency. There are no hidden charges.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a satisfaction-driven refund policy. If we don’t meet our commitments, you are eligible for a full refund.",
  },
  {
    question: "Do you offer support & training?",
    answer:
      "Absolutely! Our technical experts provide personalized training before your interviews, along with 100% support throughout your journey.",
  },
  {
    question: "Will you change my resume?",
    answer:
      "We don’t make changes to your resume, but we will help you upgrade and optimize it to be ATS-compliant, improving your job prospects.",
  },
  {
    question: "Can I provide a reference?",
    answer:
      "Of course! Feel free to provide any references, and we will be happy to consider them.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-primary py-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-left max-w-6xl mx-auto ">
          <div className="inline-flex px-4 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/10">
            <span className="text-yellow-400 text-[8px] md:text-sm uppercase tracking-[0.2em] font-semibold">
              FAQs
            </span>
          </div>

          <h2 className="mt-2 sm:mt-5 text-white text-xl md:text-4xl font-bold ">
            Frequently Asked{" "}
            <span className="text-yellow-400">Questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-5 sm:mt-8  space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-800 bg-[#111]/95 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left px-6 py-2"
                >

                    
                  <h3 className="text-white font-medium text-base md:text-lg pr-5">
                    {faq.question}
                  </h3>

                  <div className="text-yellow-400 flex-shrink-0">
                    {isOpen ? (
                      <Minus size={22} />
                    ) : (
                      <Plus size={22} />
                    )}
                  </div>
                </button>

                <div
                  className={`grid  transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-3 text-gray-400 leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}