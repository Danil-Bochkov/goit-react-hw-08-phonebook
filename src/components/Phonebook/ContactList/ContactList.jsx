import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../../Notification/Notification';
import { Contact } from '../Contact/Contact';

import style from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <div className={style.contactsField}>
      {contacts?.length < 0 ? (
        <Notification message="You don't have any contact 😓" />
      ) : (
        <ul className={style.contactsList}>
          {contacts.map(({ _id, name, phone }, i) => (
            <li key={i}>
              <Contact _id={_id} name={name} phone={phone} />
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
      _id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};

export default ContactList;
