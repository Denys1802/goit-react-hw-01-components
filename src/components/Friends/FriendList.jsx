import { FriendListItem } from './FriendListItem';
import { FriendListWrap } from './Friends.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      <FriendListItem friends={friends} />
    </FriendListWrap>
  );
};
