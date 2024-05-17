export default function Counter({ numPackedItems, numItems }) {
  return (
    <p>
      <b>{numPackedItems}</b> / {numItems} items packed
    </p>
  );
}
