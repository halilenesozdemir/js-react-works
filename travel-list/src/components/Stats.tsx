import { StatsProps } from "../App";

export function Stats({ items }: StatsProps) {
  if (!items.length) {
    return (
      <footer className="stats-container">
        <em>Start adding some items to your list 😊</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats-container">
      <p>
        <em>
          {percentage === 100
            ? "You got everything! Ready to go 👌"
            : `
          You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)          
          `}
        </em>
      </p>
    </footer>
  );
}
