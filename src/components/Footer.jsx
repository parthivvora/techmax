
import { motion } from "framer-motion";
import logoImage from "../assets/logo-white.png";

function Footer() {
  return (
    <>
      <div className="footer-section py-20 sm:py-28">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-part-1">
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
                  src={logoImage}
                  alt="logo.jpg"
                  className="w-24 sm:w-36"
                />
                <motion.div
                  initial={{ opacity: 0, y: 200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="social-links mt-4 flex items-center gap-3"
                >
                  <div className="icon-box bg-white w-11 h-11 rounded-md flex items-center justify-center">
                    <i className="fa-brands fa-facebook-f text-xl" />
                  </div>
                  <div className="icon-box bg-white w-11 h-11 rounded-md flex items-center justify-center">
                    <i className="fa-brands fa-twitter text-xl" />
                  </div>
                  <div className="icon-box bg-white w-11 h-11 rounded-md flex items-center justify-center">
                    <i className="fa-brands fa-youtube text-xl" />
                  </div>
                  <div className="icon-box bg-white w-11 h-11 rounded-md flex items-center justify-center">
                    <i className="fa-brands fa-linkedin text-xl" />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="our-services mt-14 sm:mt-0">
                <motion.h1
                  initial={{ opacity: 0, y: -200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-white text-3xl font-semibold capitalize border-b pb-2.5"
                >
                  our services
                </motion.h1>
                <motion.ul
                  initial={{ opacity: 0, y: 200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="service-menus flex flex-col gap-3 mt-4"
                >
                  <li className="text-white text-lg opacity-85 capitalize">
                    web development
                  </li>
                  <li className="text-white text-lg opacity-85 capitalize">
                    NFT development
                  </li>
                  <li className="text-white text-lg opacity-85 capitalize">
                    App development
                  </li>
                  <li className="text-white text-lg opacity-85 capitalize">
                    digital marketing
                  </li>
                  <li className="text-white text-lg opacity-85 capitalize">
                    UI/UX designing
                  </li>
                </motion.ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="quick-links mt-14 sm:mt-0">
                <motion.h1
                  initial={{ opacity: 0, y: -200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-white text-3xl font-semibold capitalize border-b pb-2.5"
                >
                  Quick Links
                </motion.h1>
                <motion.ul
                  initial={{ opacity: 0, y: 200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="quick-links-menus flex flex-col gap-3 mt-4"
                >
                  <li className="text-white text-lg opacity-85 capitalize">
                    About Us
                  </li>
                  <li className="text-white text-lg opacity-85 capitalize">
                    services
                  </li>
                  <li className="text-white text-lg opacity-85 capitalize">
                    portfolio
                  </li>
                  {/* <li className="text-white text-lg opacity-85 capitalize">
                    blog
                  </li> */}
                  <li className="text-white text-lg opacity-85 capitalize">
                    contact
                  </li>
                </motion.ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="contact-info mt-14 sm:mt-0">
                <motion.h1
                  initial={{ opacity: 0, y: -200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-white text-3xl font-semibold capitalize border-b pb-2.5"
                >
                  Contact Information
                </motion.h1>
                <motion.ul
                  initial={{ opacity: 0, y: 200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="contact-info-menus flex flex-col gap-3 mt-4"
                >
                  <li className="text-white text-lg flex items-center gap-2">
                    <span className="font-bold">Phone:</span>
                    <span className="opacity-85">+91 9173664515</span>
                  </li>
                  <li className="text-white text-lg flex items-center gap-2">
                    <span className="font-bold">Email:</span>
                    <span className="opacity-85">codesquareinfotech@gmail.com</span>
                  </li>
                  <li className="text-white text-lg capitalize flex items-center gap-2">
                    <span className="font-bold">Address:</span>
                    <span className="opacity-85">
                      418 4th Floor, The Galleria, Nr. Anupam Plaza, Yogi Chowk, Surat, Gujarat 395010
                    </span>
                  </li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-area py-10">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <motion.p
                initial={{ opacity: 0, x: -200 }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                  type: "spring",
                  stiffness: 100,
                  damping: 6,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-white"
              >
                <i className="fa-regular fa-copyright pe-1" />
                2024 Code Square Infotech - All Rights Reserved.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
