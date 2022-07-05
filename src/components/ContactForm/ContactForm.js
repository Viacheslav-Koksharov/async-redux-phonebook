import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operations";
import s from "../ContactForm/ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setPhone("");
  };

  return (
    <form className={s.list} onSubmit={submitForm}>
      <label className={s.label} htmlFor={name}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id="name"
        />
      </label>
      <label className={s.label} htmlFor={phone}>
        Number
        <input
          className={s.input}
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          id="phone"
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
