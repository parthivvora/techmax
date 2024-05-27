import { motion } from "framer-motion";
import choose1 from "../assets/service/choose-1.png";

function WebSolution() {
  return (
    <div className="web-solution-part mt-24 py-20">
      <div className="container">
        <div className="row items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="web-solution-content title-part flex flex-col gap-4">
              <motion.h1
                initial={{ opacity: 0, x: -200 }}
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
                Creating Website Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 200 }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                  type: "spring",
                  stiffness: 100,
                  damping: 6,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-lg"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <motion.li
                  initial={{ opacity: 0, y: 100 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-lg font-medium px-4 py-2.5 text-white"
                >
                  E-Commerce Development
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 100 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-lg font-medium px-4 py-2.5"
                >
                  Web Design
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 100 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-lg font-medium px-4 py-2.5"
                >
                  WordPress Development
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 100 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-lg font-medium px-4 py-2.5"
                >
                  Network Monitoring
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 100 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-lg font-medium px-4 py-2.5"
                >
                  Page Speed Optimization
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 100 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-lg font-medium px-4 py-2.5"
                >
                  Shopify Development
                </motion.li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <motion.img
              initial={{ opacity: 0, y: -200 }}
              transition={{
                duration: 1,
                ease: "easeIn",
                type: "spring",
                stiffness: 100,
                damping: 6,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              src={choose1}
              alt="about_image"
              className="img-fluid mt-[1rem] sm:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebSolution;
