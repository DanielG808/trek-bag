import Logo from "./Logo";
import Counter from "./Counter";
import { useItemsStore } from "./stores/itemsStore";

export default function Header() {
  const items = useItemsStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        numPackedItems={items.filter((item) => item.packed).length}
        numItems={items.length}
      />
    </header>
  );
}
