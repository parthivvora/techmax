import { motion } from "framer-motion";
import ProgressBar from "react-bootstrap/ProgressBar";
import aboutImage from "../assets/about/about.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import counterData from "../data/counterData.json";
import TeamMember from "../components/TeamMember";
import ClientReview from "../components/ClientReview";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import partnerData from "../data/partnerData.json";

function About() {
  const partnerOptions = {
    loop: true,
    margin: 20,
    autoplay: true,
    dots: false,
    autoplayTimeout: 1800,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <div className="about-section">
      <Header />
      <Breadcrumb pageName="about us" />
      <div className="hero-part py-20">
        <div className="container">
          <div className="row items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="title-part flex flex-col gap-4">
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
                  className="text-3xl sm:text-4xl font-bold w-full sm:w-11/12 leading-normal"
                >
                  <span>Our Mission</span> Is To Make Your Business Better
                  Through Technology.
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
                  className="text-xl w-11/12 leading-normal"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur.
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0, y: -200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="progress-bar-part flex flex-col gap-4 mt-3"
                >
                  <li>
                    <div className="progress-bar-content flex justify-between items-center">
                      <h1 className="text-lg font-medium">Web Development</h1>
                      <h1 className="text-md font-medium">90%</h1>
                    </div>
                    <ProgressBar now={90} />
                  </li>
                  <li>
                    <div className="progress-bar-content flex justify-between items-center">
                      <h1 className="text-lg font-medium">IOS Apps</h1>
                      <h1 className="text-md font-medium">75%</h1>
                    </div>
                    <ProgressBar now={75} />
                  </li>
                  <li>
                    <div className="progress-bar-content flex justify-between items-center">
                      <h1 className="text-lg font-medium">
                        Discovery & Strategy
                      </h1>
                      <h1 className="text-md font-medium">95%</h1>
                    </div>
                    <ProgressBar now={95} />
                  </li>
                </motion.ul>
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
                src={aboutImage}
                alt="hero-image"
                className="mt-[1rem] sm:mt-0 ms-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="counter-part py-32">
        <div className="container">
          <div className="row">
            {counterData?.map((count, index) => (
              <div className="col-lg-3 col-md-3 col-sm-12" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: -200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="counter-box flex items-center flex-col gap-3"
                >
                  <h1 className="text-white text-5xl font-bold">
                    {count.count}
                  </h1>
                  <h6 className="text-white text-xl font-semibold capitalize">
                    {count.title}
                  </h6>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="team-member-part mt-20 sm:mt-32">
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
            team member
          </motion.h1>
        </div>
        <TeamMember />
      </div>
      <div className="client-review-part py-24 mt-20">
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
            Our Client Say
          </motion.h1>
        </div>
        <ClientReview />
      </div>
      <div className="trusted-partner mt-24 py-20">
        <div className="title-part">
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
            className="text-4xl font-bold leading-normal text-center capitalize mb-10"
          >
            Trusted Partners
          </motion.h1>
        </div>
        <div className="container">
          <div className="row">
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
              <OwlCarousel className="owl-theme" {...partnerOptions}>
                {partnerData?.map((partner, index) => (
                  <div className="img-box" key={index}>
                    <img
                      src={`${window.location.origin}/images/partner/${partner.image}`}
                      alt="partner-image"
                      className="img-fluid"
                    />
                  </div>
                ))}
              </OwlCarousel>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
