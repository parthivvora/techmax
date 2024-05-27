import { motion } from "framer-motion";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import counterData from "../data/counterData.json";
import partnerData from "../data/partnerData.json";
import heroImage from "../assets/home/home-1.png";
import Header from "../components/Header";
import OurService from "../components/OurService";
import WebSolution from "../components/WebSolution";
import ExpertAdvice from "../components/ExpertAdvice";
import TeamMember from "../components/TeamMember";
import ClientReview from "../components/ClientReview";
import BlogCommon from "../components/BlogCommon";
import Footer from "../components/Footer";

function Home() {
  const partnerOptions = {
    loop: true,
    margin: 20,
    autoplay: true,
    dots: false,
    autoplayTimeout: 1800,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 2,
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
    <div className="home-section">
      <Header />
      <div className="hero-part py-20">
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
      </div>
      <WebSolution />
      <ExpertAdvice />
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
      <div className="team-member-part mt-32">
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
      <div className="pricing-plan-part pt-24">
        <div className="container">
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
              Pricing Plan
            </motion.h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
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
                className="pricing-plan-box bg-white px-10 py-5 rounded-md flex flex-col gap-4 items-center"
              >
                <h1 className="text-2xl font-semibold capitalize">startup</h1>
                <div className="price-content flex items-end gap-1">
                  <span className="font-medium">$</span>
                  <h1 className="plan-price text-5xl font-bold">25</h1>
                  <span className="font-medium">/ per month</span>
                </div>
                <a
                  href="#"
                  className="get-started-btn text-balance font-medium text-white capitalize w-full block rounded-full py-3 text-center mt-3"
                >
                  get started
                </a>
                <ul className="pricing-details-menu flex flex-col gap-2">
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Web Development
                  </li>
                  <li className="text-lg flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Personal Use
                  </li>
                  <li className="text-lg flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Unlimited Projects
                  </li>
                  <li className="text-lg flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Project Management
                  </li>
                  <li className="text-lg flex items-center gap-3 delete-detail">
                    <i className="fa-solid fa-circle-xmark text-lg" />
                    <del>27/7 Support</del>
                  </li>
                  <li className="text-lg flex items-center gap-3 delete-detail">
                    <i className="fa-solid fa-circle-xmark text-lg" />
                    <del>Free Cancelation</del>
                  </li>
                  <li className="text-lg flex items-center gap-3 delete-detail">
                    <i className="fa-solid fa-circle-xmark text-lg" />
                    <del>Basic support on Github</del>
                  </li>
                  <li className="text-lg flex items-center gap-3 delete-detail">
                    <i className="fa-solid fa-circle-xmark text-lg" />
                    <del>Help center access</del>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                  type: "spring",
                  stiffness: 100,
                  damping: 6,
                  delay: 0.2,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                className="pricing-plan-box bg-white px-10 py-5 rounded-md flex flex-col gap-4 items-center"
              >
                <h1 className="text-2xl font-semibold capitalize">standard</h1>
                <div className="price-content flex items-end gap-1">
                  <span className="font-medium">$</span>
                  <h1 className="plan-price text-5xl font-bold">50</h1>
                  <span className="font-medium">/ per month</span>
                </div>
                <a
                  href="#"
                  className="get-started-btn text-balance font-medium text-white capitalize w-full block rounded-full py-3 text-center mt-3"
                >
                  get started
                </a>
                <ul className="pricing-details-menu flex flex-col gap-2">
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Web Development
                  </li>
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Personal Use
                  </li>
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Unlimited Projects
                  </li>
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Project Management
                  </li>
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    27/7 Support
                  </li>
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Free Cancelation
                  </li>
                  <li className="text-lg flex items-center gap-2 delete-detail">
                    <i className="fa-solid fa-circle-xmark text-lg" />
                    <del>Basic support on Github</del>
                  </li>
                  <li className="text-lg flex items-center gap-2 delete-detail">
                    <i className="fa-solid fa-circle-xmark text-lg" />
                    <del>Help center access</del>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                  type: "spring",
                  stiffness: 100,
                  damping: 6,
                  delay: 0.4,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                className="pricing-plan-box bg-white px-10 py-5 rounded-md flex flex-col gap-4 items-center"
              >
                <h1 className="text-2xl font-semibold capitalize">premium</h1>
                <div className="price-content flex items-end gap-1">
                  <span className="font-medium">$</span>
                  <h1 className="plan-price text-5xl font-bold">75</h1>
                  <span className="font-medium">/ per month</span>
                </div>
                <a
                  href="#"
                  className="get-started-btn text-balance font-medium text-white capitalize w-full block rounded-full py-3 text-center mt-3"
                >
                  get started
                </a>
                <ul className="pricing-details-menu flex flex-col gap-2">
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Web Development
                  </li>
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Personal Use
                  </li>
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Unlimited Projects
                  </li>
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Project Management
                  </li>
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    27/7 Support
                  </li>
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Free Cancelation
                  </li>
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Basic support on Github
                  </li>
                  <li className="text-lg flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-lg" />
                    Help center access
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-part mt-24 py-24">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-part w-9/12 mx-auto flex flex-col items-center gap-4">
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
                  className="text-white text-4xl font-bold"
                >
                  Digital Solution For Your Business
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                    delay: 0.2,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-white text-lg font-normal text-center"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud consectetur
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, x: -200 }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 100,
                    damping: 6,
                    delay: 0.4,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  href="#"
                  className="bg-white text-blue-500 capitalize text-base font-medium rounded-full px-5 py-3 mt-3"
                >
                  contact us
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-part pt-24">
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
            blog & news
          </motion.h1>
        </div>
        <BlogCommon />
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

export default Home;
