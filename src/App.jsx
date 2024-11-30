import { ImageDesignForm } from "./ImageDesignForm";
import MyComponent from "./MyComponent";

export default function App() {
  return (
    /* using fragment <> can return multiple elements in a component */
    <>
      {/* <ImageDesignForm /> */}
      <h1>hellso</h1>
      <button
        type="button"
        onClick={() => {
          window.print();
        }}
      >
        Print
      </button>

      <h1>Component to Image</h1>

      <MyComponent />
    </>
  );
}
