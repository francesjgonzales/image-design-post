import MyComponent from "./MyComponent";

export default function App() {
  return (
    /* using fragment <> can return multiple elements in a component */
    <>
      <div className="m-5 p-5">
        <div className="text-center text-7xl m-8 pt-2 md:container md:mx-auto bg-indigo-500 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-fuchsia-200 ">
          <p className="underline decoration-wavy">
            Create your own BTS photo!
          </p>
          <div className="text-center text-xl m-7 pb-3">
            Make your own and save in an instant!
          </div>
        </div>

        <MyComponent />
      </div>
    </>
  );
}
