import { useState } from 'react';
import GenericList from './GenericList';

enum ProductType {
  GROCERY = 'GROCERY',
  ELECTRONIC = 'ELECTRONIC',
}

type Product = {
  id: number;
  name: string;
  stock: number;
  type: ProductType;
};

enum Hobbies {
  BASKETBALL = 'BASKETBALL',
  FOOTBALL = 'FOOTBALL',
  SOCCER = 'SOCCER',
  CRICKET = 'CRICKET',
  TENNIS = 'TENNIS',
}

type Users = {
  id: number;
  name: string;
  email: string;
  hobbies: Hobbies[];
};

function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const items: Product[] = [
    {
      id: 1,
      name: 'Tomatoes',
      stock: 99,
      type: ProductType.GROCERY,
    },
    {
      id: 2,
      name: 'Lemons',
      stock: 20,
      type: ProductType.GROCERY,
    },
    {
      id: 3,
      name: 'Cables',
      stock: 10,
      type: ProductType.ELECTRONIC,
    },
  ];

  function renderItem(item: Product): React.ReactNode {
    return (
      <div className="flex flex-col  items-center w-full gap-2">
        <p>{item.name}</p>
        <p>{item.stock}</p>
      </div>
    );
  }

  function onSelectItem(item: Product): void {
    setSelectedProduct(item);
  }

  return (
    <div className="size-full p-2 flex flex-col items-center justify-center bg-red-100 gap-2">
      {selectedProduct && (
        <div className="w-full bg-gray-300 flex justify-center rounded shadow-md">
          <p className="text-bold">{selectedProduct.name}</p>
        </div>
      )}

      <div className="w-full">
        <GenericList
          items={items}
          renderItem={renderItem}
          onSelect={onSelectItem}
        />
      </div>
    </div>
  );
}

function UserList() {
  const items: Users[] = [
    {
      id: 1,
      name: 'Tommy Hunz',
      email: 'tman1235@gmail.com',
      hobbies: [Hobbies.BASKETBALL, Hobbies.SOCCER],
    },
    {
      id: 2,
      name: 'Geno Hurts',
      email: 'gman1245@gmail.com',
      hobbies: [Hobbies.TENNIS, Hobbies.CRICKET, Hobbies.FOOTBALL],
    },
  ];

  function renderItem(item: Users): React.ReactNode {
    return (
      <div className="flex flex-col  items-center w-full gap-2">
        <p>{item.name}</p>
        <p>{item.email}</p>
        <div className="flex items-center justify-center border rounded p-4 gap-1">
          <p>Hobbies:</p>
          {item.hobbies.map((hobby, idx) => (
            <p>
              {hobby}
              {idx === item.hobbies.length - 1 ? null : ','}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="size-full flex flex-col items-center justify-center bg-blue-100 gap-2">
      <GenericList items={items} renderItem={renderItem} />
    </div>
  );
}

export function App() {
  return (
    <div className="h-screen w-screen flex flex-row">
      <ProductList />
      <UserList />
    </div>
  );
}
