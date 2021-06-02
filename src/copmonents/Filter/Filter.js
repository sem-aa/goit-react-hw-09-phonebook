import React from "react";
import s from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import fadeStyle from "../fade/fade.module.css";
import { contactsSelectors, changeFilter } from "../../redux/contacts";
import {Form} from "react-bootstrap"

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getAllContacts);

  const onChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <>
      <CSSTransition
        in={contacts.length > 1}
        classNames={fadeStyle}
        timeout={500}
        unmountOnExit
      >
        {/* <label className={s.find}>
          Find number
          <input
            className={s.inputFind}
            type="text"
            value={value}
            onChange={onChange}
          ></input>
        </label> */}

  <Form.Group className="mb-3" controlId="formBasicFind">
    
    <Form.Control className={s.filter}
            type="text"
            value={value}
            onChange={onChange} placeholder="Find contact"/>
      </Form.Group>
      </CSSTransition>
    </>
  );
}

// const Filter = ({ value, onChange, contacts }) => {
//   return (
//     <>
//       <CSSTransition
//         in={contacts.length > 1}
//         classNames={fadeStyle}
//         timeout={500}
//         unmountOnExit
//       >
//         <label className={s.find}>
//           Find number
//           <input
//             className={s.inputFind}
//             type="text"
//             value={value}
//             onChange={onChange}
//           ></input>
//         </label>
//       </CSSTransition>
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   value: contactsSelectors.getFilter(state),
//   contacts: contactsSelectors.getAllContacts(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (e) => dispatch(changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
