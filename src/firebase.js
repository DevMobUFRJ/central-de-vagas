import { firebase, admin } from "firebase";
import "@firebase/firestore";

const serviceAccount = require("./central-de-vagas.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://central-de-vagas-36df3.firebaseio.com",
});

export const database = firebase.firestore();
export default firebase;
