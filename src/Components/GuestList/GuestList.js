import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Guest from "../Guest";
import AddGuest from "../AddGuest";
import actions from "../../actions/actions";
import { connect } from "react-redux";
import contactOperations from "../../operations/contactOperations";
import { filterSelector, getFilteredContact } from "../../selectors/selectors";

import "../Notifications/AlertAnimation.css";

// components/GuestList
const GuestList = ({ onAdd, search, onSearch, contacts }) => (
  <div className="phoneBookList">
    <AddGuest contacts={contacts} onAdd={onAdd} />
    <div className="Guest">
      <input
        type="text"
        value={search}
        onChange={onSearch}
        className="filter"
        placeholder="Find contact by name"
      />
      <TransitionGroup className="Guests">
        {contacts.map((user) => (
          <CSSTransition
            key={user.id}
            timeout={250}
            classNames="Guests-item-fade"
            unmountOnExit
          >
            <Guest id={user.id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  // contacts: contactsSelector(state),
  filter: filterSelector(state),
  contacts: getFilteredContact(state),
});

const mapDispatchToProps = {
  onAdd: contactOperations.addContact,
  onSearch: actions.onSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestList);

// GuestList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onAdd: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onSearch: PropTypes.func.isRequired,
//   search: PropTypes.string.isRequired,
// };
