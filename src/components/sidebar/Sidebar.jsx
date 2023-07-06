import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Person, Add, Check, AccountCircle, Edit } from "@mui/icons-material";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">APP</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/customer" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircle className="icon" />
              <span>Customer</span>
            </li>
          </Link>
          <Link to="/owner" style={{ textDecoration: "none" }}>
            <li>
              <Person className="icon" />
              <span>Owner</span>
            </li>
          </Link>

          <Link to="/create" style={{ textDecoration: "none" }}>
            <li>
              <Add className="icon" />
              <span>Create sHours</span>
            </li>
          </Link>

          <Link to="/update" style={{ textDecoration: "none" }}>
            <li>
              <Edit className="icon" />
              <span>Update Hourse</span>
            </li>
          </Link>

          <Link to="/active" style={{ textDecoration: "none" }}>
            <li>
              <Check className="icon" />
              <span>Hourse Active</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
