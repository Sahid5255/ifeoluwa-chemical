import {
  ArrowUpRight,
  Clock,
  Mail,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="bg-[#faf9f5]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#173d2b] text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#a27b35]/20 blur-3xl" />

        <div className="relative mx-auto w-[92%] max-w-[1200px] py-20 md:py-28">
          <span className="text-xs font-extrabold tracking-[0.2em] text-[#d6b36b]">
            CONTACT IFEOLUWA
          </span>

          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            Let's make your
            <span className="block text-[#d6b36b]">
              order simple.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#b8c5bd] sm:text-base">
            Have a question about a product, size, availability, or
            delivery? Reach out to us directly and we'll be happy to
            help.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="mx-auto w-[92%] max-w-[1200px] py-20 md:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <a
            href="https://wa.me/2348138241497"
            target="_blank"
            rel="noreferrer"
            className="group rounded-[30px] bg-[#173d2b] p-8 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#173d2b]/15"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d6b36b] text-[#173d2b] transition-transform duration-500 group-hover:scale-110">
              <MessageCircle size={25} />
            </div>

            <div className="mt-8 flex items-end justify-between gap-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#d6b36b]">
                  Fastest Response
                </span>

                <h2 className="mt-2 text-2xl font-extrabold">
                  WhatsApp
                </h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-[#b8c5bd]">
                  Message us directly about products, orders,
                  availability, pricing, and delivery.
                </p>
              </div>

              <ArrowUpRight
                size={23}
                className="shrink-0 text-[#d6b36b]"
              />
            </div>
          </a>

          <div className="rounded-[30px] border border-[#173d2b]/10 bg-white p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3f1e9] text-[#173d2b]">
              <Mail size={25} />
            </div>

            <span className="mt-8 block text-xs font-bold uppercase tracking-[0.15em] text-[#a27b35]">
              Email
            </span>

            <h2 className="mt-2 text-2xl font-extrabold text-[#173d2b]">
              Prefer email?
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#69756d]">
              Our email contact will be available here once the
              official IFEOLUWA business email is added.
            </p>

            <div className="mt-6 rounded-2xl bg-[#f7f5ee] p-4 text-sm font-bold text-[#69756d]">
              Official email coming soon
            </div>
          </div>
        </div>
      </section>

      {/* Ordering process */}
      <section className="border-y border-[#173d2b]/10 bg-[#f7f5ee]">
        <div className="mx-auto w-[92%] max-w-[1200px] py-20 md:py-24">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#a27b35]">
              ORDERING MADE SIMPLE
            </span>

            <h2 className="mt-4 text-4xl font-extrabold text-[#173d2b] sm:text-5xl">
              Three simple steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-[28px] bg-white p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#173d2b] text-sm font-black text-[#d6b36b]">
                01
              </span>

              <h3 className="mt-7 text-xl font-bold text-[#173d2b]">
                Choose
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#69756d]">
                Browse our collection and choose the products and
                sizes you need.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#173d2b] text-sm font-black text-[#d6b36b]">
                02
              </span>

              <h3 className="mt-7 text-xl font-bold text-[#173d2b]">
                Order
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#69756d]">
                Add your products to your cart and send the order
                directly through WhatsApp.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#173d2b] text-sm font-black text-[#d6b36b]">
                03
              </span>

              <h3 className="mt-7 text-xl font-bold text-[#173d2b]">
                Confirm
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#69756d]">
                We'll confirm the price, availability, and delivery
                details with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="mx-auto w-[92%] max-w-[900px] py-20 text-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#173d2b]/10 bg-white p-6">
            <Clock
              size={22}
              className="mx-auto text-[#a27b35]"
            />

            <h3 className="mt-4 font-bold text-[#173d2b]">
              Direct Communication
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#69756d]">
              Contact us through WhatsApp whenever you need help
              with your order.
            </p>
          </div>

          <div className="rounded-2xl border border-[#173d2b]/10 bg-white p-6">
            <ShoppingBag
              size={22}
              className="mx-auto text-[#a27b35]"
            />

            <h3 className="mt-4 font-bold text-[#173d2b]">
              Browse Before Ordering
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#69756d]">
              Explore products and choose exactly what you want
              before contacting us.
            </p>
          </div>
        </div>

        <Link
          to="/products"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#173d2b] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#a27b35] hover:text-[#173d2b]"
        >
          Browse Products
          <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}

export default Contact;