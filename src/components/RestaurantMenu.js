import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams, useSearchParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";



const RestaurantMenu = () => {

   const [showIndex,setShowIndex] = useState(null)

    const {resId} = useParams();
     
     const resInfo = useRestaurantMenu(resId);
  

    if(resInfo === null) return <Shimmer />

   const{name,cuisines,costForTwoMessage,avgRating} = resInfo?.cards[2]?.card?.card?.info || {};

   

   // Try to safely find the correct card that has itemCards
const menuCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;



const categories = menuCards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")



// Look for the card that contains itemCards
const menuCardWithItems = menuCards?.find(
  (card) => card?.card?.card?.itemCards
);


// If not found, show error message
if (!menuCardWithItems) {
  return <h2>Error: Menu not available for this restaurant</h2>;
}

const { itemCards } = menuCardWithItems.card.card;

    return(
        <div className="text-center">
            <h1 className="my-6 text-2xl font-bold ">{name}</h1>
            <p className="text-lg font-bold">
            {cuisines.join(",")} - {costForTwoMessage}
            </p>
            {/* categaory accordian */}
            {categories.map((category,index) => 
            <RestaurantCategory key={category?.card?.card?.title} 
            data={category?.card?.card}
            showItem ={index === showIndex ?true:false} 
            setShowIndex = {()=>setShowIndex(index)} 
            />
            
            )}
           
        </div>
    )
}

export default RestaurantMenu