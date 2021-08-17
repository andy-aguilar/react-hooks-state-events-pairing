import React from 'react'

export default function Details({title, createdAt, upvotes, downvotes, views, addVote, displayComments, setDisplayComments}) {
    return (
        <div className="details">
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
            <div className="voteBtns">
                <button name="upvotes" onClick={addVote}>{upvotes} 👍</button>
                <button name="downvotes" onClick={addVote}>{downvotes} 👎</button>
            </div>
            <br/>
            <button onClick={() => {setDisplayComments(!displayComments)}}>{displayComments ? "Hide" : "Show"} Comments</button>
            <br />
            <br />
        </div>
    )
}

