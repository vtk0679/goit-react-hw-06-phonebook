import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../redux/actions";

import ContactItem from "./ContactItem";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getFilteredContacts = (contacts, filter) =>
  contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

const mapStateToProps = ({ contacts }) => ({
  contacts: getFilteredContacts(contacts.items, contacts.filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(actions.deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
