// lib/getTop3Rackets.ts
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Racket } from "@/types/rackets";

export async function getTop3Rackets(): Promise<Racket[]> {
  const racketsRef = collection(db, "products");
  const q = query(racketsRef, orderBy("id", "desc"), limit(3));

  const snapshot = await getDocs(q);

  const items: Racket[] = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: data.id,
      name: data.name,
      category: data.category,
      price: data.price,
      weight: data.weight,
      balance: data.balance,
      flex: data.flex,
      image: data.image,
      description: data.description,
    } as Racket;
  });

  return items;
}
