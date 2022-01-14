import Client from "../../core/clients";
import clientRepository from "../../core/interfaces/client_repository";
import firestore, { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { dataBase } from '../config'

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
  #clientCollection = collection(dataBase, 'clients').withConverter(this.#conversor)

  async save(client: Client): Promise<Client> {
    if(client?.id){
      setDoc(doc(dataBase, 'clients', client.id).withConverter(this.#conversor), client)
      return client
    } else {
      const docRef = await addDoc(this.#clientCollection, client)
      const doc = await getDoc(docRef)
      return doc.data()
    }
  }
  async delete(client: Client): Promise<void> {
    return await deleteDoc(doc(dataBase, 'clients', client.id))
  }
  async getAll(): Promise<Client[]> {
    const clientsSnapshot = await getDocs(this.#clientCollection)
    const clientsList = clientsSnapshot.docs.map(doc => doc.data()) ?? []
    return clientsList;
  }
}
