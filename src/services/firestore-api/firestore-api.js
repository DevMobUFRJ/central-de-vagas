import { API } from "../api";
import { database } from "../../firebase";

const FirebaseStoreService = {
  async createResource(resource) {
    try {
      const insert = await database.collection("users").add(resource);
      if (insert) {
        console.log(insert);
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export { FirebaseStoreService };
