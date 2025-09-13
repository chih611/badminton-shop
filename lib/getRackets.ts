import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";

const PAGE_SIZE = 10;

export async function getRacketsPage(
  lastDoc: QueryDocumentSnapshot<DocumentData> | null = null
) {
  const racketsRef = collection(db, "products");
  let q = query(racketsRef, orderBy("id"), limit(PAGE_SIZE));

  if (lastDoc) {
    q = query(racketsRef, orderBy("id"), startAfter(lastDoc), limit(PAGE_SIZE));
  }

  const snapshot = await getDocs(q);

  const items = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const lastVisible = snapshot.docs[snapshot.docs.length - 1] || null;

  return { items, lastVisible };
}
