export default function FeaturedProducts() {
    return(<>
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
      </section></>)
}