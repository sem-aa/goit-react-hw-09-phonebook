import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import s from "../App.module.css";
import {Form, Button} from 'react-bootstrap'

export default function RegisterView() {
  const [name, setName] = useState("");
  const changeName = (event) => {
    setName(event.currentTarget.value);
  };
  const [email, setEmail] = useState("");
  const changeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const [password, setPassword] = useState("");
  const changePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  const dispatch = useDispatch();
  const onRegister = useCallback(
    (name, email, password) =>
      dispatch(authOperations.register(name, email, password)),
    [dispatch]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(name, email, password);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.App}>
    <Form onSubmit={handleSubmit} autoComplete="off">
    <Form.Group controlId="formBasicName">
        <Form.Control type="text" name="name" value={name} onChange={changeName} placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
    <Form.Control type="email"
              name="email"
              value={email}
            onChange={changeEmail}
            placeholder="Enter email" />
    </Form.Group>
  <Form.Group controlId="formBasicPassword">
    
          <Form.Control
            type="password"
              name="password"
              value={password}
            onChange={changePassword}
            placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

// class RegisterView extends React.Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onRegister(this.state);
//     this.setState({ name: "", email: "", password: "" });
//   };

//   render() {
//     const { name, email, password } = this.state;
//     const { handleChange, handleSubmit } = this;
//     return (
//       <div className={s.App}>
//         <h1>Registration page</h1>

//         <form onSubmit={handleSubmit} autoComplete="off">
//           <div className={s.field}>
//             <label>
//               name
//               <input
//                 type="text"
//                 name="name"
//                 value={name}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
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
//           <button type="submit">????????????????????????????????????</button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
