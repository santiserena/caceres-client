import axios from "axios";
import { useEffect, useState } from "react";

export default function Gallery(): JSX.Element {
  
  const [pictures, setPictures] = useState<any[]>([]);
  //names of categories: 
  const [categories, setCategoties] = useState([]);
  //category filter:
  const [category, setCategory] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/all-drawings")
      .then((result) => {
        setPictures(result.data)
        setCategory(result.data)
      });

    axios
    .get("http://localhost:3000/categories")
    .then((result) => setCategoties(result.data));

  }, []);

  const selectHandle = (event: React.ChangeEvent<HTMLSelectElement>) => {

    let aux: any = pictures.filter(
      (elem) => elem.category === event.target.value
    );

    setCategory(aux);
      
    if (event.target.value === "showAll") setCategory(pictures);
  };

  return (
    <div>
      <br />

      <label>Categories: </label>
      <select onChange={selectHandle}>
        <option value="showAll">Show all</option>
        {categories?.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>

      <br />

      {category.length ? (
        <div>
          {category.map((e: any) => (
            <div key={e._id}>
              <p>Nombre: {e.name}</p>
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
