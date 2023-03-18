import propTypes from 'prop-types';

import {
  Card,
  Avatar,
  Description,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  StatsInfo,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <span>Followers</span>
          <StatsInfo>{stats.followers}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsInfo>{stats.views}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatsInfo>{stats.likes}</StatsInfo>
        </StatsItem>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
  tag: propTypes.string,
  stats: propTypes.objectOf(propTypes.number),
};
