import axios from "axios";
import { useEffect, useState } from "react";

export default function Gallery(): JSX.Element {
  const [pictures, setPictures] = useState([]); 
  useEffect(() => {
    axios
      .get("http://localhost:3000/all-drawings")
      .then((result) => setPictures(result.data));
  }, []);

  return (
    <div>

      {pictures.length ? (
        <div>
          {pictures.map((e: any) => (
            <div key={e._id}>
              <p>Nombre: {e.name}</p>
              <p>Id: {e._id}</p>
              <p>Fecha: {e.date}</p>
              <p>Category: {e.category}</p>
              <img src={e.image} width="100" alt="image not found" />
              <p>______________</p>
            </div>
          ))}
          
        </div>
      ) : (
        <p>Loading..</p>
      )}
      
    </div>
  );
}
