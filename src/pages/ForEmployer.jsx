import EmployerHero from "../components/employer/EmployerHero";
import EmployerBenefits from "../components/employer/EmployerBenefits";
import HiringModels from "../components/employer/HiringModels";
import Expertise from "../components/employer/Expertise";
import HiringProcess from "../components/employer/HiringProcess";
import EmployerCTA from "../components/employer/EmployerCTA";

function ForEmployer() {
  return (
    <main className="bg-primary overflow-x-hidden">
      <EmployerHero />
      <EmployerBenefits />
      <HiringModels />
      <Expertise />
      <HiringProcess />
      <EmployerCTA />
    </main>
  );
}

export default ForEmployer;