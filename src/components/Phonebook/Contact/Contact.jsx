import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/operations';

import style from './Contact.module.css';

export const Contact = ({ _id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(_id));

  return (
    <div className={style.contactsList__item}>
      <span className={style.contactsList__info}>
        <b>{name}:</b> {phone}
      </span>
      <button className={style.contactsList__btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
