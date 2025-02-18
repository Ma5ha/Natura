import FamilyState from "./(sections)/family-state";
import HealthAndFunctionality from "./(sections)/health-and-functionality";
import PersonalData from "./(sections)/personal-data";
import DataAboutApplication from "./(sections)/data-about-application";

const Application: React.FC = () => {
  return (
    <section className="page snap-center flex gap-4">
      <PersonalData />
      <HealthAndFunctionality />
      <FamilyState />
      <DataAboutApplication />
    </section>
  );
};

export default Application;
