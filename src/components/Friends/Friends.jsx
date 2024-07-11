import FriendListItem from "./FriendListItem";
import { List } from "./Friends.styled";
import PropTypes from 'prop-types';

export const Friends = ({friends}) => {
    return (
      <List>
        {friends.map(({ avatar, id, isOnline, name }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            isOnline={isOnline}
            name={name}
          />
        ))}
      </List>
    );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
