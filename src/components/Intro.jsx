import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="bg-white py-8 sm:py-12 px-6 sm:px-12 lg:px-24"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl pb-8 font-body font-bold text-center text-[#3498D9]">
          What is E-CELL ?
        </h1>
        <p className="text-xs xs:text-sm md:text-lg lg:text-xl font-bold font-body text-center mx-2 text-black">
          E-Cell IIIT Ranchi is a non-profit student run organization where we
          crave and explore the constantly evolving world of entrepreneurship
          and start-up cult. In our quest to promote the spirit of
          entrepreneurship among the community, we try to answer essential
          questions like “How this realm of entrepreneurship affects us in our
          day-to-day lives?” and the likes of “Can I construct my start-up idea
          into a functional business model?” To spread this very essence, we
          host various seminars/webinars, lectures, podcasts and book summaries,
          innovative games, brainstorming sessions, competitions. Besides that,
          we host the most prominent annual entrepreneurial summit of the
          northeast, “UDGAM”, which includes numerous informative events about
          entrepreneurship.
        </p>
      </div>
    </motion.div>
  );
}

export default Intro