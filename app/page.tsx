import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import PromotionBanner from "@/components/PromotionBanner";

export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
     <Hero/>

      {/* Featured Products */}
     <FeaturedProducts/>

      {/* Categories */}
   <Categories/>

      {/* Promo Banner */}
      <PromotionBanner/>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© 2025 Yonex Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
