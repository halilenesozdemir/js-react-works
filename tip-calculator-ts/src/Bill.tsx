export function Bill({
  onBillChange,
  bill,
}: {
  onBillChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bill: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
      }}
    >
      <label htmlFor="id">How much was the bill</label>
      <input type="number" onChange={onBillChange} value={bill} id="bill" />
    </div>
  );
}
