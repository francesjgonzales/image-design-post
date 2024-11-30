import React, { useRef, useState } from "react";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const MyComponent = () => {
  const componentRef = useRef(null);
  const [btsMember, setBtsMember] = useState({
    name: "",
    image: "",
  });

  function handleNameChange(e) {
    setBtsMember({
      ...btsMember,
      name: e.target.value,
    });
  }

  function handleImageChange(e) {
    setBtsMember({
      ...btsMember,
      image: e.target.value,
    });
  }

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <div
        ref={componentRef}
        className="md:container md:mx-auto  bg-indigo-500"
      >
        <h1 className="text-3xl box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
          Create your own fan photo!s
        </h1>
        <h2>
          {btsMember.name}
          <br />
        </h2>

        <img height="650px" src={btsMember.image} />

        <img src={file} />
      </div>
      <div className="columns-2">
        <h2>Add Image:</h2>
        <input type="file" onChange={handleChange} />
        <label>
          Name:
          <input value={btsMember.name} onChange={handleNameChange} />
        </label>
        <label>
          Image:
          <input value={btsMember.image} onChange={handleImageChange} />
        </label>
      </div>
      <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Export As JPEG
      </button>
      <button onClick={() => exportComponentAsPDF(componentRef)}>
        Export As PDF
      </button>
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button>
    </>
  );
};

export default MyComponent;
