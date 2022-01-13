import Client from "../clients";

export default interface clientRepository {
    save(client: Client): Promise<Client>
    delete(client: Client): Promise<void>
    getAll(): Promise<Client[]>
}