import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/products"
              element={<Products />}
            />

            <Route
              path="/products/:id"
              element={<ProductDetails />}
            />

            <Route
              path="/cart"
              element={<Cart />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="*"
              element={
                <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#faf9f5] px-6 text-center">
                  <span className="text-xs font-extrabold tracking-[0.2em] text-[#a27b35]">
                    IFEOLUWA
                  </span>

                  <h1 className="mt-4 text-7xl font-black text-[#173d2b]">
                    404
                  </h1>

                  <p className="mt-3 text-[#69756d]">
                    The page you're looking for doesn't exist.
                  </p>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;