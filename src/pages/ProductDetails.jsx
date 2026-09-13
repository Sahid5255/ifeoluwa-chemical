import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Minus,
  Plus,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";

import products from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id.toString() === id
  );

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || ""
  );
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#faf9f5] px-6">
        <div className="text-center">
          <span className="text-xs font-extrabold tracking-[0.2em] text-[#a27b35]">
            IFEOLUWA
          </span>

          <h1 className="mt-4 text-5xl font-extrabold text-[#173d2b]">
            Product Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#69756d]">
            Sorry, we couldn't find the product you're looking for.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#173d2b] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#a27b35] hover:text-[#173d2b]"
          >
            <ArrowLeft size={17} />
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);

    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 2500);
  };

  const handleWhatsAppOrder = () => {
    const message = `Hello IFEOLUWA,

I would like to order:

Product: ${product.name}
Category: ${product.category}
Size: ${selectedSize}
Quantity: ${quantity}

Please confirm the price, availability and delivery details.

Thank you.`;

    const whatsappUrl = `https://wa.me/2348138241497?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <main className="bg-[#faf9f5]">

      {/* Added to Cart Notification */}
      {addedToCart && (
        <div className="fixed right-5 top-24 z-[60] flex max-w-[calc(100%-40px)] items-center gap-3 rounded-2xl bg-[#173d2b] px-5 py-4 text-sm font-bold text-white shadow-2xl">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d6b36b] text-[#173d2b]">
            <Check size={15} />
          </span>

          <span>Added to your cart</span>
        </div>
      )}

      {/* Product Section */}
      <section className="mx-auto w-[92%] max-w-[1200px] py-12 md:py-20">

        {/* Back */}
        <Link
          to="/products"
          className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#69756d] transition hover:text-[#173d2b]"
        >
          <ArrowLeft size={17} />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

          {/* Product Image */}
          <div className="relative overflow-hidden rounded-[36px] bg-[#eee9dc]">

            <div className="absolute left-6 top-6 z-10 rounded-full bg-[#173d2b] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#d6b36b]">
              {product.category}
            </div>

            <div className="flex min-h-[420px] items-center justify-center p-10 sm:min-h-[520px] md:min-h-[600px]">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[520px] w-full object-contain transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute bottom-6 left-6 rounded-full bg-white/80 px-4 py-2 text-xs font-bold text-[#173d2b] backdrop-blur">
              Quality everyday product
            </div>
          </div>

          {/* Product Information */}
          <div>

            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#a27b35]">
              {product.category}
            </span>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#173d2b] sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#69756d]">
              {product.description}
            </p>

            <div className="my-8 h-px bg-[#173d2b]/10" />

            {/* Sizes */}
            {product.sizes?.length > 0 && (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-sm font-bold text-[#173d2b]">
                    Select Size
                  </h2>

                  <span className="text-xs text-[#69756d]">
                    {product.sizes.length} options
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-xl border px-5 py-3 text-sm font-bold transition-all duration-300 ${
                        selectedSize === size
                          ? "border-[#173d2b] bg-[#173d2b] text-white shadow-lg"
                          : "border-[#173d2b]/10 bg-white text-[#69756d] hover:border-[#173d2b]/30 hover:text-[#173d2b]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <h2 className="mb-4 text-sm font-bold text-[#173d2b]">
                Quantity
              </h2>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-[#173d2b]/10 bg-white">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="flex h-12 w-12 items-center justify-center text-[#173d2b] transition hover:bg-[#f3f1e9]"
                  aria-label="Decrease quantity"
                >
                  <Minus size={17} />
                </button>

                <span className="flex h-12 min-w-[52px] items-center justify-center border-x border-[#173d2b]/10 text-sm font-bold text-[#173d2b]">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="flex h-12 w-12 items-center justify-center text-[#173d2b] transition hover:bg-[#f3f1e9]"
                  aria-label="Increase quantity"
                >
                  <Plus size={17} />
                </button>
              </div>
            </div>

            {/* Benefits */}
            {product.benefits?.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-4 text-sm font-bold text-[#173d2b]">
                  Product Benefits
                </h2>

                <div className="grid gap-3 sm:grid-cols-2">
                  {product.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 text-sm leading-6 text-[#69756d]"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#173d2b]/10 text-[#173d2b]">
                        <Check size={14} />
                      </span>

                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#173d2b] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#a27b35] hover:text-[#173d2b] hover:shadow-xl"
              >
                <ShoppingBag size={19} />
                {addedToCart ? "Added to Cart" : "Add to Cart"}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="flex items-center justify-center gap-3 rounded-2xl border border-[#173d2b]/10 bg-white px-6 py-4 text-sm font-bold text-[#173d2b] transition-all duration-300 hover:-translate-y-1 hover:border-[#173d2b]/30 hover:shadow-lg"
              >
                <MessageCircle size={19} />
                Order on WhatsApp
              </button>

            </div>

            <Link
              to="/cart"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#173d2b]/10 px-6 py-4 text-sm font-bold text-[#69756d] transition hover:bg-white hover:text-[#173d2b]"
            >
              View Shopping Cart
              <ArrowRight size={17} />
            </Link>

            {/* Ordering Notice */}
            <div className="mt-7 rounded-2xl border border-[#173d2b]/10 bg-white p-5">
              <div className="flex items-start gap-3">
                <MessageCircle
                  size={19}
                  className="mt-0.5 shrink-0 text-[#a27b35]"
                />

                <div>
                  <p className="text-sm font-bold text-[#173d2b]">
                    Simple WhatsApp ordering
                  </p>

                  <p className="mt-1 text-xs leading-6 text-[#69756d]">
                    Select your product and quantity, then send your order
                    directly to us. We'll confirm the price, availability
                    and delivery details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="border-y border-[#173d2b]/10 bg-[#f7f5ee]">
        <div className="mx-auto grid w-[92%] max-w-[1200px] grid-cols-1 gap-8 py-16 md:grid-cols-3">

          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#173d2b] text-[#d6b36b]">
              <Check size={20} />
            </div>

            <h3 className="mt-4 font-bold text-[#173d2b]">
              Quality Products
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#69756d]">
              Products selected for everyday use and convenience.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#173d2b] text-[#d6b36b]">
              <ShoppingBag size={20} />
            </div>

            <h3 className="mt-4 font-bold text-[#173d2b]">
              Easy Ordering
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#69756d]">
              Choose your products and send your order through WhatsApp.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#173d2b] text-[#d6b36b]">
              <MessageCircle size={20} />
            </div>

            <h3 className="mt-4 font-bold text-[#173d2b]">
              Direct Confirmation
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#69756d]">
              We'll discuss pricing, availability and delivery with you.
            </p>
          </div>

        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mx-auto w-[92%] max-w-[1200px] py-20 md:py-24">

          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-extrabold tracking-[0.2em] text-[#a27b35]">
                YOU MAY ALSO LIKE
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-[#173d2b] sm:text-4xl">
                Explore similar products
              </h2>
            </div>

            <Link
              to={`/products?category=${encodeURIComponent(
                product.category
              )}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#173d2b] transition hover:text-[#a27b35]"
            >
              View Collection
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
              />
            ))}
          </div>
        </section>
      )}

    </main>
  );
}

export default ProductDetails;