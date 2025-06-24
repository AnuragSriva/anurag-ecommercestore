import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector(state => state.cart);

  return (
    <nav className="bg-primary text-white px-6 py-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">🛍️ MyStore</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cart" className="hover:underline">
          Cart ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
}
