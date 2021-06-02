import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import s from "../App.module.css";
import {Form, Button} from 'react-bootstrap'

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onLogin = useCallback(
    (email, password) => dispatch(authOperations.logIn(email, password)),
    [dispatch]
  );

  const handleEmailChange = (evt) => {
    setEmail(evt.currentTarget.value);
  };
  const handlePasswordChange = (evt) => {
    setPassword(evt.currentTarget.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className={s.App}>
  <Form onSubmit={handleSubmit} autoComplete="off" >
  <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange} placeholder="Enter email" />
    </Form.Group>

  <Form.Group controlId="formBasicPassword">
    
    <Form.Control type="password"
              name="password"
              value={password}
            onChange={handlePasswordChange}
            placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

// class LoginView extends React.Component {
//   state = {
//     email: "",
//     password: "",
//   };
//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onLogin(this.state);
//     this.setState({ name: "", email: "", password: "" });
//   };
//   render() {
//     const { email, password } = this.state;
//     const { handleChange, handleSubmit } = this;
//     return (
//       <div className={s.App}>
//         <h1>Login page</h1>

//         <form onSubmit={handleSubmit} autoComplete="off">
//           <div className={s.field}>
//             <label>
//               email
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div className={s.field}>
//             <label>
//               password
//               <input
//                 type="password"
//                 name="password"
//                 value={password}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <button type="submit">Войти</button>
//         </form>
//       </div>
//     );
//   }
// }
// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };
// export default connect(null, mapDispatchToProps)(LoginView);
