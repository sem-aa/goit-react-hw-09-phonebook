import React, { useState, useCallback } from "react";
import s from "./Form.module.css";
import { CSSTransition } from "react-transition-group";
import fadeStyle from "../fade/fade.module.css";
import { useDispatch, useSelector } from "react-redux";
import { contactsSelectors, contactsOperations } from "../../redux/contacts";

export default function Form() {
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const [nameContact, setNameContact] = useState("");
  const [number, setNumber] = useState("");
  const [doubleContact, setDoubleContact] = useState(false);
  const [message, setMessage] = useState("");

  const changeName = (event) => {
    setNameContact(event.currentTarget.value);
  };

  const changeNumber = (event) => {
    setNumber(event.currentTarget.value);
  };

  const dispatch = useDispatch();
  const onSubmit = (nameContact, number) =>
    dispatch(contactsOperations.addContact(nameContact, number));
  const addContact = (event) => {
    event.preventDefault();
    if (nameContact === "" && number === "") {
      setMessage("Введите имя и номер контакта");
      setDoubleContact(true);
      setTimeout(() => {
        setMessage("");
        setDoubleContact(false);
      }, 3000);
      return;
    }
    if (
      contacts.find(
        ({ name }) =>
          name.toLocaleLowerCase() === nameContact.toLocaleLowerCase()
      )
    ) {
      setMessage(`Контакт с именем ${nameContact} уже существует`);
      setDoubleContact(true);
      setTimeout(
        () => {
          setMessage("");
          setDoubleContact(false);
          setNameContact("");
          setNumber("");
        },

        3000
      );
      return;
    }
    onSubmit(nameContact, number);
    setNameContact("");
    setNumber("");
  };

  return (
    <div>
      <CSSTransition
        in={doubleContact}
        classNames={fadeStyle}
        timeout={500}
        unmountOnExit
      >
        <p className={s.alert}>{message}</p>
      </CSSTransition>

      <form className={s.mainForm} onSubmit={addContact}>
        <label className={s.name}>
          Name{" "}
          <input
            className={s.inputName}
            name="name"
            type="text"
            value={nameContact}
            onChange={changeName}
          />
        </label>
        <label className={s.number}>
          Number{" "}
          <input
            className={s.inputNumber}
            name="number"
            type="text"
            value={number}
            onChange={changeNumber}
          />
        </label>
        <br></br>
        <button className={s.addContact} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}

// class Form extends React.Component {
//   state = {
//     name: "",
//     number: "",
//     doubleContact: false,
//     message: "",
//   };

//   changeInput = (event) => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   addContact = (event) => {
//     event.preventDefault();
//     if (this.state.name === "" && this.state.number === "") {
//       this.setState({
//         message: "Введите имя и номер контакта",
//         doubleContact: true,
//       });
//       setTimeout(
//         () => this.setState({ message: "", doubleContact: false }),
//         3000
//       );
//       return;
//     }
//     if (
//       this.props.contacts.find(
//         ({ name }) =>
//           name.toLocaleLowerCase() === this.state.name.toLocaleLowerCase()
//       )
//     ) {
//       this.setState({
//         message: `Контакт с именем ${this.state.name} уже существует`,
//         doubleContact: true,
//       });
//       setTimeout(
//         () => {
//           this.setState({ message: "", doubleContact: false });
//           this.reset();
//         },

//         3000
//       );
//       return;
//     }
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     const { name, number, doubleContact, message } = this.state;
//     return (
//       <div>
//         <CSSTransition
//           in={doubleContact}
//           classNames={fadeStyle}
//           timeout={500}
//           unmountOnExit
//         >
//           <p className={s.alert}>{message}</p>
//         </CSSTransition>

//         <form className={s.mainForm} onSubmit={this.addContact}>
//           <label className={s.name}>
//             Name{" "}
//             <input
//               className={s.inputName}
//               name="name"
//               type="text"
//               value={name}
//               onChange={this.changeInput}
//             />
//           </label>
//           <label className={s.number}>
//             Number{" "}
//             <input
//               className={s.inputNumber}
//               name="number"
//               type="text"
//               value={number}
//               onChange={this.changeInput}
//             />
//           </label>
//           <br></br>
//           <button className={s.addContact} type="submit">
//             Add Contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   contacts: contactsSelectors.getAllContacts(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (data) => dispatch(contactsOperations.addContact(data)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Form);
