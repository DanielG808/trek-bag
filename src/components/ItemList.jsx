import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useItemsContext } from "../hooks";
import { useItemsStore } from "./stores/itemsStore";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const items = useItemsStore((state) => state.items);
  const handleToggleItem = useItemsStore((state) => state.handleToggleItem);
  const handleRemoveItem = useItemsStore((state) => state.handleRemoveItem);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleToggleItem={handleToggleItem}
            handleRemoveItem={handleRemoveItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, handleToggleItem, handleRemoveItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>
      <button onClick={() => handleRemoveItem(item.id)}>❌</button>
    </li>
  );
}
