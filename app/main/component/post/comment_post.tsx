import { useState } from "react"

export const Comment_post = ({ comment }: { comment: string }) => {
    const [seeMore, setseeMore] = useState(false)
    const hasComment = comment.length > 0
    if (!hasComment) return null
    return (
        
        <div className="bg-amber-300 h-auto w-full p-2 ">
            <p className={`${seeMore == false ? 'line-clamp-2' : null}`} onClick={() => seeMore ? setseeMore(false):setseeMore(true)}>
                {comment} <br />
                {comment} <br />
                {comment} <br />
                
            </p>
                
            </div>
       
    )
}