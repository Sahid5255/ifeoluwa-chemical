import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    cartCount,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  // ================================
  // WHATSAPP CHECKOUT
  // ================================
  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    const orderDetails = cartItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name}
Size: ${item.selectedSize}
Quantity: ${item.quantity}`
      )
      .join("\n\n");

    const message = `Hello IFEOLUWA 👋

I would like to place an order.

🛒 MY ORDER

${orderDetails}

Total Items: ${cartCount}

Please confirm the price, availability, and delivery details.

Thank you.`;

    const whatsappUrl = `https://wa.me/2348138241497?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  // ================================
  // EMPTY CART
  // ================================
  if (cartItems.length === 0) {
    return (
      <main className="min-h-[75vh] bg-[#faf9f5]">
        <div className="mx-auto flex min-h-[75vh] w-[92%] max-w-[700px] flex-col items-center justify-center px-4 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#173d2b] text-[#d6b36b]">
            <ShoppingBag size={38} />
          </div>

          <span className="mt-8 text-xs font-extrabold tracking-[0.2em] text-[#a27b35]">
            YOUR CART
          </span>

          <h1 className="mt-3 text-4xl font-extrabold text-[#173d2b] sm:text-5xl">
            Your cart is empty
          </h1>

          <p className="mt-4 max-w-md text-sm leading-7 text-[#69756d]">
            Explore our collection and discover products selected for everyday
            living.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#173d2b] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#a27b35] hover:text-[#173d2b]"
          >
            Explore Products
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </main>
    );
  }

  // ================================
  // CART
  // ================================
  return (
    <main className="bg-[#faf9f5] py-14 md:py-24">
      <div className="mx-auto w-[92%] max-w-[1200px]">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#69756d] transition hover:text-[#173d2b]"
          >
            <ArrowLeft size={17} />
            Continue Shopping
          </Link>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-extrabold tracking-[0.2em] text-[#a27b35]">
                YOUR SELECTION
              </span>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#173d2b] sm:text-5xl">
                Shopping Cart
              </h1>
            </div>

            <div className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#173d2b]">
              {cartCount} {cartCount === 1 ? "item" : "items"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
          {/* ================================
              CART ITEMS
          ================================= */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <article
                key={`${item.id}-${item.selectedSize}`}
                className="rounded-[28px] border border-[#173d2b]/10 bg-white p-5 transition hover:shadow-lg sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row">
                  {/* Product Image */}
                  <Link
                    to={`/products/${item.id}`}
                    className="flex h-40 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#eee9dc] sm:h-32 sm:w-32"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain p-4 transition duration-500 hover:scale-105"
                    />
                  </Link>

                  {/* Product Information */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#a27b35]">
                          {item.category}
                        </span>

                        <h2 className="mt-2 text-xl font-bold text-[#173d2b]">
                          {item.name}
                        </h2>

                        <p className="mt-2 text-sm text-[#69756d]">
                          Size:{" "}
                          <span className="font-bold text-[#173d2b]">
                            {item.selectedSize}
                          </span>
                        </p>
                      </div>

                      {/* Remove Product */}
                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.id, item.selectedSize)
                        }
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#69756d] transition hover:bg-red-50 hover:text-red-500"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center overflow-hidden rounded-xl border border-[#173d2b]/10">
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(item.id, item.selectedSize)
                          }
                          className="flex h-10 w-10 items-center justify-center text-[#173d2b] transition hover:bg-[#f3f1e9]"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={15} />
                        </button>

                        <span className="flex h-10 min-w-[45px] items-center justify-center border-x border-[#173d2b]/10 text-sm font-bold text-[#173d2b]">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(item.id, item.selectedSize)
                          }
                          className="flex h-10 w-10 items-center justify-center text-[#173d2b] transition hover:bg-[#f3f1e9]"
                          aria-label="Increase quantity"
                        >
                          <Plus size={15} />
                        </button>
                      </div>

                      <Link
                        to={`/products/${item.id}`}
                        className="hidden items-center gap-1 text-xs font-bold text-[#69756d] transition hover:text-[#a27b35] sm:flex"
                      >
                        View Product
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Clear Cart */}
            <button
              type="button"
              onClick={clearCart}
              className="pt-2 text-sm font-bold text-red-500 transition hover:text-red-700"
            >
              Clear Cart
            </button>

            {/* ================================
                MOBILE QUICK CHECKOUT
            ================================= */}
            <div className="mt-6 rounded-[24px] border border-[#173d2b]/10 bg-white p-5 shadow-sm sm:hidden">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#173d2b]/10 text-[#173d2b]">
                  <ShoppingBag size={20} />
                </div>

                <h3 className="text-base font-extrabold text-[#173d2b]">
                  Finished selecting your products?
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-[#69756d]">
                  You have{" "}
                  <span className="font-bold text-[#173d2b]">
                    {cartCount} {cartCount === 1 ? "item" : "items"}
                  </span>{" "}
                  ready. Continue to WhatsApp to complete your order.
                </p>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#173d2b] px-5 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#a27b35] hover:text-[#173d2b]"
              >
                Proceed to Checkout
                <ArrowUpRight size={17} />
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-medium text-[#69756d]">
                <MessageCircle size={14} />
                Complete your order through WhatsApp
              </div>
            </div>
          </div>

          {/* ================================
              ORDER SUMMARY
          ================================= */}
          <aside className="h-fit rounded-[30px] bg-[#173d2b] p-7 text-white lg:sticky lg:top-24">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#d6b36b]">
              ORDER WITH IFEOLUWA
            </span>

            <h2 className="mt-4 text-3xl font-extrabold">
              Ready to order?
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#b8c5bd]">
              Your selected products will be sent directly to IFEOLUWA on
              WhatsApp. We'll confirm the price, availability, and delivery
              details with you.
            </p>

            <div className="my-7 h-px bg-white/10" />

            {/* Selected Items */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#b8c5bd]">
                Selected items
              </span>

              <span className="font-extrabold">{cartCount}</span>
            </div>

            {/* Main Checkout Button */}
            <button
              type="button"
              onClick={handleWhatsAppCheckout}
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#d6b36b] px-5 py-4 text-sm font-extrabold text-[#173d2b] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <MessageCircle size={19} />
              Checkout on WhatsApp
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[#8fa198]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d6b36b]" />
              Price confirmed after ordering
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Cart;