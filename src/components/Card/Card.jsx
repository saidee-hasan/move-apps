import { useEffect, useState } from "react";

import { Image } from "@nextui-org/react";


const Card = () => {
  const [products, setProducts] = useState([]);

  const [noOfElement, setnoOfElement] = useState(9);
  const LodeMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  const slice = products.slice(0, noOfElement);

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
    <div>
    <div className="lg:container mx-auto grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 md:grid-cols-5 p-3   gap-4">
      {slice.map((product) => {
        return (
          <>
            <div className=" pointer  ">
              <div className="rounded-lg shadow-md    bg-gray-50 overflow-hidden">
                <Image
                  isZoomed
                  width={240}
                  alt="NextUI Fruit Image with Zoom"
                  src={product.thumbnail}
                />
                <h2 className="font-bold text-xl">Black Tea</h2>
                <p className="text-gray-600">
                  Creamer could be replaced by fresh milk
                </p>
              </div>
            </div>
          </>
        );
      })}
     
    </div>
    <button
        onClick={() => LodeMore()}
        className="w-full  bg-slate-800  text-white"
      >
        Load More
      </button>
    </div>
  );
};

export default Card;
