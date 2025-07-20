import RestaurantCard,{withPromotedLabel}  from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

   

    const[listOfRes,setListOfRes] = useState([])

    const[filteredList,setFilteredList] = useState([])

    const[searchInput,setSearchInput] = useState("")
     
    useEffect(() =>{
         fetchData()
    },[])
    
    const fetchData = async() => {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.986222&lng=77.743152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

          const json = await data.json()

          console.log(json)

           setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

           setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

   const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
       
    const onlineStatus = useOnlineStatus();
    // if(listOfRes.length == 0){
    //     return <Shimmer />
    // }

    if(onlineStatus === false) return <h1>You are Offline. Please check your internet Connectivity!!!</h1>

   return listOfRes.length == 0 ? <Shimmer /> :(
      <div className='body'>
        <div className='flex'>
          <div className="p-4 m-4">
            <input type="text" className="border border-black border-solid" value={searchInput} 
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="px-4 py-2 m-4 bg-green-100 rounded-lg hover:bg-zinc-200" onClick={() =>{
                const filteredList = listOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchInput.toLowerCase()))
                setFilteredList(filteredList)
            }}>Search</button>
          </div>
          <div className="flex items-center p-4 m-4">
             <button className="px-4 py-2 m-4 bg-gray-100 rounded-lg hover:bg-slate-200" onClick={() => {
            const filteredList = listOfRes.filter((res) => res.info.avgRating > 4.4)
            setFilteredList(filteredList)
            console.log(filteredList)
          }
          
          }>Top Order Restaurant</button>
          </div>
         
        </div>
        <div className='flex flex-wrap'>
         {
            filteredList.map((restaurant) => <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
            {
              restaurant.info.isOpen ? <RestaurantCardPromoted resData={restaurant}/> :<RestaurantCard  resData={restaurant}/>
            }
           </Link> )
         }
         
        </div>
      </div>
   )
}

export default Body;