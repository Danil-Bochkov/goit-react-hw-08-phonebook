import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

export default function ContactForm({ addContact }) {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    addContact({
      name: form.elements.name.value,
      phone: form.elements.phone.value,
    });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={style.formField}>
      <label className={style.formField__label}>
        Name
        <input
          className={style.formField__input}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={style.formField__label}>
        Number
        <input
          className={style.formField__input}
          type="tel"
          name="phone"
          placeholder="111-11-11"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={style.formField__btn}>
        Add Contact
      </button>
    </form>
  );
}
ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
