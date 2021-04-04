import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "../../icon/icon-login.png";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);

  return (
    <div className={s.user}>
      <img className={s.icon} src={defaultAvatar} alt="" width="24" />
      <span> Welcome, {name} </span>
      <button className={s.btn} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

// const UserMenu = ({ avatar, name, onLogout }) => (
//   <div className={s.user}>
//     <img className={s.icon} src={avatar} alt="" width="24" />
//     <span> Welcome, {name} </span>
//     <button className={s.btn} type="button" onClick={onLogout}>
//       Logout
//     </button>
//   </div>
// );

// const mapStateToProps = (state) => ({
//   name: authSelectors.getUserName(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
