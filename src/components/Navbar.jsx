import {
  Menu,
  X,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import { useCart } from "../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#173d2b]/10 bg-[#faf9f5]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[78px] w-[92%] max-w-[1200px] items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center"
          aria-label="Ifeoluwa Home"
        >
          <img
            src="/images/logo.png"
            alt="Ifeoluwa"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-2 text-sm font-bold transition ${
                isActive(link.path)
                  ? "text-[#a27b35]"
                  : "text-[#34443a] hover:text-[#a27b35]"
              }`}
            >
              {link.name}

              {isActive(link.path) && (
                <span className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[#a27b35]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#173d2b]/10 bg-white text-[#173d2b] transition hover:-translate-y-0.5 hover:border-[#a27b35]/40 hover:text-[#a27b35]"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <ShoppingBag size={19} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#a27b35] px-1 text-[10px] font-black text-[#173d2b]">
                {cartCount}
              </span>
            )}
          </Link>

          <a
            href="https://wa.me/2348138241497"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#173d2b] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#a27b35] hover:text-[#173d2b]"
          >
            <MessageCircle size={17} />
            Order Now
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            to="/cart"
            onClick={closeMenu}
            className="relative text-[#173d2b]"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <ShoppingBag size={24} />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#a27b35] px-1 text-[10px] font-black text-[#173d2b]">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            className="text-[#173d2b]"
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
          >
            {menuOpen ? (
              <X size={27} />
            ) : (
              <Menu size={27} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#173d2b]/10 bg-[#faf9f5] md:hidden">
          <nav className="mx-auto flex w-[92%] flex-col gap-2 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`rounded-xl px-4 py-3 font-bold transition ${
                  isActive(link.path)
                    ? "bg-[#173d2b] text-white"
                    : "text-[#34443a] hover:bg-white hover:text-[#a27b35]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/cart"
              onClick={closeMenu}
              className="mt-1 flex items-center justify-between rounded-xl border border-[#173d2b]/10 bg-white px-4 py-3 font-bold text-[#173d2b]"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag size={18} />
                Shopping Cart
              </span>

              <span className="rounded-full bg-[#173d2b] px-2 py-1 text-[10px] text-white">
                {cartCount}
              </span>
            </Link>

            <a
              href="https://wa.me/2348138241497"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#173d2b] px-5 py-4 font-bold text-white transition hover:bg-[#a27b35] hover:text-[#173d2b]"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;