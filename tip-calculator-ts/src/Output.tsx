export function Output({
  myRatio,
  friendRatio,
  bill,
}: {
  myRatio: number;
  friendRatio: number;
  bill: number;
}) {
  const tip = (bill * (myRatio + friendRatio)) / 200;
  return <div>{<h2>{`You pay ${bill + tip}($${bill} + $${tip})`}</h2>}</div>;
}
