import StudentCard from "./StudentCard";

// eslint-disable-next-line react/prop-types
const StudentSection = ({ title }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:mx-16">
      <h1 className="font-bold text-2xl md:text-3xl font-body lg:-rotate-90 py-12 lg:py-0 text-center">
        {title}
      </h1>
      <div className="xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 lg:gap-8 xl:gap-18 lg:-ml-60 xl:-ml-44">
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </div>
    </div>
  );
};

export default StudentSection;
