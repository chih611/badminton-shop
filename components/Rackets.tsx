import { Racket } from "@/types/rackets";
import Image from "next/image";

export default async function Rackets({ rackets }: { rackets: Racket[] }) {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold mb-8">Yonex Racquets</h2>
        <a
          href="/products"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          See more
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {rackets.map((racket: Racket) => (
          <div
            key={racket.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <Image
              src="/images/rackets/astrox-100zz.jpg"
              alt={racket.name}
              width={400}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{racket.name}</h3>
              <p className="text-yellow-600 font-bold">{racket.price}</p>
              <button className="mt-3 w-full bg-yellow-400 text-black py-2 rounded-lg font-medium hover:bg-yellow-300 transition">
                Add to Cart to buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
