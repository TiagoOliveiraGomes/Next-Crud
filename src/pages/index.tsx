import Button from "../components/Button"
import Form from "../components/Form"
import Table from "../components/Table"
import Layout from "../components/layout"
import Client from "../core/clients"
import { useState } from "react"

export default function Home() {
  const [client, setClient] = useState<Client>(Client.void())
  const [visibleComponent, setVisibleComponent] = useState<"table"|"form">("table")
  const clients = [
    new Client('1', 'Ana', 34),
    new Client('2', 'José', 25),
    new Client('3', 'Paulo', 14),
    new Client('4', 'Pedro', 36)
  ]
  function selectClient (client: Client) {
    setClient(client)
    setVisibleComponent("form")
  }
  function deleteClient (client: Client) {
    console.log("Excluir... " + client.name)
  }
   function newClient () {
    setClient(Client.void())
    setVisibleComponent("form")
  }
  function changeClient (client: Client) {
    console.log(client)
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
            <Table deletedClient={deleteClient} selectedClient={selectClient} clients={clients} />
          </div>
        }
      {visibleComponent === "form" &&
        <Form changeClient={changeClient} visibleComponentChange={()=> setVisibleComponent("table")} client={client} />
      }
      </Layout>
    </div>
  )
}
