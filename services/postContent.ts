import { postType } from "@/types/postContent";
import { fetchData } from "./first_fectching_api";
import { user_fetching } from "./user_fetching";
import { userRes } from "@/types/users";
import { Items } from "@/types/Item";
const createPost = (person: userRes, item: Items[]) => {
    const post:postType[] = []
    for (let i = 0; person.results.length > i; i++){
        const srcs = []
        const amountpost = Math.floor(Math.random() * 6) + 1
        const like = Math.floor(Math.random() * 300) + 1
        const comment = Math.floor(Math.random() * 100) + 1
        const share = Math.floor(Math.random() * 50) + 1
        for (let j = 0; amountpost > j; j++){
            const randomProduct = Math.floor(Math.random() * item.length)
            const src = {
                id: j,
                src: item[randomProduct].image
            }
            srcs.push(src)
        }
        const datas: postType = {
            id: i,
            ownnerImage: person.results[i].picture.large,
            ownnerName: person.results[i].name.first,
            descript: item[i].description,
            src: srcs,
            action: {
                like: like,
                comment: comment,
                share:share
            },
            comment: {
                ownner: "thanks for watch",
                other: "your product is perfect "
            },
            isFollow: false,
            isLike: false
        }
        post.push(datas)
    }
    return post
}

export const postContent = async (): Promise<postType[]> => {
    const item = await fetchData()
    const person = await user_fetching()
    const posts = createPost(person, item)
    return posts
    
}
