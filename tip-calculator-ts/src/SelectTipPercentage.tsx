export function SelectTipPercentage({
  myRatio,
  friendRatio,
  onRatioChange,
  children,
}: {
  myRatio?: number;
  friendRatio?: number;
  onRatioChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
      }}
    >
      <label>{children}</label>
      <select
        style={{ width: "130px" }}
        value={myRatio ?? friendRatio}
        onChange={onRatioChange}
      >
        <option value={0}>0%</option>
        <option value={10}>10%</option>
        <option value={20}>20%</option>
      </select>
    </div>
  );
}
