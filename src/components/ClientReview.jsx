import { motion } from "framer-motion";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import clientReviewData from "../data/clientReviewData.json";

function ClientReview() {
  const clientReviewOptions = {
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
        items: 3,
      },
    },
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <OwlCarousel className="owl-theme" {...clientReviewOptions}>
            {clientReviewData?.map((client, index) => (
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
                className="client-review-box rounded-md flex flex-col items-center gap-4 px-10 py-5 bg-white"
                key={index}
              >
                <div className="review-rating flex justify-center gap-2">
                  <i className="fa-solid fa-star text-yellow-400 text-xl" />
                  <i className="fa-solid fa-star text-yellow-400 text-xl" />
                  <i className="fa-solid fa-star text-yellow-400 text-xl" />
                  <i className="fa-solid fa-star text-yellow-400 text-xl" />
                  <i className="fa-solid fa-star text-yellow-400 text-xl" />
                </div>
                <p className="text-xl text-center">{client.review}</p>
                <img
                  src={`${window.location.origin}/images/testimonial/${client.image}`}
                  alt="team_member_image"
                  className="rounded-full img-fluid"
                />
                <div className="client-review-info flex flex-col items-center gap-1">
                  <h1 className="text-xl font-semibold">{client.name}</h1>
                  <h6 className="text-lg font-medium text-blue-500">
                    {client.designation}
                  </h6>
                </div>
              </motion.div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default ClientReview;
