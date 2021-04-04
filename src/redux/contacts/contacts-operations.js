import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "../contacts/contacts-actions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error)));
};

const addContact = (name, number) => async (dispatch) => {
  const items = {
    name,
    number,
  };

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post("/contacts", items);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

// const addContact = (data) => (dispatch) => {
//   const contact = {
//     name: data.name,
//     number: data.number,
//   };

//   dispatch(addContactRequest());

//   axios
//     .post("/contacts", contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch((error) => dispatch(addContactError(error)));
// };

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};

const operations = {
  addContact,
  deleteContact,
  fetchContacts,
};

export default operations;
