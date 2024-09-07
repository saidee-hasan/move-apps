import { useEffect, useState } from "react";
import Moves from "../../../assets/icon/movie.png";
import Course from "../../../assets/icon/course.png";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const MoveCard = () => {
  const [products, setProducts] = useState([]);
  const [noOfElement, setnoOfElement] = useState(9);
  const LodeMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  const slice = products.slice(0, noOfElement).reverse();
  console.log(slice);

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
        {/*Card   */}
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 container '>
          <div className="bg-orange-400 bg-opacity-45  text-center rounded-xl py-5 flex justify-center">
            <img className='h-9' src={Moves} alt="" />
            <p className='text-2xl'>Tamil bangla</p>
          </div>
          <div className="bg-red-400 bg-opacity-45 text-center rounded-xl py-5 flex justify-center">
            <img className='h-16' src={Course} alt="" />
            <p className='text-2xl'>Tamil bangla</p>
          </div>
          <div className="bg-green-400 bg-opacity-45  text-center rounded-xl py-5 flex justify-center">
            <img className='h-16' src={Course} alt="" />
            <p className='text-2xl'>Tamil bangla</p>
          </div>
          


         </div>
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
                  <h2 className="font-bold text-xl"><Link to={'/move'+ "/"+product.title} >{product.title}</Link>  </h2>
                  <p className="text-gray-600">
                    Creamer could be replaced by fresh milk
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="p-8 md:container mx-auto">
        <button
          onClick={() => LodeMore()}
          className="w-full  bg-slate-800 h-12 rounded-xl text-white "
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default MoveCard;
