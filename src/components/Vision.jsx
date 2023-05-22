import img2 from "../assets/img2.svg";

const Vision = () => {
  return (
    <div className="bg-white py-8 sm:pt-16 px-6 sm:px-12 lg:px-24 flex flex-col xl:flex-row">
      <div className="w-full xl:w-1/2 flex justify-end mb-12 xl:mb-0 xl:pr-6">
        <img src={img2} className="mx-auto xl:px-4" alt="" />
      </div>
      <div className="w-full xl:w-1/2">
        <h1 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl pb-8 font-body font-bold underline-offset-8 underline text-[#3498D9]">
          Our Vision
        </h1>
        <p className="text-xs xs:text-sm md:text-lg lg:text-xl font-bold font-body text-black">
          The Entrepreneurship cell, IIIT Ranchi advocates to ignite
          entrepreneurial spirit among the growing young minds who have the
          ardour to pursue entrepreneurship and aggrandize the ideas that have
          the potential to excel. Our direction helps <span className="text-[#3498D9]"> training, mentorship, and
          resources to develop business acumen, leadership abilities, and
          problem-solving skills among fellow students</span>. E-Cells often focus on
          promoting job creation rather than job seeking, inspiring students to
          become job creators and entrepreneurs. <br/> <br/> Keeping this ideology in mind,
          we not only provide a platform to young visionary entrepreneurs to
          share their ideas freely with the fellow aspiring companions but also
          help in nurturing their skills by providing them with resources and
          guidance.Our motive is to grow a community of like-minded individuals
          who are passionate about entrepreneurship. The E-Cell envisions
          entrepreneurship as a viable and attractive career option for students
          by facilitating professional development and skill building by
          Creating opportunities for networking and collaboration. We provide
          students with the necessary knowledge and resources to explore
          entrepreneurship as a career path.
        </p>
      </div>
    </div>
  );
};

export default Vision;
