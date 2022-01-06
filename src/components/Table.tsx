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

  const renderActions = (client: Client) => {
    return (
      <td className="flex justify-center">
        {props.selectedClient && (
          <button onClick={()=> props.selectedClient?.(client)} className="flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1">
            {EditIcon}
          </button>
        )}
        {props.deletedClient && (
          <button onClick={()=> props.deletedClient?.(client)} className="flex justify-center items-center text-red-500 rounded-full hover:bg-purple-50 p-2 m-1">
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
      ${index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
      `}
      >
        <td className="text-left p-3">{client.id}</td>
        <td className="text-left p-3">{client.name}</td>
        <td className="text-left p-3">{client.age}</td>
        {showActions && renderActions(client)}
      </tr>
    );
  });

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
        bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100
      `}
      >
        {renderHeader}
      </thead>
      <tbody>{renderData}</tbody>
    </table>
  );
}
