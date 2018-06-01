import React, { Component } from 'react'

class Post extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            posts: []
        }
    }

    componentWillMount(){
        console.log("Running the fetch API");
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({posts: data}));
    }

  render() {

    const postItems = this.state.posts.map(posts => (
        <div key= {posts.id}>
            <h3>{posts.title}</h3>
            <p>{posts.body}</p>
            <hr/>
        </div>
    ));

    return (
      <div>
      <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

export default Post;
