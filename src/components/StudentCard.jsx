import mail from "../assets/mail2.svg";
import twitter from "../assets/twitter2.svg";
import linkedin from "../assets/linkedin2.svg";
import student from "../assets/student.svg";

const StudentCard = () => {
  return (
    <div>
      <img src={student} className="mx-auto w-full" alt="" />
      <h1 className="text-[#3498D9] font-body text-center font-bold text-xl sm:text-3xl">
        Yash Raj
      </h1>
      <p className="text-[#3498D9] font-body text-center font-semibold pt-2 text-sm sm:text-lg">
        (Senior Manager)
      </p>
      <div className="flex items-center justify-between">
        <img
          src={mail}
          className="cursor-pointer hover:opacity-90 hover:tr"
          alt=""
        />
        <img
          src={twitter}
          className="cursor-pointer hover:opacity-90 hover:tr"
          alt=""
        />
        <img
          src={linkedin}
          className="cursor-pointer hover:opacity-90 hover:tr"
          alt=""
        />
      </div>
    </div>
  );
};

export default StudentCard;
