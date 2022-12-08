import axios from "axios";
import { useEffect, useState } from "react";

export default function Gallery(): JSX.Element {
  const [pictures, setPictures] = useState([]); /* ver si algo de ts */
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
              <p>{e.name}</p>
              <p>{e._id}</p>
              <img src={e.image} width="100" alt="image not found" />
              <p>______________</p>
            </div>
          ))}
          {/* prueba */}<img src="https://drive.google.com/file/d/1h96Yytw3V_Uh2BhpR_BkFdws3IsA19Yh/view?usp=share_link" alt="" />
        </div>
      ) : (
        <p>Loading..</p>
      )}
      
    </div>
  );
}
