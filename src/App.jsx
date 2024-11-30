import MyComponent from "./MyComponent";

export default function App() {
  return (
    /* using fragment <> can return multiple elements in a component */
    <>
      <div className="m-2 p-2"></div>
      <h1 className="md:container md:mx-auto bg-indigo-500 text-3xl box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 underline decoration-wavy">
        Create your own fan photo!
      </h1>

      <MyComponent />
    </>
  );
}
