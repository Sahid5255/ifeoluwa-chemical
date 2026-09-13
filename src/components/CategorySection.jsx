import { Link } from "react-router-dom";
import {
  Sparkles,
  ShoppingBag,
  Shirt,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    name: "Cleaning & Care",
    description:
      "Quality products designed to keep your home, workspace, and everyday environment fresh and clean.",
    icon: Sparkles,
    filters: [
      "Hand Care",
      "Home Fragrance",
      "Disinfectant",
      "Cleaning",
      "Bathroom Care",
    ],
  },
  {
    name: "Personal Care",
    description:
      "Everyday personal care essentials selected to make your daily routine simple and refreshing.",
    icon: ShoppingBag,
    filters: ["Personal Care", "Hair Care"],
  },
  {
    name: "Bags & Clothing",
    description:
      "Practical bags and stylish clothing pieces selected for comfort, convenience, and everyday use.",
    icon: Shirt,
    filters: ["Bags", "Clothing"],
  },
];

function CategorySection() {
  return (
    <section className="bg-[#f7f5ee] py-24">
      <div className="mx-auto w-[92%] max-w-[1200px]">
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#a27b35]">
              SHOP BY CATEGORY
            </span>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#173d2b] sm:text-5xl">
              Find what you need
              <br />
              <span className="text-[#a27b35]">
                for everyday living.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#69756d]">
            Explore our growing collection of products carefully selected
            around the things you use, enjoy, and need every day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            const categoryQuery = encodeURIComponent(
              category.filters.join(",")
            );

            return (
              <Link
                key={category.name}
                to={`/products?group=${categoryQuery}`}
                className="group relative min-h-[340px] overflow-hidden rounded-[30px] border border-[#173d2b]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#173d2b]/10"
              >
                <span className="absolute right-7 top-5 text-7xl font-black text-[#173d2b]/5">
                  0{index + 1}
                </span>

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#173d2b] text-[#d6b36b] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#a27b35] group-hover:text-[#173d2b]">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <div className="relative mt-16">
                  <h3 className="text-2xl font-bold text-[#173d2b]">
                    {category.name}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-[#69756d]">
                    {category.description}
                  </p>
                </div>

                <div className="absolute bottom-8 left-8 flex items-center gap-2 text-sm font-bold text-[#173d2b] transition-all duration-300 group-hover:gap-3 group-hover:text-[#a27b35]">
                  Explore Collection
                  <ArrowUpRight size={17} />
                </div>

                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#a27b35]/5 transition-all duration-500 group-hover:scale-150" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;