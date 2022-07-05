import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/actions";
import s from "../Filter/Filter.module.css";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <form className={s.list}>
      <label className={s.label} htmlFor="input">
        Find contact by name
        <input
          className={s.input}
          type="text"
          id="input"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </form>
  );
};

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// });
// const mapDispatchToProps = (dispatch) => ({
//   onFilterContact: (e) => dispatch(changeFilter(e.target.value)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter;
