import servicesData from "../data/servicesData.json";
import { motion } from "framer-motion";

function OurService() {
  return (
    <div className="container">
      <div className="row">
        {servicesData.map((service, index) => (
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
            className="col-lg-4 col-md-4 col-sm-12"
            key={index}
          >
            <div className="service-content-box p-4 rounded-lg flex flex-col gap-3">
              <div className="img-box flex items-center justify-center">
                <i className={`text-4xl font-normal ${service.icon}`} />
              </div>
              <h1 className="text-2xl font-semibold leading-normal capitalize">
                {service.title}
              </h1>
              <p>{service.description.slice(0, 150)}...</p>
              <a
                href="#"
                className="text-base underline font-medium leading-normal capitalize"
              >
                read more
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OurService;
