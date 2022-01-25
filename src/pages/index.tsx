import Button from "../components/Button"
import Form from "../components/Form"
import Table from "../components/Table"
import Layout from "../components/layout"
import useClient from "../hooks/useClient"

export default function Home() {
  const {client, clientList, newClient, selectClient, deleteClient, SaveChangesClient, setTable, visible_table, visible_form, getAll } = useClient()

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-dusk to-gray-700
    text-white text-2xl
    `}>
      {<Layout tittle="Cadastro simples">
        {visible_table &&
          <div>  
            <div className="flex justify-end">
              <Button onClick={newClient} color="green" classname="mb-4" >Novo Cliente</Button>
            </div>
            <Table deletedClient={deleteClient} selectedClient={selectClient} clients={clientList} />
          </div>
        }
      {visible_form &&
        <Form changeClient={SaveChangesClient} visibleComponentChange={()=> setTable()} updateList={getAll} client={client} />
      }
      </Layout>}
    </div>
  )
}
