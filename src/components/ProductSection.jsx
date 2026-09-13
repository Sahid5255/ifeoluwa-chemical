import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import products from "../data/products";
import ProductCard from "./ProductCard";

const categoryGroups = {
  "Cleaning & Care": [
    "Hand Care",
    "Home Fragrance",
    "Disinfectant",
    "Cleaning",
    "Bathroom Care",
  ],
  "Personal Care": [
    "Personal Care",
    "Hair Care",
  ],
  "Bags & Clothing": [
    "Bags",
    "Clothing",
  ],
};

function ProductSection() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category");
  const groupFromUrl = searchParams.get("group");

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const selectedCategory = categoryFromUrl || "All";
  const selectedGroup = groupFromUrl || "";

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setSearchParams({});
      return;
    }

    setSearchParams({
      category,
    });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSortOption("default");
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Exact category filter
    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Group filter from homepage
    if (selectedGroup) {
      const groupCategories = selectedGroup.split(",");

      result = result.filter((product) =>
        groupCategories.includes(product.category)
      );
    }

    // Search
    if (searchTerm.trim() !== "") {
      const search = searchTerm.toLowerCase().trim();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search) ||
          product.description.toLowerCase().includes(search) ||
          product.benefits?.some((benefit) =>
            benefit.toLowerCase().includes(search)
          )
      );
    }

    // Sorting
    if (sortOption === "name-asc") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sortOption === "name-desc") {
      result.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    if (sortOption === "newest") {
      result.sort((a, b) => b.id - a.id);
    }

    if (sortOption === "oldest") {
      result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [
    searchTerm,
    selectedCategory,
    selectedGroup,
    sortOption,
  ]);

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedCategory !== "All" ||
    selectedGroup !== "" ||
    sortOption !== "default";

  const activeGroupName =
    Object.entries(categoryGroups).find(
      ([, values]) =>
        selectedGroup &&
        values.join(",") === selectedGroup
    )?.[0];

  return (
    <section className="mx-auto w-[92%] max-w-[1200px] py-24">
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="text-xs font-extrabold tracking-[0.2em] text-[#a27b35]">
          OUR COLLECTION
        </span>

        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#173d2b] sm:text-5xl">
          Discover IFEOLUWA
        </h2>

        <p className="mt-5 text-[#69756d]">
          Explore our collection of quality products created for
          everyday cleanliness, freshness, comfort, and care.
        </p>
      </div>

      {/* Search + Sort */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row">
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#69756d]"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-2xl border border-[#173d2b]/10 bg-white py-4 pl-12 pr-12 text-sm text-[#173d2b] outline-none transition focus:border-[#a27b35] focus:ring-2 focus:ring-[#a27b35]/10"
          />

          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#69756d] transition hover:text-[#173d2b]"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div className="relative lg:w-[220px]">
          <SlidersHorizontal
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#69756d]"
          />

          <select
            value={sortOption}
            onChange={(e) =>
              setSortOption(e.target.value)
            }
            className="w-full appearance-none rounded-2xl border border-[#173d2b]/10 bg-white py-4 pl-11 pr-4 text-sm text-[#173d2b] outline-none transition focus:border-[#a27b35] focus:ring-2 focus:ring-[#a27b35]/10"
          >
            <option value="default">
              Sort Products
            </option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="name-asc">
              Name: A–Z
            </option>
            <option value="name-desc">
              Name: Z–A
            </option>
          </select>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-10 overflow-x-auto">
        <div className="flex min-w-max items-center gap-3 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 ${
                selectedCategory === category &&
                !selectedGroup
                  ? "bg-[#173d2b] text-white shadow-lg"
                  : "border border-[#173d2b]/10 bg-white text-[#69756d] hover:border-[#173d2b]/30 hover:text-[#173d2b]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Active group */}
      {selectedGroup && (
        <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-[#a27b35]/20 bg-[#a27b35]/5 px-5 py-4">
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#69756d]">
            Category
          </span>

          <span className="rounded-full bg-[#173d2b] px-4 py-2 text-xs font-bold text-white">
            {activeGroupName || "Selected Collection"}
          </span>

          <button
            type="button"
            onClick={clearFilters}
            className="ml-auto flex items-center gap-1 text-xs font-bold text-[#a27b35] hover:text-[#173d2b]"
          >
            <X size={14} />
            Clear
          </button>
        </div>
      )}

      {/* Result count */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#69756d]">
          Showing{" "}
          <span className="font-bold text-[#173d2b]">
            {filteredProducts.length}
          </span>{" "}
          {filteredProducts.length === 1
            ? "product"
            : "products"}
        </p>

        {hasActiveFilters && !selectedGroup && (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#a27b35] transition hover:text-[#173d2b]"
          >
            <X size={16} />
            Clear filters
          </button>
        )}
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[28px] border border-[#173d2b]/10 bg-[#f8f7f2] px-6 text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#173d2b] text-white">
            <Search size={26} />
          </div>

          <h3 className="text-2xl font-bold text-[#173d2b]">
            No products found
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-[#69756d]">
            We couldn't find a product matching your search
            or selected category.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-full bg-[#173d2b] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#a27b35] hover:text-[#173d2b]"
          >
            View All Products
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductSection;