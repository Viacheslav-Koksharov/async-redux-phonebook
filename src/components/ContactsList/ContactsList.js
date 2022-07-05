import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { getVisibleContacts } from "../../redux/selectors";
import ContactItem from "../ContactItem/ContactItem";
import s from "../ContactsList/ContactsList.module.css";

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  // useEffect(() => { dispatch(fetchContacts()) }, [dispatch]);

  return (
    <>
      {contacts.length > 0 && (
        <ul className={s.list}>
          {contacts.map(({ id, name, phone }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              phone={phone}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
