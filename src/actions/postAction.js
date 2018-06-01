import {FETCH_POSTS, NEW_POSTS} from './types';

export const fetchPosts = () => dispatch => {

        console.log("Fetching Data");

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
            }));
}

export const createPost = (post) => dispatch => {

    console.log("Creating new Post");
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: NEW_POSTS,
            payload: post
        }));
}