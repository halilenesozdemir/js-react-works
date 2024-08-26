import { useState } from "react";
import "./App.scss";

export default function App() {
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [friends, setFriends] = useState([]);

  function handleFriendNameChange(e: any) {
    setFriendName(e.target.value);
  }

  function handleImageUrlChange(e: any) {
    setImageUrl(e.target.value);
  }

  function addFriend(newFriend) {
    setFriends((curFriends) => [...curFriends, newFriend]);
    setImageUrl("");
    setFriendName("");
  }

  function handleAddFriend() {
    setIsAddFriendOpen((prev) => !prev);
  }
  return (
    <>
      <FriendList
        onAddFriend={handleAddFriend}
        isAddFriendOpen={isAddFriendOpen}
        imageUrl={imageUrl}
        friendName={friendName}
        friends={friends}
      />
      <AddFriend
        isAddFriendOpen={isAddFriendOpen}
        onFriendNameChange={handleFriendNameChange}
        onHandleImageUrlChange={handleImageUrlChange}
        imageUrl={imageUrl}
        friendName={friendName}
        addFriend={addFriend}
      />
      {/* <Bill /> */}
    </>
  );
}

function FriendList({
  onAddFriend,
  isAddFriendOpen,

  friends,
}: {
  onAddFriend: () => void;
  isAddFriendOpen: boolean;
  friends: { imageUrl: string; friendName: string }[];
}) {
  return (
    <div className="friend-container">
      {friends.map((friend, index) => (
        <Friend
          imgURL={friend.imageUrl}
          name={friend.friendName}
          oweAmount={7}
          key={index}
        />
      ))}
      <button onClick={onAddFriend}>
        {isAddFriendOpen ? "Add Friend" : "Close"}
      </button>
    </div>
  );
}

interface FriendProps {
  imgURL: string;
  name: string;
  oweAmount: number;
}

function Friend({ imgURL, name, oweAmount }: FriendProps) {
  return (
    <div className="friend">
      <img src={imgURL} alt={name} className="friend-img" />
      <div className="friend-info">
        <h3>{name}</h3>
        <p>
          You owe {name} {oweAmount}$
        </p>
      </div>
      <button className="friend-select-btn">Select</button>
    </div>
  );
}

function AddFriend({
  isAddFriendOpen,
  onFriendNameChange,
  onHandleImageUrlChange,
  imageUrl,
  friendName,
  addFriend,
}: {
  isAddFriendOpen: boolean;
  onFriendNameChange: any;
  onHandleImageUrlChange: any;
  imageUrl: any;
  friendName: any;
  addFriend: any;
}) {
  function handleSubmit(e: any) {
    e.preventDefault();
    const newItem = { imageUrl, friendName };
    addFriend(newItem);
    // e.preventDefault();
  }
  return (
    <>
      {isAddFriendOpen ? (
        <form onSubmit={(e: any) => handleSubmit(e)}>
          <div className="add-friend">
            <AddFriendInput onChange={onFriendNameChange} value={friendName}>
              Friend Name
            </AddFriendInput>
            <AddFriendInput onChange={onHandleImageUrlChange} value={imageUrl}>
              Image URL
            </AddFriendInput>
            <button className="add-friend-btn">Add</button>
          </div>
        </form>
      ) : null}
    </>
  );
}

function AddFriendInput({
  children,
  onChange,
  value,
}: {
  children: React.ReactNode;
  onChange: any;
  value: any;
}) {
  return (
    <div>
      <label htmlFor="">{children}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

// function Bill() {}
