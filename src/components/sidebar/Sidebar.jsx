import { Link,NavLink } from "react-router-dom";
import { Icons } from "../../assets/icons";
import { SidebarWrap } from "./Sidebar.styles";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarClose } from "../../redux/slices/sidebarSlice";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();

  return (
    <SidebarWrap className={`${isSidebarOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <span className="brand-logo">
            <img src={Icons.LogoWhite} alt="site brand logo" />
          </span>
          <span className="brand-text">Brand</span>
        </div>
        <button
          className="sidebar-close-btn"
          onClick={() => dispatch(setSidebarClose())}
        >
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <NavLink   to="/model-leadship/dashboard" end className="menu-link" activeclassname="active">
                <span className="menu-link-icon">
                  <img src={Icons.Chart} alt="" />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink   to="/model-leadship/event-total" className="menu-link" activeclassname="active">
                <span className="menu-link-icon">
                  <img src={Icons.Graph} alt="" />
                </span>
                <span className="menu-link-text">event-total</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/model-leadship/volunteer" className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.Analytics} alt="" />
                </span>
                <span className="menu-link-text">volunteer</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <Link to="/model-leadship/3d" className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.Cog} alt="" />
                </span>
                <span className="menu-link-text">3D</span>
              </Link>
            </li>
            {/* <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.Analytics} alt="" />
                </span>
                <span className="menu-link-text">Sales Report</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.Message} alt="" />
                </span>
                <span className="menu-link-text">Messages</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.Cog} alt="" />
                </span>
                <span className="menu-link-text">Settings</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.SignOut} alt="" />
                </span>
                <span className="menu-link-text">Sign Out</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </SidebarWrap>
  );
};

export default Sidebar;


