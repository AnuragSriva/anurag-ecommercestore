import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="text-center py-24">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-600 hover:underline">Go to Home</Link>
    </div>
  );
}
