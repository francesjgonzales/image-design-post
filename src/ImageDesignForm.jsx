import { useState } from "react";

import React from "react";

export function ImageDesignForm() {
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

  return (
    <>
      <div className="md:container md:mx-auto  bg-indigo-500">
        <h1 className="text-3xl box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
          Create your own fan photo!s
        </h1>
        <h2>
          {btsMember.name}
          <br />
        </h2>

        <img height="650px" src={btsMember.image} />
      </div>
      <div className="columns-2">
        {/* <button class="outline outline-offset-2 outline-blue-500 ...">
          Button A
        </button> */}

        <label>
          Name:
          <input value={btsMember.name} onChange={handleNameChange} />
        </label>
        <label>
          Image:
          <input value={btsMember.image} onChange={handleImageChange} />
        </label>

        <div id="print">This will be downloaded as an image</div>
      </div>
    </>
  );
}

/* class ComponentToPrint extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <div ref={this.componentRef}>Hello World</div>
        <button onClick={() => exportComponentAsJPEG(this.componentRef)}>
          Export As JPEG
        </button>
        <button onClick={() => exportComponentAsPDF(this.componentRef)}>
          Export As PDF
        </button>
        <button onClick={() => exportComponentAsPNG(this.componentRef)}>
          Export As PNG
        </button>
      </React.Fragment>
    );
  }
} */
