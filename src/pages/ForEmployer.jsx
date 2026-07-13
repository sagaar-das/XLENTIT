import EmployerHero from "../components/employer/EmployerHero";
import EmployerBenefits from "../components/employer/EmployerBenefits";
import HiringModels from "../components/employer/HiringModels";
import Expertise from "../components/employer/Expertise";
import HiringProcess from "../components/employer/HiringProcess";
import EmployerCTA from "../components/employer/EmployerCTA";

import { Helmet } from "react-helmet-async";

function ForEmployer() {
    return (

        <>
            <Helmet>
                <title>For Employers | XLent IT Services</title>

                <meta
                    name="description"
                    content="Hire top IT professionals with XLent IT Services. We provide permanent hiring, contract staffing, executive search, and customized workforce solutions."
                />

                <link rel="canonical" href="https://www.xlent-itservice.com/for-employers" />
            </Helmet>


            <main className="bg-primary overflow-x-hidden">
                <EmployerHero />
                <EmployerBenefits />
                <HiringModels />
                <Expertise />
                <HiringProcess />
                <EmployerCTA />
            </main>

        </>
    );
}

export default ForEmployer;