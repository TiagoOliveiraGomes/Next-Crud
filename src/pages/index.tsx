import Button from "../components/Button"
import Form from "../components/Form"
import Table from "../components/Table"
import Layout from "../components/layout"
import Client from "../core/clients"
import { useEffect, useState } from "react"
import clientRepository from "../core/interfaces/client_repository"
import ClientCollection from "../backend/db/Client_Collection"

export default function Home() {
  
  const repo: clientRepository = new ClientCollection()

  const [client, setClient] = useState<Client>(Client.void())
  const [clientList, setClientList] = useState<Client[]>([])
  const [visibleComponent, setVisibleComponent] = useState<"table"|"form">("table")

  useEffect(() => {
    let cleanup = true
    cleanup && getAll()
    return () => {cleanup = false}
  }, [])

  async function getAll() {
   const allAdata = await repo.getAll()
   setClientList(allAdata)
   setVisibleComponent("table")
  }
  function selectClient (client: Client) {
    setClient(client)
    setVisibleComponent("form")
  }
  async function deleteClient (client: Client) {
    await repo.delete(client)
    getAll()
  }
   async function newClient () {
    setClient(Client.void())
    setVisibleComponent("form")
  }
  async function SaveChangesClient (client: Client) {
    await repo.save(client)
    getAll()
  }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-dusk to-gray-700
    text-white text-2xl
    `}>
      <Layout tittle="Cadastro simples">
        {visibleComponent === "table" &&
          <div>  
            <div className="flex justify-end">
              <Button onClick={newClient} color="green" classname="mb-4" >Novo Cliente</Button>
            </div>
            <Table deletedClient={deleteClient} selectedClient={selectClient} clients={clientList} />
          </div>
        }
      {visibleComponent === "form" &&
        <Form changeClient={SaveChangesClient} visibleComponentChange={()=> setVisibleComponent("table")} client={client} />
      }
      </Layout>
    </div>
  )
}
