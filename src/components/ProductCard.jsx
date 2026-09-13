import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#173d2b]/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#173d2b]/10">
      
      {/* Product Image */}
      <Link
        to={`/products/${product.id}`}
        className="relative block overflow-hidden bg-[#eee9dc]"
      >
        <div className="flex h-[340px] items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition duration-700 group-hover:scale-110"
          />
        </div>

        {/* View Button */}
        <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#173d2b] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight size={20} />
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#a27b35]">
            {product.category}
          </span>

          <span className="rounded-full bg-[#f3f1e9] px-3 py-1 text-[10px] font-bold text-[#69756d]">
            {product.sizes[0]}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#173d2b]">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#69756d]">
          {product.description}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#173d2b] transition-all duration-300 group-hover:gap-3 group-hover:text-[#a27b35]"
        >
          Discover Product
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;