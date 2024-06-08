import { motion } from "framer-motion";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="contact-us-section">
      <Header />
      <Breadcrumb pageName="contact us" />
      <div className="contact-us-form py-28">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
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
                className="address-info-part p-5 mb-[3rem] sm:mb-0"
              >
                <div className="address">
                  <h1 className="text-xl font-semibold capitalize">address:</h1>
                  <p className="text-lg mt-2 capitalize">
                    418 4th Floor, The Galleria, Nr. Anupam Plaza, Yogi Chowk, Surat, Gujarat 395010
                  </p>
                </div>
                <div className="phone mt-5">
                  <h1 className="text-xl font-semibold capitalize">phone:</h1>
                  <p className="text-lg mt-2">+91 9173664515</p>
                </div>
                <div className="email mt-5">
                  <h1 className="text-xl font-semibold capitalize">email:</h1>
                  <a href="mailto:codesquareinfotech@gmail.com" className="text-lg mt-2">codesquareinfotech@gmail.com</a>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <motion.form
                initial={{ opacity: 0, x: 200 }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                  type: "spring",
                  stiffness: 100,
                  damping: 6,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                method="post"
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 py-2.5 text-lg focus-visible:outline-none"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="w-full px-3 py-2.5 text-lg focus-visible:outline-none mt-[1.4rem] sm:mt-0"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <input
                      type="text"
                      placeholder="Your Phone"
                      className="w-full px-3 py-2.5 text-lg focus-visible:outline-none mt-4"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <input
                      type="text"
                      placeholder="Your Subject"
                      className="w-full px-3 py-2.5 text-lg focus-visible:outline-none mt-4"
                    />
                  </div>
                  <div className="col-sm-12">
                    <textarea
                      rows={5}
                      placeholder="Your Message"
                      className="w-full px-3 py-2.5 text-lg focus-visible:outline-none mt-4"
                    />
                  </div>
                  <div className="col-sm-12">
                    <button className="capitalize text-white font-semibold px-[2rem] py-[0.8rem] rounded-full mt-3">
                      send Message
                    </button>
                  </div>
                </div>
              </motion.form>
            </div>
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
              className="col-sm-12"
            >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4675497729972!2d72.87999858050414!3d21.213300531111177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb6f677fe79%3A0xf12bda6b88d3c0de!2sCode%20Square%20Infotech%20%26%20IT%20Institute%20%7C%20Web%20development%20%7C%20App%20development%20%7C%20UI%20UX%20designing!5e0!3m2!1sen!2sin!4v1717756402651!5m2!1sen!2sin" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full mt-20" />

            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
