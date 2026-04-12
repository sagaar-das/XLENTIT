import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";


function PrivacyPolicy() {
    const navigate = useNavigate();

    return (

        <>
            <Helmet>
                <title>Privacy Policy | Xlent IT Services</title>
                <meta name="description" content="Read the Privacy Policy of Xlent IT Services regarding data usage, communication, and privacy practices." />
                <link rel="canonical" href="https://www.xlent-itservice.com/privacy-policy" />
            </Helmet>


            <div className="bg-[#111] text-white min-h-screen px-6 py-16">
                <div className="max-w-4xl mx-auto">

                    <button
                        onClick={() => navigate(-1)}
                        className="mb-6 text-yellow-400 text-sm hover:underline hover:text-white transition"
                    >
                        ← Back to Contact Us
                    </button>


                    <h1 className="text-3xl text-yellow-400 font-bold mb-6">Privacy Policy</h1>
                    <p className="text-gray-400 mb-6">
                        Your privacy is important to us.
                    </p>


                    {/* Introduction */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
                        <p className="text-gray-400">
                            Xlent IT Solutions (“Xlent IT Solutions” or “we”) is a staffing and recruiting agency that provides temporary and permanent job placement services. We understand the importance of protecting the personal and confidential information of our clients, candidates, and employees.
                        </p>
                    </section>

                    {/* Scope */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Scope</h2>
                        <p className="text-gray-400 mb-2">
                            This privacy policy applies to all personal data collected by Xlent IT Solutions, including:
                        </p>
                        <ul className="list-disc pl-5 text-gray-400 space-y-1">
                            <li>Candidates who register with us for job opportunities</li>
                            <li>Clients who engage our services</li>
                            <li>Employees working with us or on behalf of clients</li>
                            <li>Visitors to our website</li>
                        </ul>
                    </section>

                    {/* SMS Consent */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">SMS Consent</h2>
                        <p className="text-gray-400">
                            We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing services. We may share your Personal Data, including SMS consent, with vendors such as messaging platforms and telecom providers strictly for service delivery.
                        </p>
                        <p className="text-gray-400 mt-2">
                            All categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                        </p>
                    </section>

                    {/* Types of Data */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Types of Personal Data Collected</h2>
                        <ul className="list-disc pl-5 text-gray-400 space-y-1">
                            <li>Contact information: name, email, phone, address</li>
                            <li>Professional information: skills, education, certifications</li>
                            <li>Job-related information: resume, applications, preferences</li>
                            <li>Employment history</li>
                            <li>Financial information (for invoicing only)</li>
                        </ul>
                    </section>

                    {/* Collection */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">How We Collect Personal Data</h2>
                        <ul className="list-disc pl-5 text-gray-400 space-y-1">
                            <li>Online forms (website, job applications)</li>
                            <li>Phone and email communication</li>
                            <li>In-person meetings and interviews</li>
                        </ul>
                    </section>

                    {/* Usage */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">How We Use Personal Data</h2>
                        <ul className="list-disc pl-5 text-gray-400 space-y-1">
                            <li>Match candidates with suitable jobs</li>
                            <li>Provide staffing services</li>
                            <li>Communicate job updates</li>
                            <li>Process payments</li>
                            <li>Improve services</li>
                        </ul>
                    </section>

                    {/* Opt-Out */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Opt-Out Process</h2>
                        <p className="text-gray-400">
                            You may stop receiving text messages anytime by replying STOP or UNSUBSCRIBE or contacting us at +1 (713) 551-4969.
                        </p>
                    </section>

                    {/* Disclosure */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">How We Disclose Personal Data</h2>
                        <p className="text-gray-400">
                            To government authorities when required by law.
                        </p>
                    </section>

                    {/* Security */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Security Measures</h2>
                        <ul className="list-disc pl-5 text-gray-400 space-y-1">
                            <li>Encryption of sensitive data</li>
                            <li>Secure servers and databases</li>
                            <li>Limited access control</li>
                            <li>Regular backups</li>
                        </ul>
                    </section>

                    {/* Retention */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Data Retention</h2>
                        <p className="text-gray-400">
                            We retain personal data as long as necessary or required by law. Data is deleted or anonymized when no longer needed.
                        </p>
                    </section>

                    {/* Rights */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Rights of Individuals</h2>
                        <ul className="list-disc pl-5 text-gray-400 space-y-1">
                            <li>Access personal data</li>
                            <li>Request correction or deletion</li>
                            <li>Object to data processing</li>
                            <li>File complaints</li>
                        </ul>
                    </section>

                    {/* Changes */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Changes to this Policy</h2>
                        <p className="text-gray-400">
                            We may update this policy anytime. Continued use of services means acceptance of updates.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                        <p className="text-gray-400">Xlent IT Solutions</p>
                        <p className="text-gray-400">Email: info@xlent-itservice.com</p>
                        <p className="text-gray-400">Phone: +1 (713) 551-4969</p>
                    </section>

                    <p className="text-gray-500 text-sm">
                        We are committed to protecting your privacy and ensuring your data is handled securely.
                    </p>

                    

                </div>
            </div>
        </>

    );
}

export default PrivacyPolicy;

