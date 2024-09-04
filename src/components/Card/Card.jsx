import { useEffect, useState } from "react";
import "./Card.css";

const Card = () => {
  const [products, setProducts] = useState([]);

  const [noOfElement,setnoOfElement]=useState(9);
  const LodeMore =()=>{
    setnoOfElement(noOfElement + noOfElement);
  }
  const slice =products.slice(0,noOfElement)


  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);

      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);

  return (
    <div className="container mx-auto">
      {slice.map((product) => {




        return (


          <>
            <div className="lop py-5 px-5">

              <div className="rounded-lg shadow-md w-32  grid  bg-gray-50 overflow-hidden">
                <img className="mx-auto pt-4" src={product.thumbnail} alt="" />
                  <h2 className="font-bold text-xl">Black Tea</h2>
                  <p className="text-gray-600">
                    Creamer could be replaced by fresh milk
                  </p>
              
              </div>


            </div>
            
          </>
        );
      })}
      <button  onClick={()=> LodeMore()} className="w-full bg-slate-800 text-white">Load More</button>
    </div>
  );
};

export default Card;
