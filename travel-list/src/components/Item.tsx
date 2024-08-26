import { ItemProps } from "../App";

export function Item({
  description,
  quantity,
  packed,
  id,
  onDeleteItem,
  onCheckPacked,
}: ItemProps) {
  return (
    <li style={{ listStyle: "none", display: "flex", gap: "5px", fontSize: "20px", color: "#ddd" }}>
      <input type="checkbox" checked={packed} onChange={() => onCheckPacked?.(id)} />
      <div
        style={{ display: "flex", gap: "3px", textDecoration: packed ? "line-through" : "none" }}
      >
        <span>{quantity}</span>
        <span> {description}</span>
      </div>

      <button
        onClick={() => onDeleteItem?.(id)}
        style={{
          border: "none",
          backgroundColor: "inherit",
          fontSize: "20px",
          color: "red",
          cursor: "pointer",
        }}
      >
        &times;
      </button>
    </li>
  );
}
