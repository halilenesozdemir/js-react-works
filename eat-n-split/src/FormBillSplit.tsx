import { useState } from "react";
import { FormBillSplitProps } from "./App";

export function FormBillSplit({ selectedFriend, onBill }: FormBillSplitProps) {
  const [bill, setBill] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [whoPay, setWhoPay] = useState("user");
  const paidByFriend = bill - myExpense;

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const balance =
      whoPay === "user" ? Number(paidByFriend) : Number(-myExpense);
    onBill(balance);
    setBill(0);
    setMyExpense(0);
    setWhoPay("user");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h2>SPLIT A BILL WITH {selectedFriend?.name}</h2>
      <div>
        <label htmlFor="bill">Bill Value</label>
        <input
          id="bill"
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="myExpense">Your Expense</label>
        <input
          id="myExpense"
          type="text"
          value={myExpense}
          onChange={(e) => setMyExpense(Number(e.target.value))}
        />
      </div>
      <div>
        <label>{selectedFriend?.name}'s expense</label>
        <input type="text" value={paidByFriend} disabled />
      </div>
      <div>
        <label htmlFor="whoPay">Who is paying the bill</label>
        <select
          id="whoPay"
          value={whoPay}
          onChange={(e) => setWhoPay(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend?.name}</option>
        </select>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Split Bill
      </button>
    </div>
  );
}
