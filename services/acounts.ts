import { acount } from "@/types/acount";
import { user_fetching } from "./user_fetching";
import { fetchData } from "./first_fectching_api";


export const acounts = async():Promise<acount[]> =>{
    const users = await user_fetching()
    const items = await fetchData()
    const res:acount[] = []

    for (let i = 0; users.results.length > i; i++){
        const data:acount = {
            user: users.results[i],
            item: items[i]
        }
        res.push(data)
    }
    
    return res
    
    
}
