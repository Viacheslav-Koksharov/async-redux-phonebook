import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./actions";
import { fetchContacts, addContact, deleteContact } from "./operations.js";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const isError = createReducer(false, {
  [fetchContacts.rejected]:
    () =>
    (_, { payload }) =>
      payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]:
    () =>
    (_, { payload }) =>
      [payload],
  [addContact.pending]: () => null,
  [deleteContact.rejected]:
    () =>
    (_, { payload }) =>
      payload,
  [deleteContact.pending]: () => null,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  isLoading,
  isError,
  filter,
});
