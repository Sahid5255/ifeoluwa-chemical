import {
  ArrowUpRight,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#102a1e] text-white">
      <div className="mx-auto w-[92%] max-w-[1200px]">
        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] md:py-20">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-black tracking-[0.16em]"
            >
              IFEOLUWA
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#b8c5bd]">
              Quality products for everyday living. Explore our
              collection and order directly through WhatsApp.
            </p>

            <a
              href="https://wa.me/2348138241497"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#d6b36b] px-5 py-3 text-sm font-extrabold text-[#173d2b] transition hover:-translate-y-1 hover:bg-white"
            >
              <MessageCircle size={17} />
              Chat with us
            </a>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#d6b36b]">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-[#b8c5bd] transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="text-sm text-[#b8c5bd] transition hover:text-white"
              >
                Products
              </Link>

              <Link
                to="/about"
                className="text-sm text-[#b8c5bd] transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="text-sm text-[#b8c5bd] transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Shopping */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#d6b36b]">
              Shopping
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/products"
                className="text-sm text-[#b8c5bd] transition hover:text-white"
              >
                Browse Collection
              </Link>

              <Link
                to="/cart"
                className="text-sm text-[#b8c5bd] transition hover:text-white"
              >
                Shopping Cart
              </Link>

              <a
                href="https://wa.me/2348138241497"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#b8c5bd] transition hover:text-white"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          {/* Ordering */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#d6b36b]">
              How It Works
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                  1
                </span>

                <p className="text-sm leading-6 text-[#b8c5bd]">
                  Choose your product and preferred size.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                  2
                </span>

                <p className="text-sm leading-6 text-[#b8c5bd]">
                  Add your items to the cart.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                  3
                </span>

                <p className="text-sm leading-6 text-[#b8c5bd]">
                  Send your order through WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-7 text-xs text-[#8fa198] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} IFEOLUWA. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <ShoppingBag size={14} />
            <span>Quality products for everyday living.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;