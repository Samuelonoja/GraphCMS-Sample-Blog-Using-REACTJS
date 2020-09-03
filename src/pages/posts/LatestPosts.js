import React, { useContext } from 'react'
import '../light.css'
import { BlogContext } from '../../context/BlogContext'
import LatestPostView from '../../components/posts/LatestPostsView'

function LatestPosts() {

    const { state } = useContext(BlogContext)

    const showLatestPosts = state.posts.map((post, idx) => {
        return <div key={idx}><LatestPostView data={post} /></div>
    })
    if (state.loading) {
        return (
            <div className="loadingio-spinner-rolling-btgo0oeyddt">
                <div className="ldio-ggvka6mq6h">
                    <div></div>
                </div></div>
        )
    } else if (!state.loading) {
        return (
            <div className="max-w-screen-lg w-1/2  m-auto">
                {showLatestPosts}
            </div>
        )
    }
}

export default LatestPosts
