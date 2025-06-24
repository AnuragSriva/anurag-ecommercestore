import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-2" />
      <h2 className="text-md font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-600 mb-2">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="btn w-full"
      >
        Add to Cart
      </button>
    </motion.div>
  );
}
