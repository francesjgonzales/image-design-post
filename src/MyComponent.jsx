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
      image1: e.target.value,
    });
  }
  function handleImageChange2(e) {
    setBtsMember({
      ...btsMember,
      image2: e.target.value,
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
        <div className="object-none object-center">
          <img height="650px" src={btsMember.image1} />

          <img height="650px" src={btsMember.image2} />
        </div>

        <img src={file} />
        <h2 className="font-mono text-4xl pt-3 m-3 text-center">
          {btsMember.name}
        </h2>
      </div>

      <div class="mt-3 p-3 grid grid-cols-3 gap-4">
        <div className="font-bold text-xl ">Upload your image</div>
        <div className="col-span-2">
          <input type="file" onChange={handleChange} />
        </div>
        <div className="font-bold text-xl ">Type your text</div>
        <div className="col-span-2">
          <input
            className="p-1"
            value={btsMember.name}
            onChange={handleNameChange}
          />
        </div>
        <div className="font-bold text-xl ">Paste Image Address Link 1</div>
        <div className="col-span-2">
          <input
            className="p-1"
            value={btsMember.image1}
            onChange={handleImageChange}
          />
        </div>
        <div className="font-bold text-xl ">Paste Image Address Link 2</div>
        <div className="col-span-2">
          <input
            className="p-1"
            value={btsMember.image2}
            onChange={handleImageChange2}
          />
        </div>
      </div>

      <div className="grid space-x-4 grid-cols-4 mt-6">
        <button
          className="bg-cyan-400	 text-blue-950"
          onClick={() => exportComponentAsJPEG(componentRef)}
        >
          Export As JPEG
        </button>
        <button
          className="bg-cyan-400	 text-blue-950"
          onClick={() => exportComponentAsPDF(componentRef)}
        >
          Export As PDF
        </button>
        <button
          className="bg-cyan-400	 text-blue-950"
          onClick={() => exportComponentAsPNG(componentRef)}
        >
          Export As PNG
        </button>
        <button
          className="bg-cyan-400	 text-blue-950"
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
