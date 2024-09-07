import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContaxt } from '../../../App';
import MoveCard from '../MoveCard/MoveCard';

const MoveDetail = () => {
    const {movesKey}=useParams();
  
   
    // const productCard = products.find(pd=>pd.title == movesKey);

    // console.log(productCard)
    return (
        <div>
            <h1>......................... {movesKey}</h1>
    
           
        </div>
    );
};

export default MoveDetail;