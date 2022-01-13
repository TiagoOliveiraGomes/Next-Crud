import Client from "../../core/clients";
import clientRepository from "../../core/interfaces/client_repository";
import firestore, { collection, Firestore } from "firebase/firestore";
import firebase from "../config";

export default class ClientCollection implements clientRepository {
  #conversor = {
    toFirestore(client: Client) {
      return {
        name: client.name,
        age: client.age,
      };
    },
    fromFirestore(
      snapshot: firestore.QueryDocumentSnapshot,
      options: firestore.SnapshotOptions
    ) {
      const data = snapshot.data(options);
      return new Client(snapshot.id, data.name, data.age);
    },
  };
  async save(client: Client): Promise<Client> {
    return null;
  }
  async delete(client: Client): Promise<void> {
    return null;
  }
  async getAll(): Promise<Client[]> {
    return null;
  }
  private collection() {
    // return collection(firestore, "clients").withConverter(this.#conversor)
  }
  #clientCollection = collection(firebase, 'clients').withConverter(this.#conversor)
}
