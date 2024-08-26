import { useState } from "react";
import { FormAddFriendProps } from "./App";

export function FormAddFriend({ onAddFriend }: FormAddFriendProps) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!name || !imageUrl) {
      return;
    }
    const newFriend = { id: crypto.randomUUID(), name, imageUrl, balance: 0 };
    onAddFriend(newFriend);
    setName("");
    setImageUrl("");
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginLeft: "10px",
      }}
      onSubmit={handleSubmit}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <label htmlFor="friendName">Friend Name</label>
        <input
          type="text"
          id="friendName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button type="submit" style={{ width: "200px" }}>
        Add
      </button>
    </form>
  );
}
