export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-[url('/badminton-banner.jpg')] bg-cover bg-center h-[500px] flex items-center justify-center">
        <div className="bg-black/50 p-10 rounded-xl text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Yonex Badminton Shop
          </h1>
          <p className="mb-6 text-lg md:text-xl">
            Premium rackets, shoes, and gear for every level.
          </p>
          <a
            href="/products"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Yonex Astrox 99 Pro", price: "$250", img: "/racket.jpg" },
            { name: "Yonex Power Cushion 65Z", price: "$150", img: "/shoes.jpg" },
            { name: "Yonex BG80 Strings", price: "$20", img: "/strings.jpg" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img src={item.img} alt={item.name} className="w-full h-56 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-yellow-600 font-bold">{item.price}</p>
                <button className="mt-3 w-full bg-yellow-400 text-black py-2 rounded-lg font-medium hover:bg-yellow-300 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-yellow-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {["Rackets", "Shoes", "Accessories"].map((cat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-3">{cat}</h3>
              <p className="text-gray-600 mb-4">
                Explore our wide range of {cat.toLowerCase()}.
              </p>
              <a
                href={`/products/${cat.toLowerCase()}`}
                className="text-yellow-600 font-semibold hover:underline"
              >
                Shop {cat} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="bg-yellow-400 rounded-2xl p-10 shadow-md">
          <h2 className="text-3xl font-bold mb-4">Summer Sale 20% OFF</h2>
          <p className="mb-6 text-lg">
            Get the best deals on rackets and shoes this season.
          </p>
          <a
            href="/sale"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Shop Sale
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© 2025 Yonex Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
