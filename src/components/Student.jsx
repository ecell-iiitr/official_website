import StudentSection from "./StudentSection";
import { students } from "./data";

const Student = () => {
  return (
    <div className="bg-student py-8 sm:py-16 px-6 sm:px-12 xl:px-24">
      <h1 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl pb-16 font-body text-center font-bold underline-offset-[12px] underline text-[#3498D9]">
        Student Team
      </h1>
      <div className="flex flex-col justify-around mt-10 space-y-20">
        {students.map((student, index) => (
          <StudentSection
            key={index}
            title={student.title}
            name={student.name}
            image={student.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Student;
