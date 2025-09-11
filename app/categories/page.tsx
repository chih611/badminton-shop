export default function CategoriesPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <li className="bg-white shadow p-6 rounded-lg text-center">🏸 Rackets</li>
        <li className="bg-white shadow p-6 rounded-lg text-center">👟 Shoes</li>
        <li className="bg-white shadow p-6 rounded-lg text-center">🎒 Accessories</li>
      </ul>
    </div>
  );
}
