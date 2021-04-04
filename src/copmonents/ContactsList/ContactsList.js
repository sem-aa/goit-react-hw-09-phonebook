import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import s from "./ContactsList.module.css";
import fadeStyles from "./fadeContacts.module.css";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";

export default function Phonebook() {
  const contacts = useSelector(contactsSelectors.getVisibleContact);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = useCallback(
    (id) => {
      dispatch(contactsOperations.deleteContact(id));
    },
    [dispatch]
  );

  return (
    <TransitionGroup component="ul">
      {contacts.map(({ id, name, number }) => (
        <CSSTransition classNames={fadeStyles} key={id} timeout={500}>
          <li className={s.conctact}>
            <p className={s.name}>{name}</p>
            <p className={s.number}>{number}</p>
            <button className={s.button} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

// class Phonebook extends React.Component {
//   componentDidMount() {
//     this.props.fetchContacts();
//   }

//   render() {
//     const { contacts, onDeleteContact } = this.props;

//     return (
//       <TransitionGroup component="ul">
//         {contacts.map(({ id, name, number }) => (
//           <CSSTransition classNames={fadeStyles} key={id} timeout={500}>
//             <li className={s.conctact}>
//               <p className={s.name}>{name}</p>
//               <p className={s.number}>{number}</p>
//               <button className={s.button} onClick={() => onDeleteContact(id)}>
//                 Delete
//               </button>
//             </li>
//           </CSSTransition>
//         ))}
//       </TransitionGroup>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   contacts: contactsSelectors.getVisibleContact(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
