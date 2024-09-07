import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Router";
import Layout from "./Layout/Layout";
import { useEffect, useState } from "react";



function App() {

  const [showImg,setShowImg]= useState(true);
useEffect(()=>{

  setTimeout(()=>{
      setShowImg(false)
  },80)
},[])



  return (
    <>
       {
          showImg ? (
            
           <img className='mx-auto' src={'https://cdn.pixabay.com/animation/2023/05/02/04/29/04-29-06-428_512.gif'}/>


          ):
          <div>
             <RouterProvider router={router}>
        
        <Layout></Layout>
      </RouterProvider>
          </div>
  
        }


 
     
    </>
  );
}

export default App;
