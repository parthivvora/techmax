import { motion } from "framer-motion";
import choose2 from "../assets/service/choose-2.png";

function ExpertAdvice() {
  return (
    <div className="expert-advice-part py-20">
      <div className="container">
        <div className="row items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <motion.img
              initial={{ opacity: 0, y: 200 }}
              transition={{
                duration: 1,
                ease: "easeIn",
                type: "spring",
                stiffness: 100,
                damping: 6,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              src={choose2}
              alt="about_image"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="expert-advice-content title-part flex flex-col gap-4">
              <motion.h1
                initial={{ opacity: 0, x: 200 }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                  type: "spring",
                  stiffness: 100,
                  damping: 6,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-3xl sm:text-4xl font-bold leading-normal capitalize"
              >
                Expert Advice to Grow Your Business
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 200 }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                  type: "spring",
                  stiffness: 100,
                  damping: 6,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-lg"
              >
                Growing a business is a multifaceted endeavor that requires a strategic approach, a deep understanding of your market, and a commitment to continuous improvement. By focusing on these expert strategies, you can position your business for sustainable growth and long-term success. Remember, adaptability and customer-centricity are key to thriving in a competitive landscape.
              </motion.p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <motion.li
                  initial={{ opacity: 0, x: -200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-lg font-medium px-4 py-2.5 text-white"
                >
                  Discovery & Strategy
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-lg font-medium px-4 py-2.5"
                >
                  UX/UI Design
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-lg font-medium px-4 py-2.5"
                >
                  Android apps (Java)
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-lg font-medium px-4 py-2.5"
                >
                  Managed IT Service
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertAdvice;
