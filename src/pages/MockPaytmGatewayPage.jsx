import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function MockPaytmGatewayPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const total = location.state?.total || "0.00";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate gateway processing time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSuccess = () => {
    navigate("/checkout-success");
  };

  const handleFailure = () => {
    alert("Payment Failed. Please try again.");
    navigate("/cart");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 text-center">
      {loading ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Connecting to Paytm Gateway...</h2>
          <p className="text-gray-600">Please wait while we process your ₹{total} payment.</p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Gateway</h2>
          <p className="mb-6">You're paying ₹{total} to <strong>Your Fav Shopping Store</strong>.</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleSuccess}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
            Success
            </button>
            <button
              onClick={handleFailure}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
            Failure
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
