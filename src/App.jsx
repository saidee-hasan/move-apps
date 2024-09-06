import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Router";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Layout></Layout>
      </RouterProvider>
    </>
  );
}

export default App;
