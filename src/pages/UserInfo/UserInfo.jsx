import UserMenu from 'components/UserMenu/UserMenu';

import Profile from '../../components/Profile/Profile';
import Statistics from '../../components/Statistics/Statistics';
import TransactionHistory from '../../components/TransactionHistory/TransactionHistory';

import user from '../../components/Profile/user.json';
import data from '../../components/Statistics/data.json';
import transactions from '../../components/TransactionHistory/transactions.json';
import { useSelector } from 'react-redux';
import { selectEmail, selectUsername } from 'redux/auth/auth-selectors';
import { randomAvatar } from 'components/randomAvatar/randomAvatar';

import style from './UserInfo.module.css';

export default function UserInfo() {
  const username = useSelector(selectUsername);
  const email = useSelector(selectEmail);

  return (
    <>
      <UserMenu />
      <div className={style.userField}>
        <Profile
          username={username}
          email={email}
          avatar={randomAvatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
      </div>
      <TransactionHistory items={transactions} />
    </>
  );
}
