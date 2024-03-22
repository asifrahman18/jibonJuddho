
import Animation from "./animation";
import Contents from "./contents";

const EmployeeSection = () => {
  return (
    <section className="container  grid grid-cols-1 items-center gap-8 pb-8 pt-6 md:grid-cols-2 md:py-10">
      <Animation />
      <Contents />
    </section>
  );
};

export default EmployeeSection;
