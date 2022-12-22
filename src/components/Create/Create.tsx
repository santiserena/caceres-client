import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Create(): JSX.Element {
  const [drawing, setDrawing] = useState({
    name: "",
    category: "",
    description: "",
    date: "",
  });
  const [categories, setCategories] = useState([]);
  const [imageToUpload, setImageToUpload] = useState("");
  const [pictures, setPictures] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState("");
  const [namePictureToDelete, setNamePictureToDelete] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser?.email) {
      localStorage.setItem("us", JSON.stringify(auth.currentUser.email));
    }

    let us = JSON.parse(localStorage.getItem("us") || "");
    if (!us) navigate("/login");

    axios
      .get("http://localhost:3000/categories")
      .then((result) => setCategories(result.data));

    axios
      .get("http://localhost:3000/all-drawings")
      .then((result) => setPictures(result.data));
  }, []);

  const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setDrawing({
      ...drawing,
      [ev.target.name]: ev.target.value,
    });
  };

  const preparingImage = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    let newUrl: string = ev.target.value.replace("/view?usp=share_link", "");
    newUrl = newUrl.replace("file/d/", "uc?export=view&id=");

    setImageToUpload(newUrl);
  };

  const upload = async () => {
    if (
      drawing.name &&
      imageToUpload &&
      drawing &&
      drawing.category &&
      drawing.description &&
      drawing.date
    ) {
      try {
        await axios.post("http://localhost:3000/add-drawing", {
          ...drawing,
          image: imageToUpload,
        });
        alert("Picture uploaded");
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else alert("Please complete all the fields");
  };

  const erase = async (
    ev: React.MouseEvent<HTMLElement>,
    id: string,
    name: string
  ) => {
    setConfirmDelete(id);
    setNamePictureToDelete(name);
  };

  const confirmDel = async () => {
    try {
      await axios.delete(`http://localhost:3000/erase/${confirmDelete}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const signO = async () => {
    localStorage.setItem("us", JSON.stringify(""));

    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome Capuzz! Upload a new job..</h1>

      <button onClick={signO}>Sign Out</button>
      <Link to="/"><button>Go to site</button></Link>

      <br />
      <br />
      <br />
      <label>
        <input name="name" onChange={handleOnChange} />
        Name
      </label>

      <br />

      <label>
        <input name="secondaryImages" onChange={handleOnChange} />
        Secondary images
      </label>

      <br />

      <label>
        <input
          type="text"
          name="category"
          list="category"
          onChange={handleOnChange}
        />
        Category
      </label>
      <datalist id="category">
        {categories.map((el: string) => (
          <option key={el} value={el}></option>
        ))}
      </datalist>

      <br />

      <label>
        <input name="description" onChange={handleOnChange} />
        Description
      </label>

      <br />

      <label>
        <input type="date" name="date" onChange={handleOnChange} />
        Date
      </label>

      <br />

      <label>
        <input name="image" onChange={preparingImage} />
        Google Drive image URL
      </label>

      <br />
      <p>Preview:</p>
      {imageToUpload ? (
        <img src={imageToUpload} alt="Not found" width="100" />
      ) : null}

      <br />
      <button onClick={() => upload()}>Upload</button>

      {/* DELETE FEATURE */}
      <p>_______________________________________________</p>
      {confirmDelete ? (
        <div>
          <h1>
            Are you sure you want to delete the image called{" "}
            {namePictureToDelete}?
          </h1>
          <button onClick={() => confirmDel()}>Yes</button>
          <button onClick={() => setConfirmDelete("")}>No</button>
        </div>
      ) : null}

      {pictures.length ? (
        <div>
          {pictures.map((e: any) => (
            <div key={e._id}>
              <p>Nombre: {e.name}</p>
              <img src={e.image} width="80" alt="image not found" />
              <button onClick={(ev) => erase(ev, e._id, e.name)}>Erase</button>
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
