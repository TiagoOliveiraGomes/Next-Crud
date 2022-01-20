import Button from "../components/Button"
import Form from "../components/Form"
import Table from "../components/Table"
import Layout from "../components/layout"
import useClient from "../hooks/useClient"
import Lottie from 'react-lottie'
import * as animationData from '../../assets/loading_animation2.json'
import { useEffect, useState } from "react"

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      PreserveAspectRatio: 'xMidYMid slice'
    }
  }
  const {client, clientList, newClient, selectClient, deleteClient, SaveChangesClient, setTable, visible_table, visible_form, isLoading } = useClient()
  const Loading_Animation = <Lottie options={defaultOptions} height={100} width={100}/>

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-dusk to-gray-700
    text-white text-2xl
    `}>
      <Layout tittle="Cadastro simples">
        {visible_table &&
          <div>  
            <div className="flex justify-end">
              <Button onClick={newClient} color="green" classname="mb-4" >Novo Cliente</Button>
            </div>
            {isLoading?Loading_Animation: <Table deletedClient={deleteClient} selectedClient={selectClient} clients={clientList} /> }
          </div>
        }
      {visible_form &&
        <Form changeClient={SaveChangesClient} visibleComponentChange={()=> setTable()} client={client} />
      }
      </Layout>
    </div>
  )
}
