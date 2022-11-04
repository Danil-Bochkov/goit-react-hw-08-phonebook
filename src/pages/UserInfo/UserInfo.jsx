import { useSelector } from 'react-redux';
import { selectEmail, selectUsername } from 'redux/auth/auth-selectors';
import { randomAvatar } from 'components/randomAvatar/randomAvatar';

import UserMenu from 'components/Navigation/UserMenu/UserMenu';
import Profile from 'components/UserInfo/Profile/Profile';
import Statistics from 'components/UserInfo/Statistics/Statistics';
import TransactionHistory from 'components/UserInfo/TransactionHistory/TransactionHistory';

import user from 'components/UserInfo/Profile/user.json';
import data from 'components/UserInfo/Statistics/data.json';
import transactions from 'components/UserInfo/TransactionHistory/transactions.json';

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
