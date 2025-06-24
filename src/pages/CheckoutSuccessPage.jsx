import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

export default function CheckoutSuccessPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <h2 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h2>
      <p className="text-gray-600 mb-6">
        Your order has been placed successfully. Thank you for shopping with us.
      </p>
      <a
        href="/"
        className="bg-primary text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Back to Home
      </a>
    </div>
  );
}
