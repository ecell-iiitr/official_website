import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="space-y-6 font-body">
      <div className="sm:flex name space-y-6 sm:space-y-0 sm:space-x-4">
        <div className="firstname sm:w-1/2">
          <label
            htmlFor="fname"
            className="block text-lg font-semibold leading-6 text-white"
          >
            First Name
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              name="fname"
              id="fname"
              className="block w-full rounded-md border-1 py-1.5 pl-2 pr-20 text-white bg-transparent ring-1 ring-inset ring-white placeholder:text-white sm:text-base sm:leading-6"
              placeholder=""
            />
          </div>
        </div>
        <div className="lastname sm:w-1/2">
          <label
            htmlFor="lname"
            className="block text-lg font-semibold leading-6 text-white"
          >
            Last Name
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              name="lname"
              id="lname"
              className="block w-full rounded-md border-1 py-1.5 pl-2 pr-20 text-white bg-transparent ring-1 ring-inset ring-white placeholder:text-white sm:text-base sm:leading-6"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div className="email">
        <label
          htmlFor="email"
          className="block text-lg font-semibold leading-6 text-white"
        >
          Email
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="email"
            id="email"
            className="block w-full rounded-md border-1 py-1.5 pl-2 pr-20 text-white bg-transparent ring-1 ring-inset ring-white placeholder:text-white sm:text-base sm:leading-6"
            placeholder=""
          />
        </div>
      </div>
      <div className="phone">
        <label
          htmlFor="phone"
          className="block text-lg font-semibold leading-6 text-white"
        >
          Phone
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="phone"
            id="phone"
            className="block w-full rounded-md border-1 py-1.5 pl-2 pr-20 text-white bg-transparent ring-1 ring-inset ring-white placeholder:text-white sm:text-base sm:leading-6"
            placeholder=""
          />
        </div>
      </div>
      <div className="message">
        <label
          htmlFor="message"
          className="block text-lg font-semibold leading-6 text-white"
        >
          Message
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <textarea
            id="message"
            rows="5"
            className="block w-full rounded-md border-1 py-1.5 pl-2 pr-20 text-white bg-transparent ring-1 ring-inset ring-white placeholder:text-white sm:text-base sm:leading-6"
            placeholder=""
          />
        </div>
      </div>
      <div className="submit flex justify-end">
        <motion.button
          type="submit"
          className="inline-flex justify-center py-1 px-4 sm:px-6 border border-transparent shadow-sm text-lg sm:text-xl font-bold rounded-md text-[#414141] bg-white hover:opacity-90"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          whileTap={{ scale: 0.9 }}
        >
          Send
        </motion.button>
      </div>
    </div>
  );
};

export default ContactForm;
