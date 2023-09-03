import { ListContainerFriends, ListItemFriends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListContainerFriends>
      {friends.map(friend => {
        return (
          <ListItemFriends key={friend.id} $online={friend.isOnline}>
            <span className="status"></span>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </ListItemFriends>
        );
      })}
    </ListContainerFriends>
  );
};
