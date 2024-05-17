import Button from "./Button";
import { useItemsStore } from "./stores/itemsStore";

export default function ButtonGroup() {
  const items = useItemsStore((state) => state.items);
  const markAllComplete = useItemsStore((state) => state.markAllComplete);
  const markAllIncomplete = useItemsStore((state) => state.markAllIncomplete);
  const resetItems = useItemsStore((state) => state.resetItems);
  const removeItems = useItemsStore((state) => state.removeItems);

  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={markAllComplete}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={markAllIncomplete}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={resetItems}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={removeItems}>
        Remove all items
      </Button>
    </section>
  );
}
