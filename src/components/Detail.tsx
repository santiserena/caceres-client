import { useState } from "react";

interface AppProps {
  nombre: string;
}

export default function Detail({ nombre }: AppProps): JSX.Element {
  const [myState, setMyState] = useState<number>(5);

  return (
    <div>
      <h1>detail de {typeof nombre}</h1>
      <h2>El estado es {myState}</h2>
    </div>
  );
}

