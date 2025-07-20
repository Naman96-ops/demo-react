import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({resData}) => {
   
   return(
      <div className='p-4 m-4 w-[250px] rounded-lg bg-gray-50 hover:bg-slate-200' >
         <img className='rounded-lg' src={CDN_URL+resData.info.cloudinaryImageId} />
         <h3 className="py-2 text-lg font-bold">{resData.info.name}</h3>
         <h4 className="break-words ">{resData.info.cuisines.join(",")}</h4>
         <h4>{resData.info.avgRating}</h4>
         <h4>{resData.info.costForTwo}</h4>
         <h4>{resData.info.sla.deliveryTime} Minutes</h4>
      </div>
   )
}

export const withPromotedLabel = (RestaurantCard) => {
   return (props) => {
      return(
         <div>
            <label className="absolute p-2 m-2 text-white bg-black rounded-lg">Opened</label>
            <RestaurantCard {...props}/>
         </div>
      )
   }
   
}

export default RestaurantCard;