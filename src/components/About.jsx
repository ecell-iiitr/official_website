import img1 from "../assets/img1.svg"

const About = () => {
  return (
    <div id="about" className="bg-[#414141] py-8 sm:py-16 px-6 sm:px-12 lg:px-24 flex flex-col xl:flex-row">
      <div className="w-full xl:w-1/2">
        <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl pb-8 font-body font-bold underline-offset-8 underline text-[#3498D9]">
          About
        </h1>
        <p className="text-xs xs:text-sm md:text-xl lg:text-2xl font-bold font-body text-white">
          Established in 2018, E-Cell Indian Institute of Information Technology
          Ranchi (IIIT Ranchi) has always strived to foster the spirit of
          Entrepreneurial thought and enterprise into the talented minds of our
          campus. Whether through events, guest lectures, or workshops, the
          underlying principles have always remained the same, driven forward by
          a team of strong and motivated individuals every year.
          <br /> <br />
          We seek to develop a vibrant startup culture, community, and ecosystem
          on our campus and enable the dreams of young budding entrepreneurs to
          take their ideas to the next level.
        </p>
      </div>
      <div className="w-full xl:w-1/2 flex justify-end mt-12 xl:ml-16">
        <img src={img1} className="mx-auto" alt="" />
      </div>
    </div>
  );
};

export default About;
