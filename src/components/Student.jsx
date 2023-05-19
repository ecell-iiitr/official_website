import StudentSection from "./StudentSection";

const Student = () => {
  return (
    <div className="bg-student py-8 sm:py-16 px-6 sm:px-12 lg:px-24">
      <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl pb-16 font-body text-center font-bold underline-offset-[12px] underline text-[#3498D9]">
        Student Team
      </h1>
      <div className="flex justify-around">
        <StudentSection />
      </div>
    </div>
  );
}

export default Student