import React from 'react';

import axios from 'axios';


export class Post extends React.Component {

    posts: Array<Object> = [];

    componentDidMount() {
        const link = `https://www.reddit.com/r/popular.json`;
        axios.get(link)
            .then(res => {
                res.data.data.children.forEach((child: Object) => this.posts.push(child));
            }).catch(error => {
                console.error(`There was an error fetching data from ${link}!`, error);
            });
    }

    render() {
        return (
            <ul>
                {this.posts.map(post => <li> {post.data.author} </li>)}
            </ul>
        )
    }
}