import PropTypes from 'prop-types';

import { IsOnline, Avatar, Name } from './Friends.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <IsOnline isOnline={isOnline}></IsOnline>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.object.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
