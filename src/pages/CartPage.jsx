import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../features/cart/cartSlice";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CheckoutModal from "../components/CheckoutModal";
import { useNavigate } from "react-router-dom"

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [showModal, setShowModal] = useState(false);

  const total = cart
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  const handlePayment = () => {
  setShowModal(false);
  setTimeout(() => {
    // Navigate to mock Paytm gateway page with order total as param
    navigate("/paytm-gateway", { state: { total } });
  }, 300);
};

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between bg-white shadow-md rounded-lg mb-4 p-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain border rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">${item.price}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => dispatch(decrementQty(item.id))}
                        className="px-2 py-1 bg-gray-200 text-sm rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="font-medium">{item.qty}</span>
                      <button
                        onClick={() => dispatch(incrementQty(item.id))}
                        className="px-2 py-1 bg-gray-200 text-sm rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Remove
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.div
            key={total}
            className="text-right mt-6 text-xl font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Total: ${total}
          </motion.div>

          <div className="text-right mt-4">
            <button
              className="bg-primary hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded transition"
              onClick={() => setShowModal(true)}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

      <AnimatePresence>
        {showModal && (
          <CheckoutModal
            total={total}
            onClose={() => setShowModal(false)}
            onConfirm={handlePayment}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
