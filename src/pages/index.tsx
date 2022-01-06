import Button from "../components/Button"
import Layout from "../components/layout"
import Table from "../components/Table"
import Client from "../core/clients"

export default function Home() {
  const clients = [
    new Client('1', 'Ana', 34),
    new Client('2', 'José', 25),
    new Client('3', 'Paulo', 14),
    new Client('4', 'Pedro', 36)
  ]
  function selectClient (client: Client) {
    console.log(client.name)
  }
  function deleteClient (client: Client) {
    console.log("Excluir... " + client.name)
  }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white text-2xl
    `}>
      <Layout tittle="Cadastro simples">
        <div className="flex justify-end">
          <Button color="green" classname="mb-4" >Novo Cliente</Button>
        </div>
        <Table deletedClient={deleteClient} selectedClient={selectClient} clients={clients} />
      </Layout>
    </div>
  )
}
