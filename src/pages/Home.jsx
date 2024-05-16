import { motion } from "framer-motion";
import heroImage from "../assets/home/home-1.png";
import choose1 from "../assets/about/choose-1.png";
import Header from "../components/Header";
import OurService from "../components/OurService";

function Home() {
  return (
    <div className="home-section">
      <Header />
      {/* <div className="hero-part py-20">
        <div className="container">
          <div className="row items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="title-part flex flex-col gap-4">
                <motion.h6
                  initial={{ opacity: 0, y: 100 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-lg font-semibold"
                >
                  TECHNOLOGY THAT MAKES A DIFFERENCE
                </motion.h6>
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
                  className="text-5xl font-bold w-11/12 leading-normal"
                >
                  Reliable <span>IT</span> Support And Quality{" "}
                  <span>Technology Solution</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 140 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-xl  w-11/12 leading-normal"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                  magna aliqua.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="buttons-group flex gap-4 mt-3"
                >
                  <a
                    href="#"
                    className="font-semibold px-4 py-2.5 rounded-full capitalize"
                  >
                    learn more
                  </a>
                  <a
                    href="#"
                    className="font-semibold px-4 py-2.5 rounded-full capitalize text-white"
                  >
                    Contact us
                  </a>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <motion.img
                initial={{ opacity: 0, x: 300 }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                  type: "spring",
                  stiffness: 100,
                  damping: 6,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                src={heroImage}
                alt="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="service-part">
        <div className="title-part">
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
            className="text-4xl font-bold leading-normal text-center capitalize mb-16"
          >
            our services
          </motion.h1>
        </div>
        <OurService />
      </div> */}
      <div className="web-solution-part mt-24 py-20">
        <div className="container">
          <div className="row items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="web-solution-content title-part">
                <h1 className="text-4xl font-bold leading-normal capitalize">
                  Creating Website Solutions
                </h1>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="text-lg font-medium">
                    E-Commerce Development
                  </li>
                  <li className="text-lg font-medium">Web Design</li>
                  <li className="text-lg font-medium">WordPress Development</li>
                  <li className="text-lg font-medium">Network Monitoring</li>
                  <li className="text-lg font-medium">
                    Page Speed Optimization
                  </li>
                  <li className="text-lg font-medium">Shopify Development</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src={choose1} alt="about_image" className="img-fluid" />
            </div>
          </div>
        </div>
        {/* <OurService /> */}
      </div>
    </div>
  );
}

export default Home;
