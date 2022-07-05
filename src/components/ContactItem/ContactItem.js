// import PropTypes from "prop-types";
import s from "../ContactItem/ContactItem.module.css";

const ContactItem = ({ id, name, phone, onDeleteContact }) => {
  return (
    <li className={s.list_item} key={id}>
      <p className={s.text}>{name}</p>
      <p className={s.text}>{phone}</p>
      <button className={s.button} onClick={() => onDeleteContact(id)}>
        Del
      </button>
    </li>
  );
};

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactItem;
