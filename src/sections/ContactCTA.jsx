import { useState } from "react";
import { motion } from "framer-motion";

function ContactCTA() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
  });

  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit
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

    const finalData = {
      ...form,
      phone: "+" + phone,
    };

    console.log("Form Submitted:", finalData);

    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-[#1a1a1a] py-20 px-4 sm:px-6">

      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-8 md:p-12"
        >

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Ready to Transform Your Career?
          </h2>

          <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto">
            Take the first step towards your dream job. Fill the form below and our team will contact you.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-10 grid gap-6">

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#d4af37]"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#d4af37]"
            />

            {/* PHONE INPUT */}
            <div className="flex items-center border border-[#2a2a2a] rounded-md overflow-hidden focus-within:border-[#d4af37]">

              {/* COUNTRY SELECT */}
              <select
                className="bg-[#111] text-white px-3 py-3 outline-none border-r border-[#2a2a2a]"
                defaultValue="+1"
              >
                <option value="+1">🇺🇸 +1</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
              </select>

              {/* NUMBER INPUT */}
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value.replace(/\D/g, "")
                  })
                }
                required
                className="w-full bg-[#1a1a1a] text-white px-4 py-3 focus:outline-none"
              />

            </div>

            {/* LOCATION */}
            <input
              type="text"
              name="location"
              placeholder="Current Location"
              value={form.location}
              onChange={handleChange}
              required
              className="bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#d4af37]"
            />

            {/* TERMS */}
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <input
                type="checkbox"
                checked={accepted}
                onChange={() => setAccepted(!accepted)}
                className="mt-1 accent-[#d4af37]"
              />
              <p>
                I agree to the{" "}
                <span className="text-[#d4af37] cursor-pointer">
                  Terms & Conditions
                </span>
              </p>
            </div>

            {/* ERROR */}
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              className="mt-4 bg-[#d4af37] text-black py-3 rounded-md font-semibold hover:bg-[#b8962e] transition"
            >
              Submit
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}

export default ContactCTA;