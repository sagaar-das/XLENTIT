import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import {
    Mail,
    Phone,
    MapPin,
    Clock
} from "lucide-react";




function ContactUs() {

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

            {/* 🔥 GRID */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">

                {/* 🔥 LEFT SIDE (INFO) */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col justify-between"
                >

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Contact Information
                        </h2>

                        <div className="space-y-5">

                            <div className="flex gap-4">
                                <div className="bg-[#1f1f1f] p-3 rounded-lg text-yellow-400">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <p className="text-white">info@xlent-itservice.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-[#1f1f1f] p-3 rounded-lg text-yellow-400">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Phone</p>
                                    <p className="text-white">+1 (713) 551-4969</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-[#1f1f1f] p-3 rounded-lg text-yellow-400">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Office</p>
                                    <p className="text-white text-sm">
                                        823 Congress Ave. STE 300, Austin, TX 78701
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-[#1f1f1f] p-3 rounded-lg text-yellow-400">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Hours</p>
                                    <p className="text-white text-sm">
                                        Mon - Fri: 9:00 AM - 6:00 PM EST
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* 🔥 BOX */}
                        <div className="mt-8 bg-[#1a1408] border border-yellow-400/20 rounded-xl p-6">
                            <h3 className="text-white font-semibold mb-2">
                                Have Questions?
                            </h3>
                            <p className="text-gray-400 text-sm">
                                We typically respond within 24 hours.
                            </p>
                            <p className="text-yellow-400 text-sm mt-4 font-medium">
                                Response Time: Within 24 hours
                            </p>
                        </div>
                    </div>

                    {/* 🔥 SOCIAL */}
                    <div className="mt-8">
                        <h3 className="text-white mb-3">Follow Us</h3>
                        <div className="flex gap-4">
                            {["LinkedIn", "Twitter", "Instagram"].map((item, i) => (
                                <button
                                    key={i}
                                    className="px-4 py-2 border border-gray-700 rounded-md text-sm text-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                </motion.div>

                {/* 🔥 RIGHT SIDE (FORM) */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col"
                >

                    <div className="bg-[#111]/90 border border-gray-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full">

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Get in Touch
                            </h2>

                            <p className="text-gray-400 text-sm mb-6">
                                Fill the form and our team will contact you soon.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="grid gap-4 flex-1">

                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="bg-[#1a1a1a] text-white px-3 py-2.5 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                            />

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="bg-[#1a1a1a] px-3 py-2.5 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                            />

                            <div className="bg-[#1a1a1a] rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-400">

                                <PhoneInput
                                    international
                                    defaultCountry="US"
                                    value={form.phone}
                                    onChange={(value) => setForm({ ...form, phone: value })}
                                    placeholder="Phone number"
                                    className="text-sm bg-transparent text-white w-full"
                                />

                            </div>

                            <input
                                type="text"
                                name="location"
                                value={form.location}
                                onChange={handleChange}
                                placeholder="Location"
                                className="bg-[#1a1a1a] px-3 py-2.5 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                            />

                            <div className="flex items-start gap-2 text-xs text-gray-400">
                                <input
                                    type="checkbox"
                                    checked={accepted}
                                    onChange={() => setAccepted(!accepted)}
                                    className="mt-1 accent-yellow-400"
                                />
                                <p>
                                    I agree to the{" "}
                                    <span className="text-yellow-400 cursor-pointer">
                                        Terms & Conditions
                                    </span>
                                </p>
                            </div>

                            {error && <p className="text-red-400 text-xs">{error}</p>}

                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                disabled={loading}
                                className="bg-yellow-400 text-black py-2.5 rounded-md font-medium text-sm hover:bg-yellow-300 transition"
                            >
                                {loading ? "Sending..." : "Submit"}
                            </motion.button>

                        </form>

                    </div>

                </motion.div>

            </div>
        </section>
    )
}

export default ContactUs