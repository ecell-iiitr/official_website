import img1 from "../assets/img1.svg"

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#414141] scroll-m-12 py-8 sm:py-16 px-6 sm:px-12 lg:px-24 flex flex-col xl:flex-row"
    >
      <div className="w-full xl:w-1/2">
        <h1 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl pb-8 font-body font-bold underline-offset-8 underline text-[#3498D9]">
          About
        </h1>
        <p className="text-xs xs:text-sm md:text-lg lg:text-xl font-bold font-body text-white">
          Established in 2018, E-Cell Indian Institute of Information Technology
          Ranchi (IIIT Ranchi) has always strived to foster the spirit of
          Entrepreneurial thought and enterprise into the talented minds of our
          campus. <br/> <br/> E-Cells often provide guidance and support to aspiring
          entrepreneurs. This includes <span className="text-[#3498D9]"> mentorship programs, guest lectures, or
          workshops, networking events, and connecting students with industry
          professionals and successful entrepreneurs</span>. Our underlying principles
          have always remained the same, driven forward by a team of strong and
          motivated individuals every year. Our established centers provide
          physical infrastructure, mentoring, and networking opportunities to
          help startups grow. We seek to develop a vibrant startup culture,
          community, and ecosystem on our campus and enable the dreams of young
          building entrepreneurs to take their ideas to the next level.
        </p>
      </div>
      <div className="w-full xl:w-1/2 flex justify-end mt-12 xl:mt-4 xl:ml-16">
        <img src={img1} className="mx-auto xl:px-4" alt="" />
      </div>
    </div>
  );
};

export default About;
