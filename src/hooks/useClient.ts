import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/Client_Collection"
import Client from "../core/clients"
import clientRepository from "../core/interfaces/client_repository"
import switch_interface from "./switch_interface"

export default function useClient () {
    const repo: clientRepository = new ClientCollection()

    const {setForm, setTable, visible_form, visible_table} = switch_interface()
    const [client, setClient] = useState<Client>(Client.void())
    const [clientList, setClientList] = useState<Client[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
  
    useEffect(() => {
      let cleanup = true
      cleanup && getAll()
      return () => {cleanup = false}
    }, [])
  
    async function getAll() {
      setIsLoading(true)
     const allAdata = await repo.getAll()
     setClientList(allAdata)
     setTable()
     setIsLoading(false)
    }
    function selectClient (client: Client) {
      setClient(client)
      setForm()
    }
    async function deleteClient (client: Client) {
      await repo.delete(client)
      getAll()
    }
     async function newClient () {
      setClient(Client.void())
      setForm()
    }
    async function SaveChangesClient (client: Client) {
      await repo.save(client)
      getAll()
    }

    return {
        client,
        clientList,
        getAll,
        selectClient,
        newClient,
        SaveChangesClient,
        deleteClient,
        setTable,
        visible_table,
        visible_form,
        isLoading,
    }
}