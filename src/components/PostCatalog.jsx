import React from "react";

class PostCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    async componentDidMount() {
        await this.fetchData();
    }

    fetchData = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            this.setState({ data });
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { data } = this.state

        return (
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
}

export default PostCatalog;