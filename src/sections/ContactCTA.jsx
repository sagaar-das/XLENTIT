import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";


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
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      )
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
    <section className="bg-[#1a1a1a] py-16 px-4 sm:px-6">
  <div className="max-w-3xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-[#111] rounded-xl p-6 sm:p-8 shadow-lg"
    >

      {/* HEADING */}
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
        Ready to Transform Your Career?
      </h2>

      <p className="mt-3 text-gray-400 text-center text-sm max-w-xl mx-auto">
        Take the first step towards your dream job.
      </p>

      {/* FORM */}
      <form className="mt-8 grid gap-4">

        {/* NAME */}
        <input
          type="text"
          placeholder="Full Name"
          className="bg-[#1a1a1a] px-3 py-2.5 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email Address"
          className="bg-[#1a1a1a] px-3 py-2.5 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
        />

        {/* PHONE */}
        <div className="phone-input-wrapper">
          <PhoneInput
            international
            defaultCountry="US"
            placeholder="Phone number"
            className="phone-input text-sm"
          />
        </div>

        {/* LOCATION */}
        <input
          type="text"
          placeholder="Location"
          className="bg-[#1a1a1a] px-3 py-2.5 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* TERMS */}
        <div className="flex items-start gap-2 text-xs text-gray-400">
          <input type="checkbox" className="mt-1 accent-yellow-400" />
          <p>
            I agree to the{" "}
            <span className="text-yellow-400 cursor-pointer">
              Terms
            </span>
          </p>
        </div>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          className="mt-2 bg-yellow-400 text-black py-2.5 rounded-md font-medium text-sm"
        >
          Submit
        </motion.button>

      </form>

    </motion.div>
  </div>
</section>
  );
}

export default ContactCTA;