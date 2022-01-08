import Client from "../core/clients";
import { EditIcon, TrashIcon } from "./icons";

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  deletedClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {

  const showActions = props.deletedClient || props.selectedClient
  const renderHeader = (
    <tr>
      <th className="text-left p-3">Código</th>
      <th className="text-left p-3">Nome</th>
      <th className="text-left p-3">Idade</th>
      {showActions && <th className="p-3">Ações</th>}
    </tr>
  );

  const renderActions = (client: Client, index:number) => {
    return (
      <td className="flex justify-center">
        {props.selectedClient && (
          <button onClick={()=> props.selectedClient?.(client)} className={`flex justify-center items-center"text-dusk" rounded-full hover:bg-purple-50 p-2 m-1`}>
            {EditIcon}
          </button>
        )}
        {props.deletedClient && (
          <button onClick={()=> props.deletedClient?.(client)} className={`flex justify-center items-center ${index % 2 === 0 ? "text-orange-900" : "text-red-800"} rounded-full hover:bg-purple-50 p-2 m-1`}>
            {TrashIcon}
          </button>
        )}
      </td>
    );
  };

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
      <tbody>{renderData}</tbody>
    </table>
  );
}
