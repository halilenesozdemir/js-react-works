export function Reset({ onReset }: { onReset: () => void }) {
  return (
    <button type="reset" style={{ width: "70px" }} onClick={onReset}>
      Reset
    </button>
  );
}
