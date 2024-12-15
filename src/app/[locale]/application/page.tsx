import PersonalData from "./(sections)/personal-data";

const Application: React.FC = () => {
  const formatMessage = (id: string) => id;

  return (
    <section className="page snap-center">
      <form className="max-w-[70ch] m-auto">
        <PersonalData />
      </form>
    </section>
  );
};

export default Application;
