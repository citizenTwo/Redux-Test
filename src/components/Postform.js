import React, { Component } from 'react'

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

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data));
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

export default PostForm;
