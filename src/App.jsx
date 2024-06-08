import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import apiRoutes from "./constants/apiRoutes";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={apiRoutes.HOME} element={<Home />} />
          <Route path={apiRoutes.ABOUT} element={<About />} />
          <Route path={apiRoutes.SERVICE} element={<Services />} />
          {/* <Route path={apiRoutes.BLOG} element={<Blog />} /> */}
          <Route path={apiRoutes.CONTACT} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
