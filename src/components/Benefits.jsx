import {
  BadgeCheck,
  MessageCircle,
  PackageCheck,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Quality Selection",
    description:
      "We focus on products chosen with everyday usefulness, quality, and convenience in mind.",
  },
  {
    icon: Sparkles,
    title: "Made for Everyday",
    description:
      "From cleaning and personal care to everyday essentials, find products designed for real life.",
  },
  {
    icon: PackageCheck,
    title: "Easy Ordering",
    description:
      "Choose what you need, select your preferred size and quantity, then send your order directly.",
  },
  {
    icon: MessageCircle,
    title: "Direct Support",
    description:
      "Our WhatsApp ordering process makes it easy to confirm availability, pricing, and delivery.",
  },
];

function Benefits() {
  return (
    <section className="bg-[#173d2b] py-24 text-white">
      <div className="mx-auto w-[92%] max-w-[1200px]">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-extrabold tracking-[0.2em] text-[#d6b36b]">
            WHY IFEOLUWA
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Simple shopping.
            <span className="block text-[#d6b36b]">
              Better everyday living.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#b8c5bd] sm:text-base">
            We keep the experience simple — quality products, easy
            selection, and direct communication when you're ready to order.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d6b36b] text-[#173d2b] transition-transform duration-500 group-hover:scale-110">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#b8c5bd]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Benefits;