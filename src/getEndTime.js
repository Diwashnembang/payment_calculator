// {
//     userLocation.latitude,
//     userLocation.longitufe
// }

import { getTime } from "./timeOperation"

export const getEndTime=(userLocation, workLocation)=>{  
    if(userLocation.latitude === workLocation.latitude && userLocation.longitude=== workLocation.longitude) return
    return getTime();
}