import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

function TermsConditions() {
    const navigate = useNavigate();
    return (

        <>

            <Helmet>
                <title>Terms & Conditions | XLent IT Services</title>

                <meta
                    name="description"
                    content="Review the Terms & Conditions for using the XLent IT Services website, services, policies, and user responsibilities."
                />

                <link rel="canonical" href="https://www.xlent-itservice.com/terms-and-conditions" />
            </Helmet>

            <div className="bg-[#111] text-white min-h-screen px-6 py-16">
                <div className="max-w-4xl mx-auto">

                    <button
                        onClick={() => navigate(-1)}
                        className="mb-6 text-yellow-400 text-sm hover:underline hover:text-white transition"
                    >
                        ← Back to Contact Us
                    </button>

                    <h1 className="text-3xl text-yellow-400 font-bold mb-6">Terms & Conditions</h1>
                    <p className="text-gray-400 mb-6">
                        Please read our policies regarding communication and data privacy.
                    </p>

                    {/* Text Message Communications */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            Text Message Communications
                        </h2>
                        <p className="text-gray-400">
                            We use text messaging to communicate with you about your service.
                            Normal messaging rates apply and the frequency of messages may vary.
                            Mobile carriers are not liable for delayed or undelivered messages.
                        </p>
                    </section>

                    {/* Data Privacy */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Data Privacy</h2>
                        <p className="text-gray-400">
                            No mobile information will be shared with third parties or affiliates
                            for marketing or promotional purposes. All other categories exclude
                            text messaging originator opt-in data and consent; this information
                            will not be shared with any third parties.
                        </p>
                    </section>

                    {/* Opt-Out */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Opt-Out Option</h2>
                        <p className="text-gray-400">
                            You may opt out of text message communications at any time by replying
                            to any message with STOP or by contacting us at info@xlent-itservice.com.
                        </p>
                        <p className="text-gray-400 mt-2">
                            This will stop communications from that particular phone number.
                            However, you may continue to receive service-related and other
                            non-marketing messages from other company-managed numbers. You may
                            opt out of those similarly.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                        <p className="text-gray-400">
                            Address: 823 Congress Ave. STE 300, Austin, TX 78701
                        </p>
                        <p className="text-gray-400">
                            Phone: +1 (713) 551-4969
                        </p>
                        <p className="text-gray-400">
                            Email: info@xlent-itservice.com
                        </p>
                    </section>



                </div>
            </div>
        </>

    );
}

export default TermsConditions;


