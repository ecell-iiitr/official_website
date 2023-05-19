import faculty from "../assets/faculty.svg";
import mail from "../assets/mail1.svg";
import linkedin from "../assets/linkedin1.svg";
import twitter from "../assets/twitter1.svg";

const Card = () => {
  return (
    <div className="bg-[#3498D9] rounded-[60px] pb-12 pt-4 px-16">
      <img src={faculty} className="mx-auto w-full" alt="" />
      <h1 className="text-white font-body text-center font-bold text-xl sm:text-3xl">Dr. Shalini Mahato</h1>
      <p className="text-white font-body text-center font-semibold pt-2 text-sm sm:text-lg">Faculty at IIIT Ranchi</p>
      <div className="flex items-center justify-between sm:mt-24 mt-12 sm:mx-10 mx-0">
        <img src={mail} className="cursor-pointer hover:opacity-90 hover:tr" alt="" />
        <img src={twitter} className="cursor-pointer hover:opacity-90 hover:tr" alt="" />
        <img src={linkedin} className="cursor-pointer hover:opacity-90 hover:tr" alt="" />
      </div>
    </div>
  );
}

export default Card