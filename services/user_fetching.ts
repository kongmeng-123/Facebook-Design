import { userRes } from "@/types/users"

export const user_fetching = async (): Promise<userRes> => {
    try {
        const res = await fetch("https://randomuser.me/api/?results=10")
        if (!res.ok) {
            throw new Error("Network response was not ok")
        }
        return res.json()
        
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message)
            throw err
        }
        throw new Error("Unknown error")
    }
}