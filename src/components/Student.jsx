import StudentSection from "./StudentSection";
import operations from "../assets/Operations.jpeg";
import marketing from "../assets/Joint Research and Marketing.jpg";
import relations from "../assets/Corporate Relations.jpg";
import design from "../assets/Creative design.jpg";
import media from "../assets/Social Media.jpg";
import affairs from "../assets/Student Affairs and PR.jpg";

const students = [
  {
    title: "CORPORATE RELATIONS",
    name: "Shahnawaz Khan",
    image: relations,
  },
  {
    title: "OPERATIONS",
    name: "Yash Raj",
    image: operations,
  },
  {
    title: "MARKETING",
    name: "Manu Shukla",
    image: marketing,
  },
  {
    title: "SOCIAL MEDIA",
    name: "Piyush Madhukar",
    image: media,
  },
  {
    title: "STUDENT AFFAIRS & PR",
    name: "Prafful Sharma",
    image: affairs,
  },
  {
    title: "CREATIVE DESIGN",
    name: "Manjeet Singh",
    image: design,
  },
];

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
