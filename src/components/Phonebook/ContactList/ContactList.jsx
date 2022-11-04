import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../../Notification/Notification';
import { Contact } from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <div className="contactsField">
      {contacts?.length < 0 ? (
        <Notification message="You don't have any contact 😓" />
      ) : (
        <ul className="contactsList">
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <Contact id={id} name={name} number={number} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default ContactList;
