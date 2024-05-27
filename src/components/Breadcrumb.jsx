/* eslint-disable react/prop-types */
import apiRoutes from "../constants/apiRoutes";

function Breadcrumb({ pageName }) {
  return (
    <div className="breadcrumb-part">
      <div className="breadcrumb-content flex items-center justify-center flex-col h-full">
        <h1 className="text-white text-4xl sm:text-5xl font-semibold capitalize">
          {pageName}
        </h1>
        <ul className="text-white text-lg font-semibold capitalize flex breadcrumb-list items-center mt-3">
          <li className="uppercase">
            <a href={apiRoutes.HOME}>home</a>
          </li>
          <li className="mx-3"></li>
          <li className="uppercase">{pageName}</li>
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumb;
