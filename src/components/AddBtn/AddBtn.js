import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartItems,
  addCartItems,
  removeCartItems,
} from "../../store/cartSlice";
const AddBtn = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const item = cart.find((item) => item.id === product.id);
  const itemQuantity = item ? item.quantity : 0;
  const handleAddToCart = () => {
    dispatch(setCartItems(product));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeCartItems(product.id));
  };
  const handleIncreaseQuantity = () => {
    dispatch(addCartItems(product.id));
  };
  return (
    <div>
      {itemQuantity === 0 ? (
        <button
          onClick={handleAddToCart}
          className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"
        >
          Add to cart
        </button>
      ) : (
        <div className="flex justify-evenly">
          <button
            onClick={handleRemoveFromCart}
            className="bg-gray-200 px-3 py-1 text-sm text-gray-900 font-extrabold focus:outline-none"
            disabled={itemQuantity < 1}
          >
            -
          </button>
          <div className="px-3 py-1 bg-gray-200 text-sm text-green-600 font-extrabold">
            {itemQuantity}
          </div>
          <button
            onClick={handleIncreaseQuantity}
            className="bg-gray-200 px-3 py-1 text-sm text-green-600 font-bold focus:outline-none"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};
export default AddBtn;
