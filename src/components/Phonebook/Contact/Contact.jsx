import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/operations';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className="contactsList__item">
      <span className="contactsList__info">
        <b>{name}:</b> {number}
      </span>
      <button className="contactsList__btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
