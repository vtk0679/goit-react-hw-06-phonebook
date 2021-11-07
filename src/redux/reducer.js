import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import actions from "./actions";

const initialContactsList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const savedContacts = JSON.parse(localStorage.getItem("contacts"));

const items = createReducer(savedContacts || initialContactsList, {
  [actions.addItem]: (state, { payload }) => {
    if (state.find((contact) => contact.name === payload.name)) {
      alert(payload.name + " is already in contacts");
      return state;
    }
    const newContactsList = [...state, payload];
    localStorage.setItem("contacts", JSON.stringify(newContactsList));
    return newContactsList;
  },
  [actions.deleteItem]: (state, { payload }) => {
    const newList = state.filter((contact) => contact.id !== payload);
    localStorage.setItem("contacts", JSON.stringify(newList));
    return newList;
  },
});

const filter = createReducer("", {
  [actions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
