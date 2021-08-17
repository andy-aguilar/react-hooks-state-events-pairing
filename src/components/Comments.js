import React, {useState} from 'react'

export default function Comments({comments}) {
    const [clicked, setClicked] = useState("none")
    const [sortedComments, setSortedComments] = useState(comments)

    const displayComments = sortedComments.map(comment => {
        return <div key={comment.id}>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
            </div>
    })

    const handleChange = (e) => {
        setClicked(e.target.value)
        let newComments = [...comments]
        console.log(comments)
        if (e.target.value === "none"){
        ///
        } else if (e.target.value === "user"){
            newComments = newComments.sort((commentA, commentB) => {
                if(commentA.user < commentB.user){
                    return -1
                }
                else if (commentA.user > commentB.user){
                    return 1
                }
                return 0
            })
        } else{
            newComments = newComments.sort((commentA, commentB) => {
                if(commentA.upvotes < commentB.upvotes){
                    return -1
                }
                else if (commentA.upvotes > commentB.upvotes){
                    return 1
                }
                return 0
            })
        }

        setSortedComments(newComments)
    }

    return (
        <div>
            <form>
                <input 
                    type="radio"
                    value="none"
                    checked={clicked === "none"}
                    onChange={handleChange}
                />
                <label>None</label>
                <input 
                    type="radio"
                    value="user"
                    checked={clicked === "user"}
                    onChange={handleChange}
                />
                <label>User</label>
                <input 
                    type="radio"
                    value="upvotes"
                    checked={clicked === "upvotes"}
                    onChange={handleChange}
                />
                <label>Votes</label>

            </form>
            <h2>2 Comments</h2>
            {displayComments}
        </div>
    )
}
