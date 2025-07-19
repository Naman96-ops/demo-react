import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";



const RestaurantMenu = () => {

    const {resId} = useParams();
     
     const resInfo = useRestaurantMenu(resId);
  

    if(resInfo === null) return <Shimmer />

   const{name,cuisines,costForTwoMessage,avgRating} = resInfo?.cards[2]?.card?.card?.info || {};

   

   // Try to safely find the correct card that has itemCards
const menuCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

// Look for the card that contains itemCards
const menuCardWithItems = menuCards?.find(
  (card) => card?.card?.card?.itemCards
);
console.log(menuCardWithItems)

// If not found, show error message
if (!menuCardWithItems) {
  return <h2>Error: Menu not available for this restaurant</h2>;
}

const { itemCards } = menuCardWithItems.card.card;

    return(
        <div>
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <h3>{costForTwoMessage}</h3>
            <h4>{avgRating}</h4>
            <h2>Menu</h2>
            <ul>
               {itemCards.map((list) => <li key={list.card.info.id}>{list.card.info.name} -{"Rs."}  {list.card.info.price/100}</li>)}
                
            </ul>
        </div>
    )
}

export default RestaurantMenu