export default function Hero() {
    return(<>
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
      </section></>)
}