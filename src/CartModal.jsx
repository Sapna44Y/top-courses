// import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart, closeModel, clearCart } from "./cartSlice";
import { toast } from "react-toastify";

const CartModel = () => {
  const dispatch = useDispatch();
  const { items, total, isModelOpen } = useSelector((state) => state.cart);

  function helper() {
    dispatch(closeModel());
  }
  function helper2(id) {
    dispatch(removeFromCart(id));
    toast.info("Item is remove");
  }
  function helper3() {
    dispatch(closeModel());
    dispatch(clearCart());
    toast.success("cart Checkout");
  }
  if (!isModelOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white p-4 rounded shadow-md max-w-md w-full relative">
        <button
          onClick={helper}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">Cart Details</h2>
        {items.length === 0 ? (
          <p>Cart Is Empty</p>
        ) : (
          <>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <span>{item.title}</span>
                <span>{item.price}</span>
                <button
                  onClick={() => helper2(item.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4">
              <p className="font-bold">Total price is Rs. {total}</p>
              <button
                onClick={helper3}
                className="mt-2 bg-green-500 text-white py-2 px-4 rounded mr-2"
              >
                CheckOut
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default CartModel;
