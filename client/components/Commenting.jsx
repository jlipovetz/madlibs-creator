import { useEffect, useState } from "react"




export default function Commenting(props) {

    const [commentData, setCommentData] = useState({ story: props, commenterName: "", commentText: "", });

    const handleInputChange = ({ target: { name, value } }) => {
        setCommentData({ ...commentData, [name]: value });
    }

    // useEffect for getting storyid? 

    async function sendForm(e) {
        //if i can set the story id through props this should be simpler.
        e.preventDefault();
        const commentOn = `api/comment/${props}`
        console.log(props)
        try {
            console.log("sending comment...")
            const query = await fetch(commentOn, {
                method: "POST",
                body: JSON.stringify(commentData),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const response = await query.json()
            return response
        } catch (err) {
            return console.log(err.message)
        }
    }

    return (
        <>
            <form onSubmit={sendForm}>
                <input type="text" placeholder="Enter your name" name="commenterName" value={commentData.commenterName} onChange={handleInputChange} />
                <input type="text" placeholder="Write your comment" name="commentText" value={commentData.commentText} onChange={handleInputChange} />
                <button>send comment</button>

            </form>
        </>)

}