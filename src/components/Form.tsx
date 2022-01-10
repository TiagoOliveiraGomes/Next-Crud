import { useState } from "react";
import Client from "../core/clients";
import Entry from "./Entry";
import Button from "./Button";

interface propsForm {
  client: Client;
  visibleComponentChange: () => void;
  changeClient: (client: Client) => void;
}

export default function (props: propsForm) {
  const { client, visibleComponentChange, changeClient } = props;
  const id = client?.id;
  const [name, setName] = useState(client?.name ?? "");
  const [age, setAge] = useState(client?.age ?? 0);
  return (
    <div>
      {id && <Entry text="Código" value={id} onlyRead className="mb-5" />}
      <Entry text="Name" value={name} onChange={setName} className="mb-5" />
      <Entry
        tipo="number"
        text="Idade"
        value={age}
        onChange={setAge}
        className="mb-5"
      />
      <div className="flex mt-3 justify-end">
        <Button
          onClick={() => changeClient(new Client(id, name, age))}
          color="teal"
          classname="mr-2"
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button onClick={visibleComponentChange} color="red">
          Cancelar
        </Button>
      </div>
    </div>
  );
}
