// {
//     userLocation.lat,
//     userLocation.long
// }

import { getTime } from "./timeOperation"

export const getEndTime=(userLocation, workLocation)=>{  
    if(userLocation.lat === workLocation.lat && userLocation.long=== workLocation.long) return "still calculating pay"
    return getTime();
}