import { useState } from "react";
import { Bill } from "./Bill";
import { SelectTipPercentage } from "./SelectTipPercentage";
import { Output } from "./Output";
import { Reset } from "./Reset";

export default function App() {
  const [bill, setBill] = useState<number>(0);
  const [myRatio, setMyRatio] = useState<number>(0);
  const [friendRatio, setFriendRatio] = useState<number>(0);

  function handleBillChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBill(Number(e.target.value));
  }

  function handleRatioChange(
    e: React.ChangeEvent<HTMLSelectElement>,
    setRatio: React.Dispatch<React.SetStateAction<number>>
  ) {
    setRatio(Number(e.target.value));
  }

  function handleReset() {
    setMyRatio(0);
    setFriendRatio(0);
    setBill(0);
  }

  return (
    <div
      style={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <Bill onBillChange={handleBillChange} bill={bill} />
      <SelectTipPercentage
        myRatio={myRatio}
        onRatioChange={(e) => handleRatioChange(e, setMyRatio)}
      >
        How did you like the service
      </SelectTipPercentage>
      <SelectTipPercentage
        friendRatio={friendRatio}
        onRatioChange={(e) => handleRatioChange(e, setFriendRatio)}
      >
        How did your friend like the service
      </SelectTipPercentage>
      {bill > 0 ? (
        <>
          <Output myRatio={myRatio} friendRatio={friendRatio} bill={bill} />
          <Reset onReset={handleReset} />
        </>
      ) : null}
    </div>
  );
}
