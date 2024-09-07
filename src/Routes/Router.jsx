import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Moves from "../components/Moves/Moves";
import HeroSection from "../components/HeroSection/HeroSection";
import MoveDetail from "../components/Moves/MoveDetail/MoveDetail";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [

        { path: "/moves", element: <Moves/>},
        { path: "/", element: <HeroSection/>},
        { path: "/move/:movesKey", element: <MoveDetail/>},
    ],
  },
]);
