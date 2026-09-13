import {
  ArrowRight,
  Check,
  Heart,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="bg-[#faf9f5]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#173d2b] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#a27b35]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#d6b36b]/10 blur-3xl" />

        <div className="relative mx-auto w-[92%] max-w-[1200px] py-24 md:py-32">
          <span className="text-xs font-extrabold tracking-[0.2em] text-[#d6b36b]">
            ABOUT IFEOLUWA
          </span>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Everyday products.
            <span className="block text-[#d6b36b]">
              Thoughtfully selected.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-[#b8c5bd] sm:text-base">
            IFEOLUWA brings together practical, quality products designed
            to make everyday living easier, fresher, more comfortable,
            and more stylish.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto w-[92%] max-w-[1200px] py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#a27b35]">
              OUR STORY
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#173d2b] sm:text-5xl">
              Built around
              <span className="block text-[#a27b35]">
                everyday needs.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#69756d]">
              IFEOLUWA is focused on bringing useful products together
              in one simple shopping experience. From cleaning and
              personal care products to bags and clothing, our collection
              is selected with everyday customers in mind.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#69756d]">
              We believe shopping should be simple. Find what you need,
              choose the quantity that works for you, and contact us
              directly to complete your order.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#173d2b] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#a27b35] hover:text-[#173d2b]"
            >
              Explore Products
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[36px] bg-[#eee9dc] p-8 sm:p-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#a27b35]/10" />

            <div className="relative grid gap-4 sm:grid-cols-2">

              <div className="rounded-[28px] bg-[#173d2b] p-7 text-white sm:translate-y-8">
                <Sparkles
                  size={27}
                  className="text-[#d6b36b]"
                />

                <h3 className="mt-8 text-xl font-bold">
                  Quality
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#b8c5bd]">
                  Products selected with practicality and everyday use
                  in mind.
                </p>
              </div>

              <div className="rounded-[28px] bg-white p-7 shadow-sm">
                <Heart
                  size={27}
                  className="text-[#a27b35]"
                />

                <h3 className="mt-8 text-xl font-bold text-[#173d2b]">
                  Care
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#69756d]">
                  A shopping experience designed around our customers.
                </p>
              </div>

              <div className="rounded-[28px] bg-white p-7 shadow-sm">
                <ShoppingBag
                  size={27}
                  className="text-[#173d2b]"
                />

                <h3 className="mt-8 text-xl font-bold text-[#173d2b]">
                  Variety
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#69756d]">
                  Different product categories brought together in one
                  place.
                </p>
              </div>

              <div className="rounded-[28px] bg-[#a27b35] p-7 text-[#173d2b] sm:translate-y-8">
                <Check size={27} />

                <h3 className="mt-8 text-xl font-bold">
                  Simplicity
                </h3>

                <p className="mt-3 text-sm leading-6">
                  Simple ordering directly through WhatsApp.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f7f5ee]">
        <div className="mx-auto w-[92%] max-w-[1200px] py-20 md:py-24">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#a27b35]">
              WHAT MATTERS TO US
            </span>

            <h2 className="mt-4 text-4xl font-extrabold text-[#173d2b]">
              Simple values. Better experience.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#69756d]">
              Everything we do is centered around making everyday
              shopping straightforward and enjoyable.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">

            <div className="rounded-[28px] bg-white p-8">
              <span className="text-4xl font-black text-[#173d2b]/10">
                01
              </span>

              <h3 className="mt-8 text-xl font-bold text-[#173d2b]">
                Quality First
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#69756d]">
                We aim to provide products that are useful, practical,
                and suitable for everyday needs.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-8">
              <span className="text-4xl font-black text-[#173d2b]/10">
                02
              </span>

              <h3 className="mt-8 text-xl font-bold text-[#173d2b]">
                Customer Focused
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#69756d]">
                We keep ordering simple and make it easy to speak with
                us directly.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-8">
              <span className="text-4xl font-black text-[#173d2b]/10">
                03
              </span>

              <h3 className="mt-8 text-xl font-bold text-[#173d2b]">
                Everyday Value
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#69756d]">
                Our collection is built around products people can
                actually use in their everyday lives.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-[92%] max-w-[1000px] py-20 text-center md:py-28">

        <span className="text-xs font-extrabold tracking-[0.2em] text-[#a27b35]">
          DISCOVER IFEOLUWA
        </span>

        <h2 className="mt-4 text-4xl font-extrabold text-[#173d2b] sm:text-5xl">
          Find something for everyday living.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#69756d]">
          Explore our collection and send your selected products to us
          directly through WhatsApp.
        </p>

        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#173d2b] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#a27b35] hover:text-[#173d2b]"
        >
          Shop the Collection
          <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}

export default About;