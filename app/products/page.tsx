"use client";

import { useCallback, useEffect, useState } from "react";
import { getRacketsPage } from "@/lib/getRackets";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import Image from "next/image";
import { Racket } from "@/types/rackets";

export default function ProductsPage() {
  const [rackets, setRackets] = useState<Racket[]>([]);

  const [lastDoc, setLastDoc] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMore(); // load first page
  }, []);

  const loadMore = useCallback(async () => {
    setLoading(true);
    const { items, lastVisible } = await getRacketsPage(lastDoc);
    setRackets((prev) => [...prev, ...items] as Racket[]);
    setLastDoc(lastVisible);
    setLoading(false);
  }, [lastDoc]); // include dependencies

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Badminton Rackets</h1>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {rackets.map((racket) => (
          <li key={racket.id} className="border p-3 rounded">
            <Image
              src="/images/rackets/astrox-100zz.jpg"
              alt={racket.name}
              width={400}
              height={400}
              className="mb-2"
            />
            <h2 className="font-medium">{racket.name}</h2>
            <p>${racket.price}</p>
            <p className="text-sm">{racket.weight}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-6">
        {lastDoc && (
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
}
