import { CDN_URL } from "../utils/constant"

const ItemList = ({items}) => {

    return(
        <div>
           
                {
                    items.map((item) => (
                    <div key={item?.card?.info?.id} className="flex justify-between p-2 m-2 text-left border-b-2 border-gray-200">

                    
                    

                    
                    <div className="9/12">
                   <div className="py-2"> 
                   <span>{item?.card?.info?.name}</span> 
                    <span> -₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 }</span> 
                   </div>
                   <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>

                   
                    

                     <div className="w-3/12">
                     <div className="absolute">
                        <button className="absolute p-2 text-white bg-black rounded-lg shadow-lg"> Add+</button>
                    </div>
                     <div>
                        <img className="rounded-lg" src={CDN_URL+item?.card?.info?.imageId} />
                     </div>
                    
                    
                    </div>

                    </div>
                    
                    ))}
            
        </div>
    )
}

export default ItemList