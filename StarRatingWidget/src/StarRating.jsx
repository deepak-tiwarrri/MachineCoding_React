import { useState } from 'react'
import FilledStar from './utils/filled-start';
import EmptyStar from './utils/empty-star';

import "./index.css";
const StarRating = ({ maxRating = 5, initialRating = 0 }) => {
   //two type of rating is there first is selected click rating
   //second one is hover rating
   const [selectedRating, setSelectedRating] = useState(initialRating);
   const [hoverRating, setHoverRating] = useState(0);

   const handleMouseEnter = (index) => {
      console.log("index from mouse enter ", index);
      setHoverRating(index);
   }
   const handleMouseLeave = () => {
      setHoverRating(0);
   }
   const handleClick = (index) => {
      console.log(`index value from mouse leave ${index}`);
      setSelectedRating(index);
   }
   const renderStar = (index) => {
      console.log(`hover: ${hoverRating},selected:${selectedRating}`);

      let className = '';
      const isFilled = index <= (selectedRating || hoverRating);
      if (index <= selectedRating) {
         className = 'active';
      }
      else if (hoverRating && index <= hoverRating) {
         className = 'hovered'
      }
      return (
         <button key={index} onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}

         >
            <span
               style={{ cursor: 'pointer' }}
               className='star-icon'
            >
               {isFilled ? <FilledStar className={className} /> : <EmptyStar className={className} />}
            </span>
         </button>
      );
   }
   const totalStar = [...Array(maxRating)];
   return (
      <div className='star-rating'>
         <h2 >Star Rating Component</h2>
         <div>
            {
               totalStar.map((_, i) => renderStar(i + 1))
            }
         </div>
      </div>
   )
}

export default StarRating;