import importVideo from "../data/video.js";
import Video from "./Video.js";
import Details from "./Details.js";
import Comments from "./Comments.js";
import React, {useState} from "react"

function App() {
  const [video, setVideo] = useState(importVideo)
  const [displayComments, setDisplayComments] = useState(false)
  // const video = {
  //   id: 1,
  //   title: "React Today and Tomorrow and 90% Cleaner React With Hooks",
  //   embedUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
  //   views: 730707,
  //   createdAt: "Oct 26, 2018",
  //   upvotes: 9210,
  //   downvotes: 185,
  //   comments: [],
  // };

  const addVote = (e) => {
    const newVotes = video[e.target.name] + 1
    const newVideo = {...video, [e.target.name]: newVotes}
    setVideo(newVideo)
  }

  //

  return (
    <div className="App">
      <Video title={video.title} embedUrl={video.embedUrl}/>
      <Details 
        {...video} 
        addVote={addVote} 
        displayComments={displayComments} 
        setDisplayComments={setDisplayComments}
      />
      {displayComments ? <Comments comments={video.comments} /> : null}
    </div>
  );
}

export default App;
