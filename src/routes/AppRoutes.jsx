import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage";
import MockPaytmGatewayPage from "../pages/MockPaytmGatewayPage";
// Optional: lazy load some pages
// const ProductDetailPage = React.lazy(() => import('../pages/ProductDetailPage'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
      <Route path="/paytm-gateway" element={<MockPaytmGatewayPage />} />
    </Routes>
  );
}
