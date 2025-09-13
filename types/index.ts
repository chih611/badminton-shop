export interface Racket {
  id: number | string; // Firestore IDs are strings
  name: string;
  category: string; // e.g., "Racket", but can be enum if fixed
  price: number;
  weight: string; // e.g., "5U (75-79g)"
  balance: string; // e.g., "Even Balance"
  flex: string; // e.g., "Flexible"
  image: string; // URL or path
  description: string;
}
