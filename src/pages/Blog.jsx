import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BlogCommon from "../components/BlogCommon";

function Blog() {
  return (
    <div className="blog-section">
      <Header />
      <Breadcrumb pageName="blog" />
      <div className="blog-part my-28">
        <BlogCommon />
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
