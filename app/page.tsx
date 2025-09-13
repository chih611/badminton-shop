import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroBanner";
import PromotionBanner from "@/components/PromotionBanner";
import Rackets from "@/components/Rackets";
// import { db } from "@/lib/firebase";
import { getTop3Rackets } from "@/lib/getTop3Rackets";
import { Racket } from "@/types/rackets";

// import { collection, getDocs } from "firebase/firestore";

export default async function HomePage() {
  // const racketsCol = collection(db, "products");
  // const snapshot = await getDocs(racketsCol);

  // const rackets: Racket[] = snapshot.docs.map((doc) => {
  //   const data = doc.data();
  //   return {
  //     id: doc.id,
  //     name: data.name,
  //     category: data.category,
  //     price: data.price,
  //     weight: data.weight,
  //     balance: data.balance,
  //     flex: data.flex,
  //     image: data.image,
  //     description: data.description,
  //   };
  // });
  const rackets: Racket[] = await getTop3Rackets();
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <Rackets rackets={rackets} />

      {/* Categories */}
      <Categories />

      {/* Promo Banner */}
      <PromotionBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}
