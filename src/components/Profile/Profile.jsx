// import PropTypes from 'prop-types';
import {
  Avatar,
  Name,
  ProfileCont,
  Tag,
  Location,
  DescriptionCont,
  StatsList,
  Label,
  ListItem,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, avatar, location, tag, stats: {followers, views, likes} }) => {

  return (
    <ProfileCont>
      <DescriptionCont>
        <Avatar src={avatar} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionCont>
      <StatsList>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </ListItem>
      </StatsList>
    </ProfileCont>
    );
};

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   followers: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   likes: PropTypes.number.isRequired,
// };