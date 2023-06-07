import React, { useState } from 'react';

const QuantitySelector: React.FC = () => {
  const [qty, setQty] = useState<number>(1);

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const increaseQty = () => {
    setQty(qty + 1);
  };

  return (
      <div className="flex items-center">
        <button
          className="px-2 py-1 rounded-l rounded-global focus:outline-none"
          onClick={decreaseQty}
        >
          -
        </button>
        <input
          className="w-16 px-2 py-1 rounded-r rounded-global text-center"
          type="number"
          min="1"
          value={qty}
          readOnly
        />
        <button
          className="px-2 py-1 rounded-r rounded-global focus:outline-none"
          onClick={increaseQty}
        >
          +
        </button>
      </div>
  );
};

export default QuantitySelector;