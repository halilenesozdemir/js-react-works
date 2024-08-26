import { useState } from "react";
import { FormBillSplit } from "./FormBillSplit";
import { FormAddFriend } from "./FormAddFriend";
import { FriendList } from "./FriendList";

export interface FriendListProps {
  friends: Friend[];
  onSelectFriend: (friend: Friend) => void;
  selectedFriend: Friend | null;
}

export interface Friend {
  id: string;
  name: string;
  imageUrl: string;
  balance: number;
}

export interface FormBillSplitProps {
  selectedFriend: Friend | null;
  onBill: (balance: number) => void;
}

export default function App() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [isAddFriendFormOpen, setIsAddFriendFormOpen] =
    useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  function handleSelectFriend(friend: Friend) {
    setSelectedFriend(selectedFriend?.id === friend.id ? null : friend);
    setIsAddFriendFormOpen(false);
  }

  function handleAddFriend(newFriend: Friend) {
    setFriends((curFriends) => [...curFriends, newFriend]);
  }

  function handleFormOpen() {
    setIsAddFriendFormOpen((curState) => !curState);
  }

  function handleBill(balance: number) {
    setFriends((curFriends) =>
      curFriends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + balance }
          : friend
      )
    );
  }

  return (
    <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px" }}>
      <div style={{ marginRight: "100px" }}>
        {friends.length > 0 && (
          <FriendList
            friends={friends}
            onSelectFriend={handleSelectFriend}
            selectedFriend={selectedFriend}
          />
        )}
        {isAddFriendFormOpen && <FormAddFriend onAddFriend={handleAddFriend} />}
        <button onClick={handleFormOpen}>
          {isAddFriendFormOpen ? "Close" : "Add Friend"}
        </button>
      </div>
      {selectedFriend && (
        <FormBillSplit selectedFriend={selectedFriend} onBill={handleBill} key={selectedFriend.id} />
      )}
    </div>
  );
}

export interface FormAddFriendProps {
  onAddFriend: (newFriend: Friend) => void;
}
