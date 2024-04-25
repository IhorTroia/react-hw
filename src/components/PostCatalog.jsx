import {useEffect, useState} from "react";

function PostCatalog ()  {
    const [data, setData] = useState([]);

    async function fetchData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setData(data);
    }

    useEffect(  () => {
        fetchData().catch(console.error)
    })


    return  (
        <div className="posts">
            <ul className="posts__list">
                {data.map(post => {
                    return <li key={post.id} className="posts_single-post" data-post-id={post.id}>
                        <h3 className="posts__post-title">{post.title}</h3>
                        <p className="posts__post-description">{post.body}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default PostCatalog;