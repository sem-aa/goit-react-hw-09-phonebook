import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Auth from "../Auth/Auth";
import UserMenu from "../UserMenu/UserMenu";
import { authSelectors } from "../../redux/auth";
import s from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <div className={s.AppBar}>
      {isLoggedIn && (
        <NavLink
          className={s.link}
          to="/contacts"
          exat
          activeClassName={s.activeStyle}
        >
          Contacts
        </NavLink>
      )}
      {isLoggedIn ? <UserMenu /> : <Auth />}
    </div>
  );
}

// const AppBar = ({ isLoggedIn }) => (
//   <div className={s.AppBar}>
//     {isLoggedIn && (
//       <NavLink
//         className={s.link}
//         to="/contacts"
//         exat
//         activeClassName={s.activeStyle}
//       >
//         Contacts
//       </NavLink>
//     )}
//     {isLoggedIn ? <UserMenu /> : <Auth />}
//   </div>
// );

// const mapStateToProps = (state) => ({
//   isLoggedIn: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);
