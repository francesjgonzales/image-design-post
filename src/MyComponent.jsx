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
        <h2>
          {btsMember.name}
          <br />
        </h2>

        <img height="650px" src={btsMember.image} />

        <img src={file} />
      </div>
      <div className="md:container md:mx-auto">
        <input type="file" onChange={handleChange} />
        <label>
          Name:
          <input value={btsMember.name} onChange={handleNameChange} />
        </label>
        <label>
          Image:
          <input
            className="outline outline-offset-2 outline-blue-500"
            value={btsMember.image}
            onChange={handleImageChange}
          />
        </label>
      </div>
      <div className="grid space-x-4 grid-cols-4 mt-6">
        <button onClick={() => exportComponentAsJPEG(componentRef)}>
          Export As JPEG
        </button>
        <button onClick={() => exportComponentAsPDF(componentRef)}>
          Export As PDF
        </button>
        <button onClick={() => exportComponentAsPNG(componentRef)}>
          Export As PNG
        </button>
        <button
          type="button"
          onClick={() => {
            window.print();
          }}
        >
          Print
        </button>
      </div>
    </>
  );
};

export default MyComponent;
