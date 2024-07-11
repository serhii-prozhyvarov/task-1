import { Profile } from '../Profile/Profile';
import user from '../../data/profile.json';

import Statistics from '../Statistics/Statistics';
import data from '../../data/statistics.json';

import {Friends} from '../Friends/Friends';
import friends from '../../data/friends.json';

import TransactionHistory from 'components/Transactions/Transactions';
import items from '../../data/transactions.json'


export default function App() {
  
  return (
    <>
      <Profile
        username={user.username}
        avatar={user.avatar}
        location={user.location}
        tag={user.tag}
        stats={user.stats}
      />
      <Statistics title="Uploads stats" stats={data} />
      <Friends friends={friends}></Friends>
      <TransactionHistory items={ items} />
    </>
  );
}
