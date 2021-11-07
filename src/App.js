import "./App.css";

import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Phonebook</h1>
        <Form></Form>
      </div>

      <h2>Contacts</h2>

      <Filter />
      <ContactList />
    </>
  );
}
