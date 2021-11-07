import { createAction } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";

const addItem = createAction("contactList/add", ({ name, number }) => ({
  payload: {
    name,
    number,
    id: nanoid(),
  },
}));
const deleteItem = createAction("contactList/delete");
const changeFilter = createAction("contactList/changeFilter");

const actions = { addItem, deleteItem, changeFilter };

export default actions;
