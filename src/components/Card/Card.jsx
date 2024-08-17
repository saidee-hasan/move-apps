import { useEffect, useState } from "react";
import "./Card.css";

const Card = () => {
  const [products, setProducts] = useState([]);

  // pagination
  const itemsPerpage = 10;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = (currentPage) => {
    fetch(`https://dummyjson.com/products?limit=${itemsPerpage}&skip=${(currentPage- 1)*itemsPerpage}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / itemsPerpage));
      });
  };
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  console.log(products);

  const handlePageChange = (index)=>{
setCurrentPage(index+1)
  }
  const handlePrevious = ()=>{
    if(currentPage > 1){
setCurrentPage(currentPage - 1)
    }
  }
  return (
    <div className="llo">
      {products.map((product) => {
        return (
          <>
            <div className="lop border ">
              <section className="tt">
                <img src={product.thumbnail} alt="" />
                <h1>{product.brand}</h1>
              </section>
            </div>
          </>
        );
      })}

      <div className="pagination lop">
      
       <button onClick={handlePrevious} disabled={currentPage == 1}>Previous</button>
       {
        Array.from({length: totalPages},(_,index)=>{
          return  <button onClick={()=>handlePageChange(index)} key={index}>{index +1 }</button>

        })
       }



{/*        
        {Array.from({ length: totalPages }, (_, index) => {
          return <button key={index}>{index + 1}</button>;
        })} */}
      </div>
    </div>
  );
};

export default Card;
