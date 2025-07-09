interface GenericListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onSelect?: (item: T) => void;
}

function GenericList<T>({ items, renderItem, onSelect }: GenericListProps<T>) {
  return (
    <div className="w-auto bg-white p-6 rounded shadow-lg">
      {items.map((item, idx) => {
        return (
          <div
            key={idx}
            className="cursor-pointer"
            onClick={() => onSelect && onSelect(item)}
          >
            {renderItem(item)}
          </div>
        );
      })}
    </div>
  );
}

export default GenericList;
