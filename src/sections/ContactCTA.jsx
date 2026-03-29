import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ScrollReveal from "../components/ScrollReveal";

function ContactCTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
  });

  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!accepted) {
      setError("Please accept Terms & Conditions.");
      return;
    }

    if (!form.phone || form.phone.length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }

    setError("");
    setLoading(true);

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY")
      .then(() => {
        setLoading(false);
        alert("Form submitted successfully!");
        setForm({ name: "", email: "", location: "", phone: "" });
      })
      .catch(() => {
        setLoading(false);
        setError("Failed to send message. Try again.");
      });
  };

  return (
    <section className="bg-[#1a1a1a] py-20 px-4 sm:px-6">

      <div className="max-w-3xl mx-auto">

        {/* 🔥 Card Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#111]/90 border border-gray-800 rounded-xl p-6 sm:p-8 shadow-lg backdrop-blur-sm"
        >

          {/* 🔥 Heading */}
          <ScrollReveal direction="left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
              Ready to Transform Your Career?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <p className="mt-3 text-gray-400 text-center text-sm max-w-xl mx-auto">
              Take the first step towards your dream job.
            </p>
          </ScrollReveal>

          {/* 🔥 FORM */}
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">

            {/* NAME */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="bg-[#1a1a1a] px-3 py-2.5 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="bg-[#1a1a1a] px-3 py-2.5 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            />

            {/* PHONE */}
            <div className="phone-input-wrapper bg-[#1a1a1a] rounded-md px-2 py-1 focus-within:ring-2 focus-within:ring-yellow-400 transition-all duration-300">
              <PhoneInput
                international
                defaultCountry="US"
                value={form.phone}
                onChange={(value) => setForm({ ...form, phone: value })}
                placeholder="Phone number"
                className="phone-input text-sm bg-transparent text-white"
              />
            </div>

            {/* LOCATION */}
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location"
              className="bg-[#1a1a1a] px-3 py-2.5 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            />

            {/* TERMS */}
            <div className="flex items-start gap-2 text-xs text-gray-400">
              <input
                type="checkbox"
                checked={accepted}
                onChange={() => setAccepted(!accepted)}
                className="mt-1 accent-yellow-400"
              />
              <p>
                I agree to the{" "}
                <span className="text-yellow-400 cursor-pointer hover:underline">
                  Terms
                </span>
              </p>
            </div>

            {/* ERROR */}
            {error && (
              <p className="text-red-400 text-xs">{error}</p>
            )}

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="mt-2 bg-yellow-400 text-black py-2.5 rounded-md font-medium text-sm transition-all duration-300 hover:bg-yellow-300"
            >
              {loading ? "Sending..." : "Submit"}
            </motion.button>

          </form>

        </motion.div>

      </div>
    </section>
  );
}

export default ContactCTA;