import { faculties } from "./data";
import Card from "./FacultyCard";

const Faculty = () => {
  return (
    <div
      id="team"
      className="bg-faculty scroll-m-12 py-8 sm:py-16 px-6 sm:px-12 xl:px-24"
    >
      <h1 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl pb-16 font-body text-center font-bold underline-offset-[12px] underline text-[#3498D9]">
        Faculty In Charge
      </h1>
      <div className="sm:flex justify-around items-center mx-0 xs:mx-6 sm:mx-0 space-y-16 sm:space-y-0 lg:mx-0">
        {faculties.map((faculty, index) => (
          <Card key={index} name={faculty.name} image={faculty.image} />
        ))}
      </div>
    </div>
  );
};

export default Faculty;
