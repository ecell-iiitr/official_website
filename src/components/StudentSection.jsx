import StudentCard from "./StudentCard";

const StudentSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <h1 className="font-bold text-4xl font-body -rotate-90">Operations</h1>
      <StudentCard />
      <StudentCard />
      <StudentCard />
    </div>
  );
}

export default StudentSection