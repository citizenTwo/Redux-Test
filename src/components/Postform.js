import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createPost} from '../actions/postAction'

class PostForm extends Component {

    constructor(props){
        super(props);

        this.state={
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
    }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>

            <div>
                <input 
                type="text" 
                name="title"
                placeholder="Title"
                onChange={this.onChange}
                value={this.state.title}/>
            </div><br/>
           
            <div>
                <textarea 
                name="body" 
                placeholder="Body"
                onChange={this.onChange}
                value={this.state.body}/>
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.PropTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm);
