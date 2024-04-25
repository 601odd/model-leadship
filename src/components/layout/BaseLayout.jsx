import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";


const BaseLayout = () => {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="content-wrapper">

        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
