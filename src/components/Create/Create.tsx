import React, { useState } from "react";
import axios from "axios";

export default function Create(): JSX.Element {

    const [drawing, setDrawing] = useState ({image:''});
    //const [stateImage, setStateImage] = useState('');

    const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>):void =>{
        setDrawing({
            ...drawing,
            [ev.target.name]: ev.target.value
        })
    }

    const base64Convert = (ev: React.ChangeEvent<HTMLImageElement> | any) => { //too fix 
        
        let file = ev.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = async function () {
          let base64 = fileReader.result as string;
          
          setDrawing({
            ...drawing,
            image: base64
          })
          // error can be in model type or in express middleware
          //validate()
        };
      };

    /* const validate = () =>{
        console.log('do validate');
        
    }  */ 

    const upload = async () => {
      try {
        await axios.post("http://localhost:3000/add-drawing", drawing);
      } catch (error) {
        console.log(error);
      }
    };

/* {
  "name": "el aarca", 
  "image": "imag",                                file
  "secondaryImages": ["imag2", "imag3"],          [file]
  "category": "funny",
  "description": "blabla", 
  "date": "fecha"
} */
  return (
    <div>
      <h1>create:</h1>

      <label><input name='name' onChange={handleOnChange}/>Name</label>
      <br/>
      <label><input name='secondaryImages' onChange={handleOnChange}/>Secondary images</label>
      <br/>
      <label><input name='category' onChange={handleOnChange}/>Category</label>
      <br/>
      <label><input name='description' onChange={handleOnChange}/>Description</label>
      <br/>
      <label><input name='date' onChange={handleOnChange}/>Date</label>
      <br/>

      
                    <label onChange={(ev) => base64Convert(ev)} htmlFor="formId">
                        <input name="image" type="file" id="formId" hidden />
                            <img src={drawing.image} alt="Not found" width="40" height="40" />
                    </label>
                
      <br/>
      <button onClick={()=>upload()}>Upload</button>
    </div>
  );
}
