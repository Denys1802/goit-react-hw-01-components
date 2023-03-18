import PropTypes from 'prop-types';

import { FriendItem, IsOnline, Avatar, Name } from './Friends.styled';

export const FriendListItem = ({ friends }) => {
  return friends.map(friend => {
    const { avatar, name, isOnline, id } = friend;
    return (
      <FriendItem key={id}>
        <IsOnline isOnline={isOnline}></IsOnline>
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
      </FriendItem>
    );
  });
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
