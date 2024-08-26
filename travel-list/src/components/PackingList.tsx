import { useState } from "react";
import { PackingListProps, ItemProps } from "../App";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onCheckPacked, onReset }: PackingListProps) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(e.target.value);
  }

  return (
    <div className="packing-list-container">
      <ul style={{ display: "flex", gap: "20px" }}>
        {sortedItems?.map((item: ItemProps) => (
          <Item key={item.id} {...item} onDeleteItem={onDeleteItem} onCheckPacked={onCheckPacked} />
        ))}
      </ul>

      <div className="action">
        <select value={sortBy} onChange={handleSortChange}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onReset}>Clear List</button>
      </div>
    </div>
  );
}
