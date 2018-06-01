import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/postAction';

class Post extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

  render() {

    const postItems = this.props.posts.map(posts => (
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

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, {fetchPosts})(Post);
