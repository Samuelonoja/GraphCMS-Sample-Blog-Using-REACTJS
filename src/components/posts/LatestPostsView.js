import React from 'react'
import { Link } from 'react-router-dom'

function LatestPostsView({ data }) {
    const postTags = data.tags.map((tag, idx) => {
        return <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold" key={idx}>{tag}</div>
    })
    return (
        <div className="md:flex mt-4 mb-4">
            <div className="md:flex-shrink-0">
                <img className="md:w-56" src={data.coverImage.url} alt="Woman paying for a purchase" />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
                {postTags}
                <Link to={`/blog/${data.slug}`} className="block mt-1 text-lg capitalize leading-tight font-semibold text-gray-900 hover:underline">{data.title}</Link>
                <p className="mt-2 text-gray-600">{data.excerpt}</p>
            </div>
        </div>
    )
}

export default LatestPostsView
