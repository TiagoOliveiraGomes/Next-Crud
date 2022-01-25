import Client from "../core/clients";
import { EditIcon, TrashIcon } from "./icons";
import Lottie from "react-lottie";
import * as animationData from "../../assets/loading_animation4.json";
import { useEffect, useState } from "react";

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  deletedClient?: (client: Client) => void;
  isLoading?: boolean;
}

export default function Table(props: TableProps) {

  const [isLoading, setIsLoading] = useState(true);
  const [isLoading_Delete, setIsLoading_Delete] = useState(false);

  useEffect(() => {
    if (!props.clients || props.clients.length === 0) {
      console.log(props.clients);
      console.log("nao tem props clients");
      setIsLoading(true);
    } else {
      console.log("Tem props clients");
      console.log(props.clients);
      setIsLoading(false);
    }
  }, [props.clients]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      PreserveAspectRatio: "xMidYMid slice",
    },
  };

  const showActions = props.deletedClient || props.selectedClient;

  const renderHeader = (
    <tr>
      <th className="text-left p-3">Código</th>
      <th className="text-left p-3">Nome</th>
      <th className="text-left p-3">Idade</th>
      {showActions && <th className="p-3">Ações</th>}
    </tr>
  );

  const loading_delete_animation = <Lottie
  classname={"flex text-left h-5"}
  options={defaultOptions}
  height={80}
  width={80}
/>

  function press_Delete_Icon(client: Client){
    setIsLoading(true)
    props.deletedClient?.(client)
  }

  const renderActions = (client: Client, index: number) => {
    return (
      <td className="flex justify-center">
        {props.selectedClient && (
          <button
            onClick={() => props.selectedClient?.(client)}
            className={`flex justify-center items-center"text-dusk" rounded-full hover:bg-purple-50 p-2 m-1`}
          >
            {EditIcon}
          </button>
        )}
        {props.deletedClient && (
          <button
            onClick={() => press_Delete_Icon(client)}
            className={`flex justify-center items-center ${
              index % 2 === 0 ? "text-orange-900" : "text-red-800"
            } rounded-full hover:bg-purple-50 p-2 m-1`}
          >
            {TrashIcon}
          </button>
        )}
      </td>
    );
  };

  const Loading_Animation = (
    <tbody>
      <tr>
        <td className="text-left p-3 pr-40"></td>
        <td>
          <Lottie
            classname={"flex text-left h-5"}
            options={defaultOptions}
            height={80}
            width={80}
          />
        </td>
        <td className="text-left p-3"></td>
        <td className="text-left p-3"></td>
      </tr>
    </tbody>
  );
  const renderData = props.clients?.map((client, index) => {
    return (
      <tr
        key={client.id}
        className={`
      ${index % 2 === 0 ? "bg-moon" : "bg-zinc-200"}
      `}
      >
        <td className="text-left p-3">{client.id}</td>
        <td className="text-left p-3">{client.name}</td>
        <td className="text-left p-3">{client.age}</td>
        {showActions && renderActions(client, index)}
      </tr>
    );
  });

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
        bg-gradient-to-r from-gray-700 to-dusk text-gray-100
      `}
      >
        {renderHeader}
      </thead>
      {isLoading ? Loading_Animation : <tbody>{renderData}</tbody>}
    </table>
  );
}
