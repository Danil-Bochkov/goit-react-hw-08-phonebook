import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/operations';

import style from './Contact.module.css';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={style.contactsList__item}>
      <span className={style.contactsList__info}>
        <b>{name}:</b> {number}
      </span>
      <button className={style.contactsList__btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
