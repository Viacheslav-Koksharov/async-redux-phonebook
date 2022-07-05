import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/operations.js";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
}
