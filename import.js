// import.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // Your Firebase Admin SDK key
const data = require("./data/yonex_rackets.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function importData() {
  for (const [key, value] of Object.entries(data)) {
    await db.collection("products").doc(key).set(value);
  }
  console.log("Import completed");
}

importData();
