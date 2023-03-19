import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';
import { FriendListWrap, FriendItem } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      {friends.map(friend => {
        return (
          <FriendItem key={friend.id}>
            <FriendListItem
              friend={friend}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </FriendItem>
        );
      })}
    </FriendListWrap>
  );
};

FriendListWrap.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
    })
  ),
};
