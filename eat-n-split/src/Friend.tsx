import { Friend as FriendType } from "./App";

interface FriendProps {
  friend: FriendType;
  onSelectFriend: (friend: FriendType) => void;
  selectedFriend: FriendType | null;
}

export function Friend({
  friend,
  onSelectFriend,
  selectedFriend,
}: FriendProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div>
        <img
          src={friend.imageUrl}
          alt={friend.name}
          style={{ width: "48px", height: "48px" }}
        />
      </div>
      <div>
        <h4>{friend.name}</h4>
        {friend.balance === 0 && `You and ${friend.name} is even`}
        {friend.balance > 0 &&
          `${friend.name} owes you ${Math.abs(friend.balance)} $`}
        {friend.balance < 0 && `You owe ${Math.abs(friend.balance)}$`}
      </div>
      <button onClick={() => onSelectFriend(friend)}>
        {selectedFriend?.id === friend.id ? "Close" : "Select"}
      </button>
    </div>
  );
}
