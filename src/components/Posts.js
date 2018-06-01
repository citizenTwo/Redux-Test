import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/postAction';

class Post extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
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

Post.PropTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Post);
