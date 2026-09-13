import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <section className="mx-auto w-[92%] max-w-[1200px] py-24">
      {/* PAGE HEADER */}
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="text-xs font-extrabold tracking-[0.2em] text-[#a27b35]">
          OUR COLLECTION
        </span>

        <h1 className="mt-3 text-4xl font-black text-[#173d2b] md:text-5xl">
          All Products
        </h1>

        <p className="mt-4 text-[#69756d]">
          Discover the IFEOLUWA collection of quality cleaning,
          personal-care, and household products.
        </p>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;