import { useEffect, useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

const heroProducts = [
  {
    name: "IFEOLUWA Hand Wash",
    image: "/images/handwash.png",
  },
  {
    name: "IFEOLUWA Air Freshener",
    image: "/images/Airfreshner.png",
  },
  {
    name: "IFEOLUWA Izal",
    image: "/images/izal.png",
  },
  {
    name: "IFEOLUWA Dettol",
    image: "/images/dettol.png",
  },
  {
    name: "IFEOLUWA Bar Soap",
    image: "/images/barsoap.png",
  },
  {
    name: "IFEOLUWA Shampoo",
    image: "/images/shampoo.png",
  },
  {
    name: "IFEOLUWA Bleach",
    image: "/images/Bleace.png",
  },
  {
    name: "IFEOLUWA Toilet Cleaner",
    image: "/images/toiletwash.png",
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        current === heroProducts.length - 1 ? 0 : current + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentProduct = heroProducts[currentIndex];

  return (
    <section className="relative overflow-hidden bg-[#faf9f5]">
      {/* Background Decorations */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#a27b35]/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#173d2b]/5 blur-3xl" />

      <div className="relative mx-auto grid min-h-[680px] w-[92%] max-w-[1200px] grid-cols-1 items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* ========================= */}
        {/* LEFT SIDE */}
        {/* ========================= */}

        <div>
          {/* Small Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#173d2b]/10 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#173d2b] shadow-sm">
            <Sparkles size={14} className="text-[#a27b35]" />

            Quality for everyday living
          </div>

          {/* Main Heading */}
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-[#173d2b] sm:text-6xl md:text-7xl">
            Products made for

            <span className="block text-[#a27b35]">
              everyday moments.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-[#69756d] sm:text-lg">
            Discover carefully selected products for cleaning,
            personal care, freshness, comfort, and everyday living
            — all in one place.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {/* Explore Products */}
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#173d2b] px-7 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#a27b35] hover:text-[#173d2b] hover:shadow-xl"
            >
              Explore Products

              <ArrowRight size={18} />
            </Link>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348138241497"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#173d2b]/10 bg-white px-7 py-4 text-sm font-extrabold text-[#173d2b] transition-all duration-300 hover:-translate-y-1 hover:border-[#173d2b]/30 hover:shadow-lg"
            >
              <MessageCircle size={18} />

              Order on WhatsApp
            </a>
          </div>

          {/* Features */}
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-[#173d2b]/10 pt-7">
            {/* Quality */}
            <div>
              <p className="text-xl font-black text-[#173d2b]">
                Quality
              </p>

              <p className="mt-1 text-xs text-[#69756d]">
                Carefully selected
              </p>
            </div>

            {/* Simple */}
            <div className="border-x border-[#173d2b]/10 px-4">
              <p className="text-xl font-black text-[#173d2b]">
                Simple
              </p>

              <p className="mt-1 text-xs text-[#69756d]">
                Easy ordering
              </p>
            </div>

            {/* Direct */}
            <div>
              <p className="text-xl font-black text-[#173d2b]">
                Direct
              </p>

              <p className="mt-1 text-xs text-[#69756d]">
                WhatsApp support
              </p>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* RIGHT SIDE */}
        {/* ROTATING PRODUCTS */}
        {/* ========================= */}

        <div className="relative mx-auto w-full max-w-[520px]">
          {/* Decorative Circle */}
          <div className="absolute -right-5 top-10 h-24 w-24 rounded-full border border-[#a27b35]/20 bg-[#a27b35]/10" />

          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#173d2b]/5" />

          {/* Product Card */}
          <div className="relative overflow-hidden rounded-[40px] border border-[#173d2b]/10 bg-[#173d2b] p-4 shadow-2xl shadow-[#173d2b]/10">
            <div className="relative overflow-hidden rounded-[30px] bg-[#eee9dc]">
              {/* ========================= */}
              {/* PRODUCT IMAGE */}
              {/* ========================= */}

              <div
                key={currentProduct.image}
                className="flex h-[480px] items-center justify-center overflow-hidden sm:h-[560px]"
              >
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="h-full w-full scale-125 object-contain transition-all duration-1000 ease-out"
                />
              </div>

              {/* ========================= */}
              {/* PRODUCT INFORMATION */}
              {/* ========================= */}

              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-[#173d2b]/90 p-5 text-white backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#d6b36b]">
                      IFEOLUWA
                    </p>

                    <p className="mt-1 text-lg font-extrabold">
                      {currentProduct.name}
                    </p>
                  </div>

                  {/* Shopping Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d6b36b] text-[#173d2b]">
                    <ShoppingBag size={19} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================= */}
          {/* QUALITY SELECTION BADGE */}
          {/* ========================= */}

          <div className="absolute -left-5 top-20 hidden rounded-2xl border border-[#173d2b]/10 bg-white px-4 py-3 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#173d2b] text-[#d6b36b]">
                <Sparkles size={16} />
              </span>

              <div>
                <p className="text-xs font-extrabold text-[#173d2b]">
                  Quality Selection
                </p>

                <p className="mt-0.5 text-[10px] text-[#69756d]">
                  For everyday needs
                </p>
              </div>
            </div>
          </div>

          {/* ========================= */}
          {/* PRODUCT INDICATORS */}
          {/* ========================= */}

          <div className="mt-6 flex items-center justify-center gap-2">
            {heroProducts.map((product, index) => (
              <button
                key={product.image}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show ${product.name}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "w-8 bg-[#173d2b]"
                    : "w-2 bg-[#173d2b]/20 hover:bg-[#a27b35]"
                }`}
              />
            ))}
          </div>

          {/* Product Counter */}
          <p className="mt-3 text-center text-[11px] font-bold tracking-[0.15em] text-[#69756d]">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(heroProducts.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;