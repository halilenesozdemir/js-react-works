import { FriendListProps } from "./App";
import { Friend } from "./Friend";

export function FriendList({
  friends,
  onSelectFriend,
  selectedFriend,
}: FriendListProps) {
  return (
    <div style={{ marginBottom: "15px" }}>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </div>
  );
}
