import img2 from "../assets/img2.svg";

const Vision = () => {
  return (
    <div className="bg-white py-8 sm:pt-16 px-6 sm:px-12 lg:px-24 flex flex-col xl:flex-row">
      <div className="w-full xl:w-1/2 flex justify-end mb-12 xl:mb-0 xl:pr-6">
        <img src={img2} className="mx-auto" alt="" />
      </div>
      <div className="w-full xl:w-1/2">
        <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl pb-8 font-body font-bold underline-offset-8 underline text-[#3498D9]">
          Our Vision
        </h1>
        <p className="text-xs xs:text-sm md:text-xl lg:text-2xl font-bold font-body text-black">
          The Entrepreneurship cell, IIIT Ranchi is a non-profit organization
          that advocates to inculcate entrepreneurial spirit among the budding
          young minds who have the ardour to pursue entrepreneurship and
          aggrandize the ideas that have the potential to excel. Keeping this
          ideology in mind, we not only provide a platform to young visionary
          entrepreneurs to share their ideas freely with the fellow aspiring
          companions but also help in nurturing their skills by providing them
          with resources and guidance.
        </p>
      </div>
    </div>
  );
};

export default Vision;
