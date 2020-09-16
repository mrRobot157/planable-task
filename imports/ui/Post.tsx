import React from 'react';
import axios from 'axios';

import { PostData, PostsCollection } from '../api/posts'


export class Post extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        const link = `https://www.reddit.com/r/popular.json`;
        axios.get(link)
            .then(res => {
                res.data.data.children.map((child: Object) => {
                    const newObject: PostData = {
                        _id: child.data.id,
                        name: child.data.name,
                        title: child.data.title,

                        url: child.data.url,
                        createdAt: child.data.created
                    }
                    this.setState(prevState => prevState.posts.push(newObject));

                });
                return this.state.posts
                
            // }).then(posts => {
            //     posts.forEach((post: PostData) => {
            //         PostsCollection.insert(post)
            //     })
            })
            .catch(error => {
                console.error(`There was an error fetching data from ${link}! or it happened while inserting in database!`, error);
            });
    }

    render() {
        return (
            <div>
                <br />
                { this.state.posts.map((post: PostData, index) =>
                    <ul>
                        <h3>Post number {index + 1}</h3>
                        <li>ID: {post._id}</li>
                        <li>NAME: {post.name}</li>
                        <li>TITLE: {post.title}</li>
                        <li>URL: {post.url}</li>
                        <li>CREATEDAT: {post.createdAt}</li>
                        <br />
                    </ul>)}
            </div>
        )
    }
}