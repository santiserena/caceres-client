import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";

export default function Gallery(): JSX.Element {
  
  const [pictures, setPictures] = useState<any[]>([]);
  //names of categories: 
  const [categories, setCategoties] = useState([]);
  //category filter:
  const [category, setCategory] = useState<any[]>([]);
  //dafault value on select:
  const [selectDefault, setSelectDefault] = useState("showAll");

  /* _______________pagination_________________________ */

  const [currentPage, setCurrentPage] = useState<number>(
    JSON.parse(localStorage.getItem("paginationMemory") as any)
      ? JSON.parse(localStorage.getItem("paginationMemory") as any)
      : 1
  );
  const [cardsPerPage, setCardsPerPage] = useState (4)
  const indexOfLastCard = currentPage * cardsPerPage //last card of the page
  const indexOfFirstCard = indexOfLastCard - cardsPerPage //first card of the page
  const currentCards = category.slice (indexOfFirstCard, indexOfLastCard) // current page we are seeing
  
  const pagination = async (pageNumber:number) =>{
    setCurrentPage (pageNumber)
    localStorage.setItem("paginationMemory", JSON.stringify(pageNumber));
  }
/* _______________pagination_________________________ */

  useEffect(() => {
    axios
      .get("http://localhost:3000/all-drawings")
      .then((result) => {
        setPictures(result.data)
        
        let current = JSON.parse(localStorage.getItem("current") || "")
        if (current?.length) setCategory(current);
        else setCategory(result.data) 
        
        let defSelValue = JSON.parse(localStorage.getItem("selectDef") || "")
        if(defSelValue) setSelectDefault(defSelValue);
        
      });

    axios
    .get("http://localhost:3000/categories")
    .then((result) => setCategoties(result.data));

  }, []);

  const selectHandle = (event: React.ChangeEvent<HTMLSelectElement>) => {

    pagination(1);
    let aux: any = pictures.filter(
      (elem) => elem.category === event.target.value
    );

    setCategory(aux);
    localStorage.setItem("current", JSON.stringify(aux));
    setSelectDefault(event.target.value);
    localStorage.setItem("selectDef", JSON.stringify(event.target.value));
      
    if (event.target.value === "showAll") {
      setCategory(pictures)
      localStorage.setItem("current", JSON.stringify(pictures));
      setSelectDefault(event.target.value);
      localStorage.setItem("selectDef", JSON.stringify(event.target.value));
    };
  };

  return (
    <div>
      <br />

      <label>Categories: </label>
      <select value={selectDefault} onChange={selectHandle}>
        <option value="showAll">Show all</option>
        {categories?.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
      {/* _____________________pagination______________________ */}

      <div>
        {currentCards?.map((el) => (
            <div key={el._id}>
              <p>Nombre: {el.name}</p>
              <p>Fecha: {el.date}</p>
              <p>Category: {el.category}</p>
              <img src={el.image} width="100" alt="image not found" />
              <p>______________</p>
            </div>
          ))}
      </div>

      <div>
        <Pagination
          cardsPerPage={cardsPerPage}
          allPictures={category.length}
          pagination={pagination}
          currentPage={currentPage}
        />
      </div>
      {/* _____________________pagination______________________ */}

      <br />

      {/* {category.length ? (
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
      )} */}




      
    </div>
  );
}
