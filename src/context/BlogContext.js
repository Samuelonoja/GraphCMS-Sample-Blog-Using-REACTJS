import React, { useEffect, useReducer, createContext } from 'react';
import { request } from 'graphql-request'
import { reducers } from './reducers'

export const BlogContext = createContext()

export function BlogContextProvider(props) {

    const INITIAL_STATE = {
        posts: [],
        loading: true
    }

    const [state, dispatch] = useReducer(reducers, INITIAL_STATE)
    const value = { state, dispatch }

    useEffect(() => {
        const fetchProducts = async () => {
            const { posts } = await request(
                'https://api-eu-central-1.graphcms.com/v2/ckemv1r183nso01xl5for8lrl/master',
                `
                    {
                        posts {
                        title
                        tags
                        slug
                        excerpt
                        content {
                        html
                        }
                        coverImage {
                        fileName
                        url
                        }
                    }
  }
`
            );
            dispatch({ type: "GET_POSTS", getPosts: posts })
        };

        fetchProducts();
    }, []);

    console.log(state)
    return (
        <BlogContext.Provider value={value}>
            {props.children}
        </BlogContext.Provider>
    )
}

