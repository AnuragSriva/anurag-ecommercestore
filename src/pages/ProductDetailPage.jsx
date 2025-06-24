import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import axios from "axios";

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `/products/${id}`
      );
      setProduct(res.data);
    } catch (err) {
      console.error("Error fetching product:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-12">Loading product...</div>;
  }

  if (!product) {
    return <div className="text-center mt-12 text-red-500">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain bg-white p-4 rounded shadow"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="text-2xl font-semibold text-primary mb-6">${product.price}</div>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-primary hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
