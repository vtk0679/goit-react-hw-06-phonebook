import { createAction } from "@reduxjs/toolkit";

const addItem = createAction("contactList/add");
const deleteItem = createAction("contactList/delete");
const changeFilter = createAction("contactList/changeFilter");

const actions = { addItem, deleteItem, changeFilter };

export default actions;
