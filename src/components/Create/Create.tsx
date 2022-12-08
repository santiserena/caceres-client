import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Create(): JSX.Element {

    const [drawing, setDrawing] = useState({
      name: "",
      category: "",
      description: "",
      date: "",
    });
    const [categories, setCategories] = useState ([]);
    const [imageToUpload, setImageToUpload] = useState ('')

    useEffect(() => {
      axios
        .get("http://localhost:3000/categories")
        .then((result) => setCategories(result.data));
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

  return (
    <div>

      <h1>Welcome Capuzz! Upload a new job..</h1>

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
      <input type="text" name="category" list="category" onChange={handleOnChange}/>
        Category
      </label>
      <datalist id="category">
        {categories.map( (el: string) => <option key={el} value={el}></option>)}
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
      <img src={imageToUpload} alt="Not found" width="100" />

      <br />
      <button onClick={() => upload()}>Upload</button>
    </div>
  );
}
