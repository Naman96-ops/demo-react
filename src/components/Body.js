import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

   

    const[listOfRes,setListOfRes] = useState(resList)

    

   return(
      <div className='body'>
        <div className='filter-btn'>
          <button onClick={() => {
            const filteredList = listOfRes.filter((res) => res.info.avgRating > 4.4)
            setListOfRes(filteredList)
            console.log(filteredList)
          }
          
          }>Top Order Restaurant</button>
        </div>
        <div className='res-container'>
         {
            listOfRes.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
         }
         
        </div>
      </div>
   )
}

export default Body;