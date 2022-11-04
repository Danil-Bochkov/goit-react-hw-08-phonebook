import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ username, email, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.descriptionField}>
        <img src={avatar} alt={username} className={css.avatar} />
        <div className={css.description}>
          <p className={css.name}>{username}</p>
          <p className={css.tag}>{email}</p>
        </div>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    likes: PropTypes.number,
    views: PropTypes.number,
  }),
};

export default Profile;
