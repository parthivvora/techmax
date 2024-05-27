import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import OurService from "../components/OurService";
import WebSolution from "../components/WebSolution";
import ExpertAdvice from "../components/ExpertAdvice";

function Services() {
  return (
    <div className="services-section">
      <Header />
      <Breadcrumb pageName="services" />
      <div className="service-part my-28">
        <OurService />
      </div>
      <WebSolution />
      <ExpertAdvice />
      <Footer />
    </div>
  );
}

export default Services;
