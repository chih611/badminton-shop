"use client";
export default function YonexRackets({ rackets }: { rackets: any }) {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Yonex Racquets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {rackets.map((racket: any) => (
          <div
            key={racket.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src="https://photos.app.goo.gl/eFYgW283NRxhcrX8A"
              alt={racket.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{racket.name}</h3>
              <p className="text-yellow-600 font-bold">{racket.price}</p>
              <button className="mt-3 w-full bg-yellow-400 text-black py-2 rounded-lg font-medium hover:bg-yellow-300 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
