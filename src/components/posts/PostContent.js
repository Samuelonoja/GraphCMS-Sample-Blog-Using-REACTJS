import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { BlogContext } from '../../context/BlogContext'

function PostContent() {
    const { state } = useContext(BlogContext)
    const { slug } = useParams()

    console.log(slug)
    const post = state.posts.find(data => data.slug === slug)


    if (state.loading) {
        return <h2>LOADING</h2>
    } else {
        return (
            <div>
                <div className="max-w-full rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={post.coverImage.url} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostContent
