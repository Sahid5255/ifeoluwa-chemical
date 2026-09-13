import {
  ArrowUpRight,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5ee] py-24">
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#a27b35]/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#173d2b]/5 blur-3xl" />

      <div className="relative mx-auto w-[92%] max-w-[1050px]">
        <div className="overflow-hidden rounded-[38px] bg-[#173d2b] px-7 py-14 text-center shadow-2xl shadow-[#173d2b]/10 sm:px-12 md:py-20">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d6b36b] text-[#173d2b]">
            <ShoppingBag size={27} />
          </div>

          <span className="mt-7 block text-xs font-extrabold tracking-[0.2em] text-[#d6b36b]">
            YOUR NEXT EVERYDAY ESSENTIAL
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Find something you’ll love using every day.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#b8c5bd] sm:text-base">
            Browse the collection, choose your preferred product, size and
            quantity, then send your order directly to us on WhatsApp.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#d6b36b] px-7 py-4 text-sm font-extrabold text-[#173d2b] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              Browse Products
              <ArrowUpRight size={18} />
            </Link>

            <a
              href="https://wa.me/2348138241497"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#173d2b]"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-7 text-xs text-[#8fa198]">
            Pricing is confirmed directly after you place your order.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTA;