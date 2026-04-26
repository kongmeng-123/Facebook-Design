import { Items } from "@/types/Item";

export const fetchData = async (): Promise<Items[]> => {
    const res = await fetch('https://fakestoreapi.com/products')
    return res.json();
}