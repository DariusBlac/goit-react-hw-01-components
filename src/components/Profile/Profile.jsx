import {
  Avatar,
  ProfileContainer,
  ProfileListContainer,
  ProfileListItem,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <ProfileContainer>
        <Avatar src={avatar} alt="User avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </ProfileContainer>

      <ProfileListContainer>
        <ProfileListItem>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </ProfileListItem>
        <ProfileListItem>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </ProfileListItem>
        <ProfileListItem>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </ProfileListItem>
      </ProfileListContainer>
    </div>
  );
};
