import { useState } from "react";
import "./index.css";
import { Logo } from "@components/Logo";
import { Form } from "@components/Form";
import { PackingList } from "../src/components/PackingList";
import { Stats } from "../src/components/Stats";

export interface ItemProps {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
  onDeleteItem?: (id: number) => void;
  onCheckPacked?: (id: number) => void;
}

export interface PackingListProps {
  items: ItemProps[];
  onDeleteItem: (id: number) => void;
  onCheckPacked: (id: number) => void;
  onReset?: () => void;
}

export interface FormProps {
  onAddItems: (newItem: ItemProps) => void;
}

export interface StatsProps extends Omit<PackingListProps, "onDeleteItem" | "onCheckPacked"> {}

export default function App() {
  const [items, setItems] = useState<ItemProps[]>([]);

  function handleAddItems(newItem: ItemProps) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItem(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleCheckPacked(id: number) {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  }

  function handleReset() {
    const confirmed = window.confirm("Are you sure you want to delete all items");
    if (confirmed) {
      setItems([]);
    }
  }
  return (
    <div className="app-container">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckPacked={handleCheckPacked}
        onReset={handleReset}
      />
      <Stats items={items} />
    </div>
  );
}
