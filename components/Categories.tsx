export default function Categories(){
    return(<>
    
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
      </section></>)
}